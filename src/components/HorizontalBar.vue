<template>
  <div class="horizontalBar">
    <ButtonComponent
      v-for="(btn, idx) in deviceButtons.buttons"
      :key="idx"
      :title="btn.title"
      :icon="btn.icon"
      :smallText="btn.smallText"
      :color="btn.color"
      size="large"
    />
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, computed } from "vue";
import axios from "axios";
import ButtonComponent from "../components/ButtonComponent.vue";
import { DeviceButtons } from "../models/interfaces";

export default defineComponent({
  components: {
    ButtonComponent,
  },
  setup() {
    const deviceButtons: DeviceButtons = reactive({
      buttons: [],
    });

    const url: string = import.meta.env.VITE_MOCKED_API_URL + "/widgets";

    axios.get(url).then((res: any) => {
      deviceButtons.buttons = [
        {
          smallText: "Active Devices",
          icon: "ic-devices.svg",
          title: res.data.active_devices.value.toFixed(0),
          color: "secondary",
        },
        {
          smallText: "System Health",
          icon: "ic-notificationHeart.svg",
          title: res.data.health.value,
          color: "primary",
        },
        {
          smallText: "Energy Level",
          icon: "ic-notificationHeart.svg",
          title: res.data.energy.value,
          color: "tertiary",
        },
      ];
    });

    return { deviceButtons };
  },
});
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
