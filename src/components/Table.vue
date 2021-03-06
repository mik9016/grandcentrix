<template>
  <div class="tablesComponent">
    <div class="tablesComponent__up">
      <h1>Devices</h1>
      <ButtonComponent
        title="Claim Device"
        icon="ic-add.svg"
        color="primary"
        size="large"
      />
    </div>
    <p v-if="state.loading">is loading...</p>
    <table class="tablesComponent__down" v-if="!state.loading">
      <tr class="tablesComponent__down__columnNames">
        <th v-for="(column, idx) in columnNames" :key="idx">{{ column }}</th>
      </tr>
      <tr
        class="tablesComponent__down__content"
        v-for="(device, idx) in state.devices"
        :key="idx"
      >
        <th>
          {{ device.name }} <span>{{ device.factory_name }}</span>
        </th>
        <th class="tablesComponent__down__content__active">
          <p>Active</p>
          <div
            v-if="!state.loading && device"
            :class="`tablesComponent__down__content__active__dot ${
              device.active ? 'green' : 'red'
            }`"
          ></div>
        </th>
        <th>{{ device.version }}</th>
        <th>{{ device.serial_number }}</th>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { TableState } from "../models/interfaces";

import axios from "axios";
export default defineComponent({
  components: {
    ButtonComponent,
  },
  setup() {
    const state: TableState = reactive({
      devices: [],
      loading: true,
    });
    const url = import.meta.env.VITE_MOCKED_API_URL + "/devices";
    const columnNames = ["Device", "Status", "Version", "Serial.No"];
    axios
      .get(url)
      .then((res) => (state.devices = res.data))
      .then(() => {
        state.loading = false;
      });

    return { columnNames, state };
  },
});
</script>

<style scoped lang="scss">
.green {
  background-color: green;
}

.red {
  background-color: red;
}

.tablesComponent {
  width: 100%;
  margin: 2rem;

  h1 {
    margin-left: 1rem;
  }

  &__up {
    @include flexCenter(row, center, space-between);
    margin: 1rem;
  }

  &__down {
    margin: 1rem;
    border-radius: 10px;

    &__columnNames {
      background-color: #f3f4f7;
      height: 60px;
    }

    &__content {
      height: 60px;

      &__active {
        gap: 1rem;
        height: 60px;
        width: 100px !important;
        margin-left: 6rem;
        @include flexCenter(row, center, center);

        &__dot {
          border-radius: 50%;
          width: 10px;
          height: 10px;
        }
      }
    }
  }

  table {
    margin-top: 2rem;
    height: fit-content;
    font-family: Segoe UI, sans-serif;
    border: 2px solid grey;

    tr {
      border-radius: 10px;
      border: 1px solid grey;

      th {
        width: 25%;
      }
    }
  }
}
</style>
