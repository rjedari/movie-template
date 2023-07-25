<template>
  <div class="mx-auto max-w-[1140px] mt-10">
    <section class="flex flex-col max-md:w-fit">
      <div
        class="grid grid-cols-4 max-lg:grid-cols-1 max-lg:grid-rows-2 grid-rows-1 max-md:w-fit"
      >
        <div class="col-span-3 max-lg:grid-rows-1">
          <slider-links :SliderLink="SliderLink" @send-tab="show" />
          <first-list-wrapper :newMovie="newMovie" />
        </div>
        <first-list-wrapper-aside />
      </div>

      <the-button :title="title" :my-custom-style="customStyleClass" />
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import SliderLinks from "./SliderLinks.vue";
import TheButton from "./TheButton.vue";
import FirstListWrapper from "./FirstListWrapper.vue";
import FirstListWrapperAside from "./FirstListWrapperAside.vue";

const SliderLink = reactive([
  { title: "Now Playing", link: "now_playing" },
  { title: "Upcoming", link: "upcoming" },
  { title: " Most Popular", link: "popular" },
  { title: "Top Rated", link: "top_rated" },
  
]);

const customStyleClass = "my-button-style";
const title = ref("See All");
const newMovie =ref('')
function show (data){
  newMovie.value=data

}
</script>

<style scoped>
.my-custom-style {
  @apply sm:px-20 py-4 bg-white text-gray-950 w-96 items-center justify-center mx-auto hover:bg-gray-900 lg:mt-20 hover:text-white border  max-sm:w-full;
}
</style>
