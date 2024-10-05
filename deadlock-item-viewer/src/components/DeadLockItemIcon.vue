<script setup>
import {Item} from "@/models/models.js";
import {ref} from "vue";
import DeadlockItemDetails from "@/components/DeadlockItemDetails.vue";

const showPopup = ref(false);

const props = defineProps({
  item: Item,
})

function getBackgroundColor() {
  if(props.item.item_slot_type === "spirit") {
    return "#de9cff";
  } else if (props.item.item_slot_type === "weapon") {
    return "#fcac4d";
  } else if (props.item.item_slot_type === "vitality") {
    return "#86c921";
  }
}

function getTitleColor() {
  if(props.item.item_slot_type === "spirit") {
    return "#8b56b4";
  } else if (props.item.item_slot_type === "weapon") {
    return "#c97a03";
  } else if (props.item.item_slot_type === "vitality") {
    return "#659818";
  }
}

function getIconStyle() {
  return {
    backgroundColor: getBackgroundColor()
  };
}

function getPriceStyle() {
  return {
    backgroundColor: getTitleColor()
  };
}

function mouseEnter() {
  showPopup.value = true;
}

function mouseLeave() {
  showPopup.value = false;
}

</script>

<template>
  <div @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <!-- Popup -->
    <div style="position: relative; width: 0; height: 0;" v-if="showPopup">
      <!--      <div style="position: absolute; right: -424px; top: -180px">-->
      <div style="position: absolute; right: 40px; top: 0px">
        <DeadlockItemDetails :item="props.item" v-if="showPopup"/>
      </div>
    </div>
    <!-- Content -->
    <div class="deadlockItem">
      <p class="itemPriceHeader" :style="getPriceStyle()">{{ props.item.cost }}</p>
      <div class="itemImage" :style="getIconStyle()">
        <img :src="props.item.image" :alt="props.item.class_name" width="64" height="64" />
      </div>
      <div class="itemName"><span>{{ props.item.name }}</span></div>
      <!-- {{ props.item }} -->
    </div>
    <!-- Active Icon -->
    <div style="position: relative; width: 0; height: 0;" v-if="showPopup"></div>
  </div>
</template>

<style scoped>
.deadlockItem {
  padding: 20px;
  width: 180px;
}

.itemPriceHeader {
  border-radius: 16px 16px 0 0;
  padding: 5px;
  text-align: center;
  color: #98ffde;
  font-weight: 700;
}

.itemImage {
  text-align: center;
  padding: 5px;
}

.itemName {
  height: 58px;
  line-height: 45px;
  background-color: #f0e1ca;
  padding: 5px;
  border-radius: 0 0 16px 16px;
  text-align: center;
}

.itemName span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  font-weight: 700;
  color: #0b0200;
}
</style>