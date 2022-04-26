<template>
  <div class="horizontalBar">
    <ButtonComponent
      v-for="(btn, idx) in buttons"
      :key="idx"
      :title="btn.title"
      :icon="btn.icon"
      :smallText="btn.smallText"
      :color="btn.color"
      size="large"
    />
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from "../components/ButtonComponent.vue";
import { ref } from "vue";
import axios from "axios";

const url: string = "http://localhost:4000/devices";
const devices = ref([]);

let loading: boolean = true;
// TODO Get devices and set title property
axios.get(url).then((res) => (devices.value = res.data));

interface Button {
  smallText: string;
  icon: string;
  title: string;
  color: string;
}
const buttons: Button = [
  {
    smallText: "Active Devices",
    icon: "ic-devices.svg",
    title: "321",
    color: "secondary",
  },
  {
    smallText: "System Health",
    icon: "ic-notificationHeart.svg",
    title: "321",
    color: "primary",
  },
  {
    smallText: "Energy Level",
    icon: "ic-notificationHeart.svg",
    title: "321",
    color: "tertiary",
  },
];
</script>

<style scoped lang="scss">
.horizontalBar {
  width: 300px;
  height: calc(100vh - 60px);
  background-color: $bgCard;
  gap: 2rem;
  @include flexCenter(column, center, center);
}
</style>
