<template>
  <div >
    <div  class="border-2 bg-gray-200 p-10 m-10">
      {{ name }}
      <button @click="$emit('hazf')" class="bg-red-200 p-2">delete</button>
    </div>
  </div>
</template>

<script setup>
defineProps(["name"])
</script>

<style></style>
