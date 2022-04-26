<template>
  <div class="headerNav">
    <div class="headerNav__img">
      <img src="@/assets/logo.svg" alt="logo" width="60" height="60" />
    </div>

    <ul class="headerNav__list">
      <li v-for="item in navigation" :key="item" :class="setNavigationColor(item)">
        <router-link :to="`/${item.toLowerCase()}`">{{ item }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const navigation: string = ["Devices", "Preferences", "Support", "Account", "Signout"];

const route = useRoute();
const currentPath: string = route.path.substring(1);

function setNavigationColor(navigationItem: string): string {
  return navigationItem.toLowerCase() === currentPath ? "underlined" : "notUnderlined";
}
</script>

<style scoped lang="scss">
.underlined {
  color: $primaryColor;

  a {
    text-decoration: underline;
    color: $primaryColor;
    text-decoration-color: $primaryColor;
  }
}

.notUnderlined {
  a {
    text-decoration: none;
    color: white;
  }
}

.headerNav {
  display: flex;
  flex-direction: space-between;
  background-color: $bgCard;
  height: 60px;
  width: 100%;

  &__img {
    align-self: flex-start;
    justify-self: flex-start;
    width: 30%;
    margin-left: 1rem;
  }

  ul {
    @include flexCenter(row, flex-end, flex-end);
    width: 100%;
    margin-right: 2rem;
    gap: 3rem;

    li {
      font-family: Segoe UI;
      list-style: none;
      font-size: 1.2rem;
    }
  }
}
</style>
