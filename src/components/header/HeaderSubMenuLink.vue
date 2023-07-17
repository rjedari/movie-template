<template>
  <ul class=""  v-for="link in links" :key="link">
    <a href="">
        <li class="py-1 my-2 text-gray-800 font-bold hover:text-yellow-600">
        
   {{ link }}
    </li>
    </a>
    

  </ul>
</template>

<script setup>
defineEmits([]);
const props = defineProps(["links" ]);

</script>

<style></style>
