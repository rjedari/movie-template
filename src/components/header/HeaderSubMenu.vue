<template>
  <div class="relative x pt-4">
    <a class="text-white px-8 py-4 hover:text-yellow-500"> <slot></slot></a>
    <div class="absolute hidden top-12 bg-gray-100">
      <div class="flex">
        <div class="text-sm px-4 bg-gray-100 w-60">
          <header-sub-menu-link :links="link"  />
          <!-- <header-sub-menu-link :links="y"  /> -->
        </div>
        <div v-if="subImg" class="ml-4 pb-16 bg-white poster">
          <img
            src="../../assets/image/postermenu.jpg"
            class="w-full"
            alt="Ad"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderSubMenuLink from "./HeaderSubMenuLink.vue";
defineEmits([]);
defineProps(["subImg","link"]);


</script>

<style scoped>
.poster {
  width: 500px !important;
  }
</style>
