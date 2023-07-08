<template>
  <div>
    <div class="relative p-5 mx-5 w-20 h-28 shadow-lg overflow-hidden">
      <div
        class="absolute z-1 inset-0 transition-transform duration-500 hover:scale-110"
      >
    
      <img class="" :src="src" alt="" />
    
    </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["src"]);
</script>

<style></style>
