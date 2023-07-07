<template>
  <div
    class="flex max-sm:flex-col max-sm:bg-white max-sm:bg-opacity-30 max-sm:w-64 py-2 my-1.5 px-2 max-sm:mx-1 max-sm:my-3 sm:pb-6 hover-changes-header"
  >
    <div class="relative w-60 max-sm:h-28 h-20 overflow-hidden">
      <div
        class="absolute z-10 inset-0 transition-transform duration-500 transform hover:scale-110"
      >
        <img :src="`${listDetails.src}`" alt="" />
      </div>
    </div>
    <div class="text-sm px-5 flex flex-col justify-between">
      <div class="text-white hovering-text">
        {{ listDetails.description }}
      </div>
      <div class="text-gray-600 max-sm:text-gray-400">        {{ listDetails.comment }}
</div>
    </div>
  </div>
</template>

<script setup>
defineProps(["listDetails"]);
</script>

<style></style>
