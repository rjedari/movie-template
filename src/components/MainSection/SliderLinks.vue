<template>
  <div class="">
    <div class="text-base py-5 mx-1 hover:text-yellow-500">LATEST NEWS</div>
    <div
      class="flex first-section-menu ml-1 list-none overflow-x-auto overflow-y-hidden"
    >
      <li
        v-for="({ link }, index) in SliderLink"
        :key="link"
        @click="show"
      >
        <a href="">{{ link }}</a>
      </li>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["showed"]);
defineProps(["SliderLink", "title"]);
const show = () => {
  emit("showed");
};
</script>

<style>
</style>
