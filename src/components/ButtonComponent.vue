<template>
  <button @click="clickFunction" :class="`${color} ${size}`">
    <img :src="`src/assets/icons/${icon}`" alt="btn-icon" width="30" height="30" />
    <section>
      <p v-if="smallText && smallText.length > 0" class="smallText">{{ smallText }}</p>
      <p>{{ title }}</p>
    </section>
  </button>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  icon: string;
  clickFunction: any;
  color: string;
  smallText?: string;
  size: string;
}
const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.primary {
  background-color: $primaryColor;
}

.secondary {
  background-color: $secondaryColor;
}

.tertiary {
  background-color: $tertiaryColor;
}

.middle {
  width: 150px;
}

.large {
  width: 200px;
}

button {
  border: none;
  color: white;
  min-width: 150px;
  min-height: 50px;
  height: fit-content;
  cursor: pointer;
  border-radius: 10px;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.1rem;
  @include flexCenter(row, center, center);

  img {
    padding-right: 8px;
  }

  .smallText {
    font-size: 0.8rem;
  }

  section {
    flex-direction: column;
  }
}
</style>
