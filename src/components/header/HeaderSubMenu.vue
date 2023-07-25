<template>
  <div class="relative x pt-4">
    <a class="text-white px-10 py-4 hover:text-yellow-500"> <slot></slot></a>
    <div class="absolute hidden top-12 bg-gray-100">
      <div class="flex">
        <div class="text-sm px-4 bg-gray-100 w-80">
          <header-sub-menu-link  />
        </div>
        <div v-if="subImg" class="ml-4 py-10 bg-white poster">
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
defineProps(["subImg"]);


const ul_1 = ref([
  "Home",
  "MOVIE HOME SPACE",
  "Trailers",
]);

const ul_2 = ref([
  "Login",
  "Home",
]);
</script>

<style scoped>
.poster {
  width: 500px !important;
}
</style>
