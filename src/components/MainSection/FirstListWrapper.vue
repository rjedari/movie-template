<template>
  <div
    class="px-1 gap-3 grid-rows-3 justify-center max-md:justify-normal items-center max-sm:max-w-fit max-md:grid-cols-2 max-sm:gap-5 max-md:grid-rows-2 max-sm:gap-x-64 max-sm:grid-cols-3 max-sm:overflow-x-auto grid grid-cols-3 mt-5"
  >
  
    <div v-for="movie in movieList" :key="movie.id"> 
      <first-list-wrapper-items  
      :title="movie.original_title"
            :index="index"
            :id="movie.id"
            :overview="movie.overview"
            :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE}${movie.poster_path}`"
            :release-date="movie.release_date"
            :rating="movie.vote_average"
      />
        </div> 
    <!-- <div
      class="flex row-span-2 col-span-2 mx-auto flex-col max-sm:w-60 max-sm:h-32 max-sm:col-span-1 max-sm:row-span-1 max-md:col-span-2 max-md:row-span-2 max-md:w-3/4 max-md:h-72 w-full h-full hover-changes-header"
    >   -->
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { toRaw } from '@vue/reactivity'; // Import toRaw from @vue/reactivity

import FirstListWrapperItems from "./FirstListWrapperItems.vue";
import {
  API_IMAGE_BASE_URL,
  API_IMAGE_SIZE,
  API_READ_ACCESS_TOKEN,
} from "../constance/api-constants-two";

import FirstListWrapperAside from "./FirstListWrapperAside.vue";

const movieList = ref([]);
const limit =6
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDkyOWJhZjNhNzE1NjliOGI5ZGIyYjQwOGYzMTc5ZSIsInN1YiI6IjY0YTJjZDU1ZThkMDI4MDBmZjhhODMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dxCbiZ9WfudsL0yenKNM5sjDsr109wLWiSUQ2Obh0wo",
  },
};

onMounted(() => {
  fetch(`https://api.themoviedb.org/3/movie/now_playing`, options)

    .then((response) => response.json())
    .then((response) => {
     movieList.value =response.results
   


    })
    .catch((err) => console.error(err));
});



</script>

<styles></styles>
