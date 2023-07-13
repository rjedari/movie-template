<template>
  <form>
    <TheInput :title="email" :id="email" > Email</TheInput>
    <the-input :title="password"  :id="pass"> Password </the-input>
    <div class="flex items-center justify-between">
      <the-button   :my-custom-style="myCustomStyleClass" > sign up </the-button>
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
import { onMounted, reactive, ref } from "vue";
import TheInput from "../TheInput.vue";

const myCustomStyleClass = "my-custom-style";
const email = "Email";
const password = "Password";
</script>

<style scoped>
.my-custom-style {
  @apply bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded;
}
</style>
