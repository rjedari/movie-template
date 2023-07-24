<template>
  <div class="flex  items-center flex-col justify-center min-h-screen ">
  <h1 class="md:text-7xl text-5xl text-yellow-600 my-5">404</h1>
  <h2>sorry we didn't found the page you are looking for...  </h2>
  <span>: (</span>
  <router-link class="mt-20 text-yellow-600 font-bold hover:text-yellow-500" :to="{ name: 'Home'}">BACK TO HOME
</router-link>

  </div>
</template>

<script setup>


</script>

<style>

</style>