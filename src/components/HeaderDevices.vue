<template>
  <div class="headerNav">
    <div class="headerNav__img">
      <img src="@/assets/logo.svg" alt="logo" width="60" height="60" />
    </div>

    <ul class="headerNav__list">
      <li v-for="item in navigation" :key="item" :class="setNavigationColor(item)">
        <router-link v-if="item !== 'Signout'" :to="`/${item.toLowerCase()}`">{{
          item
        }}</router-link>
        <li v-else @click="logout">
        <router-link  :to="`/login`" >{{ item }}</router-link>
        </li>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const navigation: Array<string> = [
  "Devices",
  "Preferences",
  "Support",
  "Account",
  "Signout",
];

const route = useRoute();
const currentPath = route.path.substring(1);

function setNavigationColor(navigationItem: string): string {
  return navigationItem.toLowerCase() === currentPath ? "underlined" : "notUnderlined";
}

function logout():void {
  store.commit("logout");
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
  padding-top: 1rem;

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
