<script setup>
import {onMounted, reactive, ref} from 'vue';
import '../models/models.js'
import {Item, Properties, WeaponInfo} from "@/models/models.js";
import DeadLockItemIcon from "@/components/DeadLockItemIcon.vue";
import {RouterLink} from "vue-router";

const props = defineProps({
  type: String,
})

const itemList = reactive({ items: [] })
const itemsToDisplay = reactive({items: []})

onMounted(() => {
  console.log("Fetching!")
  fetch('https://assets.deadlock-api.com/v1/items?language=english', {
    method: "GET",
    headers: [
      ["accept", "application/json"]
    ]
  }).then(
      async (success) => {
        var itemArray = await success.json()
        itemArray
            .forEach((item) => {
              if(item.type === "upgrade") {
                itemList.items.push(new Item(item))
              }
            });
        displayWeaponItems();
      },
      (failure) => {
        console.log(failure)
      }
  )
});

function displayWeaponItems() {
  itemsToDisplay.items = itemList.items.filter((item) => item.item_slot_type === "weapon")
      .sort((a, b) => a.name.localeCompare(b.name))
      .sort((a, b) => a.cost - b.cost)
}

function displaySpiritItems() {
  itemsToDisplay.items = itemList.items.filter((item) => item.item_slot_type === "spirit")
      .sort((a, b) => a.name.localeCompare(b.name))
      .sort((a, b) => a.cost - b.cost)
}

function displayVitalityItems() {
  itemsToDisplay.items = itemList.items.filter((item) => item.item_slot_type === "vitality")
      .sort((a, b) => a.name.localeCompare(b.name))
      .sort((a, b) => a.cost - b.cost)
}

function displayAllItems() {
  itemsToDisplay.items = itemList.items
}

</script>

<template>
  <div class="wrapper">

    <div class="itemFilter">
      <a class="navLink" @click="displayWeaponItems()">Weapon</a>
      <a class="navLink" @click="displaySpiritItems()">Spirit</a>
      <a class="navLink" @click="displayVitalityItems()">Vitality</a>
      <a class="navLink" @click="displayAllItems()">All</a>
    </div>
    <div class="itemList">
      <DeadLockItemIcon v-for="item in itemsToDisplay.items" class="inlineItem" :item="item"></DeadLockItemIcon>
    </div>
  </div>
</template>

<style scoped>
.inlineItem {
  display: inline-block;
}

.navLink {
  padding: 10px;
  margin-top: 50px;
  font-size: 18px;
}

.itemList {
  margin-left: 150px;
}
</style>