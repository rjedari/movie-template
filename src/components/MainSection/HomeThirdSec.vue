<template>
  <section class="container max-sm:max-w-fit my-20 flex flex-col">
    <div class="max-sm:max-w-sm">
      <div class="flex-col flex my-5 justify-center">
        <div class="flex flex-col justify-center items-center">
          <div
            class="text-black text-3xl flex hover:text-yellow-500 font-bold w-40 justify-center py-10"
          >
            RANKINGS
          </div>

          <ul
          class="border-b overflow-x-auto border-gray-600 max-w-6xl max-xl:max-w-xl flex max-lg:max-w-lg max-md:max-w-md max-xs:max-w-xs max-sm:w-52"
        >
          <slider-links :SliderLink="list" @send-tab="tab" :defultClass="true" >
          </slider-links>
        </ul>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="my-10 overflow-x-auto overflow-y-hidden flex">
          <div
            v-for="({ id, title, vote_count, poster_path }, index) in ratedList"
            :key="id"
          >
            <HomeThirdSecItem
            :id="id"
              :title="title"
              :vote_count="vote_count"
              :index="index"
              :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE}${poster_path}`"
            />
          </div>
        </div>
      </div>
     <the-button  :my-custom-style="myCustomStyleClass" :title="title"/>
    </div>
  </section>
</template>

<script setup>
import { onMounted, reactive, ref,watchEffect } from "vue";
import SliderLinks from "./SliderLinks.vue";


import HomeThirdSecItem from "./HomeThirdSecItem.vue";
import { API_IMAGE_BASE_URL, API_IMAGE_SIZE } from "../constance/api-constants";

const newList = ref();

const list = reactive([
  { title: "Now Playing", link: "now_playing" },
  { title: "Upcoming", link: "upcoming" },
  { title: " Most Popular", link: "popular" },
  { title: "Top Rated", link: "top_rated" },
  
]);
function tab(data) {
  newList.value = data;
  
}

const ratedList = ref([]);
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
      `https://api.themoviedb.org/3/movie/${newList.value}?language=en-US&page=1`,

      options
    )
      .then((response) => response.json())
      .then((response) => {
        ratedList.value = response.results;
      })
      .catch((err) => console.error(err));
  }
});


onMounted(() => {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      ratedList.value = response.results;
    })
    .catch((err) => console.error(err));
});

const myCustomLinkStyleClass = "my-custom-link-style";
const myCustomStyleClass =  'my-custom-style'
const title = 'See All'
</script>

<style scoped>
.my-custom-link-style {
  @apply text-lg text-gray-500 w-72 hover:text-black flex justify-center  py-5 px-10 hover:border-yellow-500 border-b-2    duration-300;
}

.my-custom-style {
  @apply border container max-sm:w-full mx-auto w-96 py-4 px-8 bg-black text-white justify-center  flex my-10 hover:bg-white duration-500 hover:text-black;
}
</style>
