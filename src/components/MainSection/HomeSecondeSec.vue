<template>
  <section class="mt-64 bg-black flex items-center flex-col justify-center">
    <div class="flex-col flex items-center justify-center">
      <div class="flex flex-col max-xs:max-w-xs">
        <div
          class="text-white text-3xl max-sm:text-xl flex justify-center py-10"
        >
          Trending
        </div>
        <ul
          class="border-b overflow-x-auto border-gray-600 max-w-6xl max-xl:max-w-xl flex max-lg:max-w-lg max-md:max-w-md max-xs:max-w-xs max-sm:w-52"
        >
          <slider-links :SliderLink="list" @send-tab="tab" :show="true">
          </slider-links>
        </ul>
      </div>

      <div
        class="flex overflow-y-hidden overflow-x-auto max-w-6xl bg-black max-xl:max-w-xl max-lg:max-w-lg max-md:w-fit max-md:max-w-md max-sm:w-72 max-xs:w-40"
      >
        <div v-for="(movie, index) in movieList" :key="movie.id">
          <HomeSecondSecItem
            :title="movie.original_title ||movie.name"
            :index="index"
            :id="movie.id"
            :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE}${movie.poster_path}`"
            :release-date="movie.release_date"
            :rating="movie.vote_average"
          />
        </div>
      </div>
      <the-button :my-custom-style="myCustomStyleClass" :title="title" />
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, watch, watchEffect } from "vue";
import SliderLinks from "./SliderLinks.vue";

import { API_IMAGE_BASE_URL, API_IMAGE_SIZE } from "../constance/api-constants";
import HomeSecondSecItem from "./HomeSecondSecItem.vue";
import imageA from "../../assets/image/2.a.jpg";
const title = ref("Check the most popular videos");
import { useFetch } from "../..//composable/useFetch";
const movieList = ref([]);
const newList = ref();
const list = reactive([

  { title: "Movies", link: "movie" },
  { title: "all", link: "all" },
  // { title: " On TV", link: "tv" }
  ]);
function tab(data) {
  newList.value = data;
}
onMounted(() => {
  fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      movieList.value = response.results;
    })
    .catch((err) => console.error(err));
});
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDkyOWJhZjNhNzE1NjliOGI5ZGIyYjQwOGYzMTc5ZSIsInN1YiI6IjY0YTJjZDU1ZThkMDI4MDBmZjhhODMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dxCbiZ9WfudsL0yenKNM5sjDsr109wLWiSUQ2Obh0wo",
  },
};
watchEffect(() => {
  if (newList) {
    fetch(
      `https://api.themoviedb.org/3/trending/${newList.value}/day?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        movieList.value = response.results;
      })
      .catch((err) => console.error(err));
  }
});


const myCustomStyleClass = "my-custom-style";
</script>

<style scoped>
.btn {
  width: 24rem;
  background-color: black !important;
  color: white !important;
}
.my-custom-style {
  @apply border w-96 max-md:w-fit py-4 px-8 justify-center flex my-10 text-white hover:bg-white duration-500 hover:text-black;
}
/* .my-custom-link-style {
  @apply sm:px-20 py-4  text-white w-96 items-center justify-center mx-auto  lg:mt-20  border  max-sm:w-full;
} */
</style>
