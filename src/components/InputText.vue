<template>
  <div class="inputText">
    <label>{{ label }}</label>
    <input :type="type" v-model="data" @change="handleWriting()" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  label: string;
  type: string;
  up: boolean;
}
const props = defineProps<Props>();

const data = ref("");

const emit = defineEmits(["writes"]);

const handleWriting = (): void => {
  emit("writes", data.value);
};
</script>

<style scoped lang="scss">
.inputText {
  width: 100%;
  height: 50px;
  @include flexCenter(row, center, center);

  label {
    height: 51px;
    width: 100px;
    @include flexCenter(row, center, flex-end);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: $bgInput;
    color: grey;
    font-size: 1.2rem;
  }

  input {
    width: 80%;
    height: 50px;
    min-width: 100px;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: $bgInput;
    color: grey;
    padding-left: 16px;
    font-size: 1.2rem;

    &:focus {
      outline: none;
    }
  }
}
</style>
