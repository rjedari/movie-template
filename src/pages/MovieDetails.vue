<template>
  <div class="mt-64">movie details</div>
  <div>{{ $route.params.id }}</div>
</template>

<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";

function getMovieDetail(movie_id) {
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDkyOWJhZjNhNzE1NjliOGI5ZGIyYjQwOGYzMTc5ZSIsInN1YiI6IjY0YTJjZDU1ZThkMDI4MDBmZjhhODMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dxCbiZ9WfudsL0yenKNM5sjDsr109wLWiSUQ2Obh0wo'
  }
};

fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}
const route = useRoute();

watch(
  () => route.params.id,
  (newId) => {
    getMovieDetail(newId);
  },
  { immediate: true }
);
</script>

<style></style>
