<template>
  <div class="font-serif">
    <div v-if="loading" class="mt-64">Loading...</div>
    <div v-else>
      <div class="">
        <div>{{ $route.params.id }}</div>

        <main class="max-lg:my-28 my-28">
          <section class="container font-serif justify-start">
            <div class="flex flex-col mx-4 items-start border-b-2">
              <div class=" ">
                <ul class="max-lg:flex-wrap flex my-2 text-xs">
                  <li class="hover:text-gray-600 text-gray-400">
                    <a class="p-2" href=""
                      >Home News
                      <i class="fa fa-chevron-right text-yellow-500"></i
                    ></a>
                  </li>
                  <li class="hover:text-gray-600 text-gray-400">
                    <a class="p-2" href=""
                      >Videos <i class="fa fa-chevron-right text-yellow-500"></i
                    ></a>
                  </li>
                  <li class="hover:text-gray-600 text-gray-400">
                    <a class="p-2" href=""
                      >{{ data?.original_title || "No data available" }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="py-6 mx-4 x_container">
              <div class="text-yellow-500 text-sm hover:text-yellow-600">
                movie
              </div>
              <div class="my-3 text-bold text-4xl">
                {{ data?.original_title ||data?.name ||"No data available" }}
              </div>
              <div class="flex max-[600px]:flex-col flex-row justify-between">
                <div class="flex text-gray-500 max-lg:flex-wrap text-sm">
                  Variety /
                  <span class="text-gray-600 hover:text-gray-900 font-bold"
                    ><a href=""> author: Ewelina Leszczyńska / </a></span
                  >
                  <span> 22-05-2023 10:16</span>
                </div>
                <div class="flex">
                  <a class="mx-1" href=""
                    ><img src="./assets/image/tt.svg" alt=""
                  /></a>
                  <a class="mx-1" href=""
                    ><img src="./assets/image/ff.svg" alt=""
                  /></a>
                  <a class="mx-1" href=""
                    ><img src="./assets/image/mm.svg" alt=""
                  /></a>
                  <a class="mx-1" href=""
                    ><img src="./assets/image/yy.svg" alt=""
                  /></a>
                </div>
              </div>
            </div>
          </section>
          <section
            class="container md:flex-row border-gray-200 bg-black rounded-md p-5 flex flex-col mx-auto"
          >
            <img
              :src="getMoviePosterUrl(data?.poster_path)"
              alt="Movie Poster"
            />

            <div class="text-white p-10">
              <div>
                <p class="text-4xl pb-5 text-white">
                  {{ data?.original_title || "No data available" }}
                </p>
                <div
                  class="text-lg text-yellow-600 hover:text-yellow-400 block"
                >
                  {{ formatDate(data?.release_date) || "N/A" }}
                </div>
              </div>
              <div class="">
                <strong class="text-yellow-500 text-lg block"
                  >Original Language:</strong
                >
                <p>{{ data?.original_language || "N/A" }}</p>
              </div>
              <div class="my-7">
                <strong class="text-yellow-500 text-lg">Genres:</strong>
                <ul>
                  <a
                    class="p-5 text-gray-200 hover:text-white cursor-pointer"
                    v-for="genre in genres"
                    :key="genre.id"
                  >
                    {{ genre.name }}
                  </a>
                </ul>
              </div>
              <div>
                <strong class="text-yellow-500">Rating:</strong>
                {{ data?.vote_average || "N/A" }}
              </div>
              <div class="text-white py-4">
                <p>
                  <strong class="text-yellow-500 text-lg">Budget:</strong>
                  {{ data?.budget || "N/A" }}
                </p>
              </div>
            </div>
          </section>
          <section class="max-lg:flex-col flex flex-row mx-auto container ">
            <section class="container mx-auto my-10 px-4 max-w-3xl">
              <div class="my-4">
                <h2 class="text-2xl font-bold text-yellow-500">Casting</h2>
                <ul class="flex flex-wrap">
                  <a
                    v-for="actor in casting"
                    :key="actor.id"
                    class="text-black p-2 border rounded-xl my-1 hover:bg-gray-200 mx-3"
                  >
                    {{ actor.name }}
                  </a>
                </ul>
              </div>
              <h2 class="text-3xl mb-5 text-yellow-500 font-bold">Story :</h2>
              <p class="text-gray-600">{{ data?.overview || "N/A" }}</p>
            </section>

            <section
              class="max-lg:my-8 my-8 relative rounded-sm h-96 shadow-lg w-80 max-lg:w-fit mx-10 border text-xl"
            >
              <div class="flex flex-col px-2 py-4">
                <div class="flex max-[500px]:flex-col">
                  <img
                    class="w-32 max-lg:hidden block p-1"
                    :src="getMoviePosterUrl(data?.poster_path)"
                    alt="Movie Poster"
                  />
                  <div class="text-sm my-2 font-serif font-bold">
                    {{ data?.original_title || "No data available" }}
                    <div class="text-xs block">
                      {{ formatDate(data?.release_date) || "N/A" }}
                    </div>
                  </div>
                </div>
                <div class="flex items-center px-2 border-t py-2">
                  <div
                    class="border-2 border-yellow-600 items-center rounded-md flex flex-col"
                  >
                    <div class="border-b text-gray-600 bg-gray-200 p-2">19</div>
                    <div class="text-gray-500 text-xs px-2">jun</div>
                  </div>
                  <div class="text-sm font-serif text-gray-600 mx-2">
                    The movie is waiting for the premiere World premiere in 2
                    months
                  </div>
                </div>
                <button
                  class="border hover:text-yellow-500 duration-150 text-lg font-serif py-3 px-5"
                >
                  <i class="fa fa-eye"></i> Watch Later
                </button>
              </div>
              <div
                class="flex absolute hover:text-yellow-600 right-0 text-yellow-500"
              >
                <i class="fa fa-chevron-circle-right"></i>
              </div>
              <div
                class="flex absolute hover:text-yellow-600 left-0 text-yellow-500"
              >
                <i class="fa fa-chevron-circle-left"></i>
              </div>
            </section>
          </section>
          <section class="container font-serif justify-start">
            <div class="relative mx-4">
              <div class="text-lg py-5 font-bold">RELATED ARTICLES</div>
              <div class="overflow-x-auto relative flex">
                <div v-for="item in related" :key="item.id">
                  <first-list-wrapper-items
                    :id="item.id"
                    :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE}${item.poster_path}`"
                    :overview="item.overview"
                  />
                </div>
              </div>
              <div class="absolute -right-0 z-50 top-1/2">
                <i
                  class="fa fa-chevron-circle-right text-yellow-500 text-xl"
                ></i>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    <div v-if="error" class="text-red-500">request failed</div>
  </div>
</template>

<script setup>
import { watch, ref, onMounted } from "vue";

import FirstListWrapperItems from "../components/MainSection/FirstListWrapperItems.vue";
import { useFetch } from "../composable/useFetch.js";
import {
  API_IMAGE_BASE_URL,
  API_IMAGE_SIZE,
} from "../components/constance/api-constants-two";
const genres = ref([]);

const related = ref([]);
const casting = ref([]);
import { useRoute } from "vue-router";
import {
  API_BASE_URL,
  API_VERSION,
} from "../components/constance/api-constants.js";
import { MOVIE_DETAILS_URL } from "../components/constance/endpoints.js";

const route = useRoute();
const { doFetch, data, loading, error } = useFetch();
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDkyOWJhZjNhNzE1NjliOGI5ZGIyYjQwOGYzMTc5ZSIsInN1YiI6IjY0YTJjZDU1ZThkMDI4MDBmZjhhODMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dxCbiZ9WfudsL0yenKNM5sjDsr109wLWiSUQ2Obh0wo",
  },
};
watch(
  () => route.params.id,
  (newId) => {
    doFetch(
      `${API_BASE_URL}${API_VERSION}${MOVIE_DETAILS_URL(newId)}?language=en-US`
    );

    fetch(
      `https://api.themoviedb.org/3/movie/${newId}/credits?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        casting.value = response.cast;
      })
      .catch((err) => console.error(err));

    fetch(`https://api.themoviedb.org/3/movie/${newId}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => {
        genres.value = response.genres;
      })
      .catch((err) => console.error(err));
  },

  { immediate: true }
);

onMounted(() => {
  fetch(`https://api.themoviedb.org/3/movie/25/similar?language=en-US`, options)
    .then((response) => response.json())
    .then((response) => {
      related.value = response.results;
    })
    .catch((err) => console.error(err));
});
const getMoviePosterUrl = (posterPath) => {
  if (!posterPath) {
    return ""; // Return an empty string if no poster path is available
  }
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
};
function formatDate(dateString) {
  if (!dateString) return "N/A";

  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}
</script>

<style></style>
