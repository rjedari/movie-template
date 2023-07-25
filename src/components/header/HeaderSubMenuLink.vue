<template>

  <ul v-for="x in links">
    <router-link :to="{name:x}">
      <li class="py-1 my-2 text-gray-800 font-bold cursor-pointer hover:text-yellow-600"> {{ x }}</li>
      
     </router-link> </ul>

</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

defineProps(["links",]);



</script>

<style></style>
