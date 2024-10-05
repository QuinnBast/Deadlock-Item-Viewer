<script setup>
import {Item} from "@/models/models.js";

const props = defineProps({
  item: Item,
})

function getTitleColor() {
  if(props.item.item_slot_type === "spirit") {
    return "#8B56B4";
  } else if (props.item.item_slot_type === "weapon") {
    return "#c97a03";
  } else if (props.item.item_slot_type === "vitality") {
    return "#659818";
  }
}

function getDescriptionColor() {
  if(props.item.item_slot_type === "spirit") {
    return "#623585";
  } else if (props.item.item_slot_type === "weapon") {
    return "#80550F";
  } else if (props.item.item_slot_type === "vitality") {
    return "#4D7214";
  }
}

function getHeaderStyle() {
  return {
    backgroundColor: getTitleColor()
  };
}

function getDescriptionStyle() {
  return {
    backgroundColor: getDescriptionColor()
  };
}

function getRelevantItemStatistics() {
  var properties = props.item.json.properties;
  var relevantProps = []
  for(var key in properties) {
    if(properties[key] !== 0) {
      relevantProps.push({ name: key, value: properties[key] })
    }
  }
  return relevantProps;
}

</script>

<template>
  <div class="popupInformation">
    <div>
      <div class="itemDetailHeader" :style="getHeaderStyle()">
        <p>{{ props.item.name }}</p>
        <p>{{ props.item.cost }}</p>
      </div>
      <div class="itemDetailDescription" :style="getDescriptionStyle()">
        <div v-for="property in getRelevantItemStatistics()">
          <div>{{ property.name }}: {{ property.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popupInformation {
  display: block;
  float: right;
  border: 2px solid red;
  width: 400px;
}

.itemDetailHeader {
  border-radius: 16px 16px 0 0;
  padding: 5px;
  text-align: center;
  color: #FFEFD7;
  font-weight: 700;
  font-size: 36px;
}

.itemDetailDescription {

}
</style>