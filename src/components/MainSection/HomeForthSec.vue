<template>
  <section
    class="container h-auto max-sm:max-w-fit flex flex-col"
    style="margin: 10% auto"
  >
    <div class="max-sm:max-w-sm">
      <div class="flex-col flex my-5 justify-center">
        <div class="flex flex-col justify-center items-center">
          <div
            class="text-black text-3xl flex hover:text-yellow-500 font-bold w-40 justify-center py-10"
          >
            ON TV
          </div>

          <ul
            class="border-b overflow-x-auto border-gray-600 max-w-6xl max-xl:max-w-xl flex max-lg:max-w-lg max-md:max-w-md max-xs:max-w-xs max-sm:w-52"
          >
            <slider-links
              :SliderLink="list"
              @send-tab="tab"
              :defultClass="true"
            >
            </slider-links>
          </ul>
        </div>
      </div>
      <div
        class="flex overflow-x-auto items-center overflow-y-hidden mb-10"
        style="height: 400px"
      >
        <div
          v-for="({ poster_path, name, vote_average, id }, index) in onTvList"
          :key="id"
        >
          <HomeForthSecItem
          :id="id"
          :name="name"
            :index="index"
            :vote_average="vote_average"
            :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE}${poster_path}`"
          />
        </div>
      </div>
      <the-button :title="title" :my-custom-style="myCustomStyleClass" />
    </div>
  </section>
</template>

<script setup>
import { onMounted, reactive, ref, watchEffect } from "vue";
import HomeForthSecItem from "./HomeForthSecItem.vue";
const myCustomLinkStyleClass = "my-custom-link-style";
import { API_IMAGE_BASE_URL, API_IMAGE_SIZE } from "../constance/api-constants";
import SliderLinks from "./SliderLinks.vue";

const myCustomStyleClass = "my-custom-style";
const title = "See All";
const onTvList = ref([]);
const newList = ref();

const list = reactive([
  { title: "Airing Today", link: "airing_today" },
  { title: "Top Rated", link: "top_rated" },

  { title: " Most Popular", link: "popular" },
]);
function tab(data) {
  newList.value = data;
  console.log(data);
}

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
      `https://api.themoviedb.org/3/tv/${newList.value}?language=en-US&page=1`,

      options
    )
      .then((response) => response.json())
      .then((response) => {
        onTvList.value = response.results;
      })
      .catch((err) => console.error(err));
  }
});

onMounted(() => {
  fetch(
    "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      onTvList.value = response.results;
    })
    .catch((err) => console.error(err));
});
</script>

<style scoped>
.my-custom-style {
  @apply border container max-md:w-full w-96 py-4 px-8 bg-black mx-auto text-white justify-center flex max-sm:max-w-fit  hover:bg-white duration-500 hover:text-black;
}
.my-custom-link-style {
  @apply text-lg text-gray-500 hover:text-black py-5 px-12 mx-10 hover:border-yellow-500 border-b-2   duration-200;
}
</style>
