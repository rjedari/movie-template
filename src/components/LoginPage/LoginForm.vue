<template>
  <form @submit.prevent="signin">
    <TheInput  id="email" :type="'text'" @inputValue="handleEmailInput"> Email</TheInput>

    <the-input id="password" :type="'password'" @inputValue="handlePassInput">
      Password
    </the-input>
    <div class="flex items-center justify-between">
      <the-button :my-custom-style="myCustomStyleClass" :type="'submit'"> Login</the-button>
      <a
        class="inline-block align-baseline font-bold text-sm text-yellow-500 hover:text-yellow-800"
        href="#"
      >
        Forgot Password?
      </a>
    </div>
  </form>
</template>

<script setup>
const router = useRouter()
import { onMounted, reactive, ref } from "vue";
import TheInput from "../TheInput.vue";
import { login } from "../../Utils/loginUtils";
import { useRoute, useRouter } from "vue-router";

const myCustomStyleClass = "my-custom-style";

function handleEmailInput(data) {
  username.value = data;
}
function handlePassInput(data) {
  password.value = data;
}
const username = ref("");
const password = ref("");

function signin() {
  login(username.value, password.value);
  console.log(username.value, password.value);
  
}
</script>

<style scoped>
.my-custom-style {
  @apply bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded;
}
</style>
