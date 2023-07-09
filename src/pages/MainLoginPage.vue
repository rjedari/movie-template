<template>
  <div class="bg-gray-100 font-serif pooster">
    <header-menu />
    <div class="flex flex-col items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
        <h1 class="text-2xl font-bold mb-6">Login</h1>
        <login-form />
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginForm from "../components/LoginPage/LoginForm.vue";
</script>

<style scoped>
.pooster {
  background-image: url("../../assets/image/posterBackground-repeatable-34b3751e.jpg");
}
</style>
