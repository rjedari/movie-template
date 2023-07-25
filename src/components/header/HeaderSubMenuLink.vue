<template>
  <ul class="">
    <router-link v-for="link in ul_1" :key="link" :to="{ name: link }">
      <li class="py-1 my-2 text-gray-800 font-bold cursor-pointer hover:text-yellow-600">
        {{ link }}
      </li>
    </router-link>
  </ul>

  <ul class="">
    <router-link v-for="link in ul_2" :key="link" :to="{ name:link }">
      <li class="py-1 my-2 text-gray-800 font-bold cursor-pointer hover:text-yellow-600">
        {{ link }}
      </li>
    </router-link>
  </ul>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';


const ul_1 = ref([
  "404",

]);

const ul_2 = ref([
  "Login",
  "Home", 
]);

// function getRouteName(link) {
//   // Perform any transformations on the link name if needed
//   // For now, just return the link as is
//   return link;
// }
</script>

<style></style>
