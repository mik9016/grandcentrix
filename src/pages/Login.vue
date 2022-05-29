<template>
  <div class="login">
    <div class="login__card">
      <section class="login__card__title">
        <div class="login__title__logo">
          <img src="@/assets/logo.svg" alt="logo" width="60" height="60" />
        </div>
        <h1>Sign In</h1>
      </section>
      <section class="login__card__inputs">
        <InputText
          label="Email"
          type="email"
          :up="false"
          @writes="setFormData($event, 'email')"
        />
        <InputText
          label="Password"
          type="password"
          :up="true"
          @writes="setFormData($event, 'password')"
        />
      </section>
      <div v-if="error" class="login__card__error">Fields can not be empty!</div>
      <ButtonComponent
        class="login__card__btn"
        title="Login"
        icon="ic-arrow-right.svg"
        color="primary"
        size="middle"
        :clickFunction="login"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import InputText from "../components/InputText.vue";
import ButtonComponent from "../components/ButtonComponent.vue";

interface loginData {
  email: string;
  password: string;
}

const formData: loginData = {
  email: "",
  password: "",
};

let error = ref(false);

const router = useRouter();

function setFormData(e: string, option: string): string {
  return option === "email" ? (formData.email = e) : (formData.password = e);
}

function login(): any {
  if (+formData.email.length > 0 && +formData.password.length > 0) {
    error.value = false;
    return router.push("/devices");
  }

  error.value = true;
}
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100vh;
  background-color: $bgLogin;
  @include flexCenter(column, center, center);
  font-family: Segoe UI;

  &__card {
    background-color: $bgCard;
    width: 30%;
    height: fit-content;
    border-radius: 25px;

    &__error {
      border: 2px red solid;
      margin: 1rem;
      padding: 1rem;
      text-align: center;
      color: red;
    }

    &__title {
      color: white;
      @include flexCenter(row, center, flex-start);
      margin: 1rem;
      gap: 1rem;

      h1 {
        line-height: 2rem;
        font-size: 2rem;
      }
    }

    &__inputs {
      margin: 1rem;
      @include flexCenter(column, center, center);
      gap: 1rem;
    }

    &__btn {
      margin: 1rem;
      color: white;
    }
  }
}
</style>
