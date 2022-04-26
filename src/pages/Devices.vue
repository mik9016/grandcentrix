<template>
  <div class="devices">
    <HeaderDevices />
    <div class="devices__content">
      <HorizontalBar class="devices__content__bar" />
      <Table class="devices__content__table" />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderDevices from "../components/HeaderDevices.vue";
import HorizontalBar from "../components/HorizontalBar.vue";
import Table from "../components/Table.vue";
</script>

<style scoped lang="scss">
.devices {
  background-color: $bgCard;
  &__content {
    background-color: $bgCard;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;

    &__bar {
      width: 30%;
    }

    &__table {
      width: 70%;
      border-radius: 25px;
      background-color: white;
    }
  }
}
</style>
