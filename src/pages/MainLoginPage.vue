<template>
  <div class="bg-gray-100 font-serif pooster">
    <header-menu />
    <div class="flex flex-col items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
        <h1 class="text-2xl font-bold mb-6">Login</h1>
        <!-- <login-form /> -->

        <form
          @submit.prevent="signin"
          class="flex flex-col items-center gap-2 justify-center content-center text-secondary w-full"
        >
          <label for="username" ></label>
          <input
            type="text"
            name="username"
            v-model="username"
            placeholder="Username"
            class="text-black border-[3px] border-primary rounded-3xl block bg-transparent p-3 outline-none w-full"
          />
          <p class="error" id="username"></p>
          <label for="password" class="hidden"></label>
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="Password"
            class="text-black border-[3px] border-primary rounded-3xl block bg-transparent p-3 outline-none w-full"
          />
          <p class="error" id="password"></p>
          <input type="submit" class="bg-primary text-white p-2 rounded-3xl" />
        </form>
        <a
          href="https://www.themoviedb.org/signup"
          class="text-white bg-yellow-400 rounded-lg text-sm text-center py-3 px-5 inline-block"
          >Sign Up</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
// import LoginForm from "../components/LoginPage/LoginForm.vue";

import { ref } from "vue";
import { login } from "../Utils/loginUtils.js";

const username = ref("");
const password = ref("");

function signin() {
  login(username.value, password.value);
  console.log(username.value, password.value);
}

</script>

<style scoped>
.pooster {
  background-image: url("../assets/image/posterBackground-repeatable-34b3751e.jpg");
}
</style>
