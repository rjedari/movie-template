<template>
  <div
    class="px-1 gap-3 grid-rows-3 justify-center max-md:justify-normal items-center max-sm:max-w-fit max-md:grid-cols-2 max-sm:gap-5 max-md:grid-rows-2 max-sm:gap-x-64 max-sm:grid-cols-3 max-sm:overflow-x-auto grid grid-cols-3 mt-5"
  >
    <div v-for="({ src, comment }, index) in movieList" :key="src">
      <first-list-wrapper-items :src="src" :comment="comment" />
    </div>

    <!-- <div
      class="flex row-span-2 col-span-2 mx-auto flex-col max-sm:w-60 max-sm:h-32 max-sm:col-span-1 max-sm:row-span-1 max-md:col-span-2 max-md:row-span-2 max-md:w-3/4 max-md:h-72 w-full h-full hover-changes-header"
    >   -->
     
   
  </div>
</template>

<script setup>
import { reactive } from "vue";
import FirstListWrapperItems from "./FirstListWrapperItems.vue";
import img1 from "../../assets/image/a.jpg";
import img2 from "../../assets/image/b.jpg";
import img3 from "../../assets/image/c.jpg";
import img4 from "../../assets/image/d.jpg";
import img5 from "../../assets/image/e.jpg";
import img6 from "../../assets/image/f.jpg";
import img7 from "../../assets/image/g.jpg";
import img8 from "../../assets/image/h.jpg";
import img9 from "../../assets/image/i.jpg";
import img10 from "../../assets/image/j.jpg";
import img11 from "../../assets/image/a.jpg";
import img12 from "../../assets/image/b.jpg";
import img13 from "../../assets/image/c.jpg";
import FirstListWrapperAsideVue from "./FirstListWrapperAside.vue";
const movieList = reactive([
  { comment: " Lorem ipsum dolor sit amet.", src: img1 },
  { comment: " Lorem ipsum dolor sit amet.", src: img2 },
  { comment: " Lorem ipsum dolor sit amet.", src: img3 },
  { comment: " Lorem ipsum dolor sit amet.", src: img4 },
  { comment: " Lorem ipsum dolor sit amet.", src: img5 },
  { comment: " Lorem ipsum dolor sit amet.", src: img6 },
  { comment: " Lorem ipsum dolor sit amet.", src: img7 },
  { comment: " Lorem ipsum dolor sit amet.", src: img8 },
  { comment: " Lorem ipsum dolor sit amet.", src: img8 },
  { comment: " Lorem ipsum dolor sit amet.", src: img9 },
]);
</script>

<style></style>
