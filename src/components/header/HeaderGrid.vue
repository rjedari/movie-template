<template>
  <div class="mt-36">
    <div class="grid grid-cols-2 max-lg:grid-cols-1">
      <div>
        <div
          class="relative raz hover-changes-header w-full h-96 overflow-hidden"
        >
          <header-movie-card :details="details" />
        </div>

        <div class="flex max-sm:mx-1 mt-5 gap-2">
          <div class="relative hover-changes-header raz w-80 overflow-hidden">
            <header-movie-card :details="detailsA" />
          </div>
          <div
            class="relative hover-changes-header raz w-80 h-40 overflow-hidden"
          >
            <header-movie-card :details="details" />
          </div>
        </div>
      </div>
      <div class="flex flex-col max-lg:flex-row gap-4">
        <div
          class="overflow-x-auto max-sm:grid max-sm:grid-row-2 max-sm:gap-x-64 max-sm:grid-cols-2"
        >
          <header-movie-card-list :listDetails="listDetails" />
          <header-movie-card-list :listDetails="listDetailsA" />
          <header-movie-card-list :listDetails="listDetailsB" />
          <header-movie-card-list :listDetails="listDetailsC" />
          <header-movie-card-list :listDetails="listDetails" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import HeaderMovieCard from "./headerCard/HeaderMovieCard.vue";
import HeaderMovieCardList from "./headerCard/HeaderMovieCardList.vue";
import image from "../../assets/image/header-img.jpg";
import img4 from "../../assets/image/4.jpg";
import img5 from "../../assets/image/5.jpg";
import img6 from "../../assets/image/6.jpg";
import img7 from "../../assets/image/7.jpg";
import imageA from "../../assets/image/2.jpg";

// import image from "./assets/image/header-img.jpg"
// import image from "./assets/image/header-img.jpg"
// import image from "./assets/image/header-img.jpg"
// import image from "./assets/image/header-img.jpg"
// import image from "./assets/image/header-img.jpg"
// import image from "./assets/image/header-img.jpg"
// import image from "./assets/image/header-img.jpg"
// import image from "./assets/image/header-img.jpg"
// import image from "./assets/image/header-img.jpg"
// import image from "./assets/image/header-img.jpg"

let details = {
  description: `Arnold Schwarzenegger on "Terminator": I'm done with it.`,
  comment: `20 comments`,
  src: image,
};
let detailsA = {
  description: `Arnold Schwarzenegger on "Terminator": I'm done with it.`,
  comment: `10 comments`,
  src: imageA,
};
const listDetails={
  description: `Arnold Schwarzenegger on "Terminator": I'm done with it.`,
  comment: `12 comments`,

  src: img4,
}
const listDetailsA={
  description: `Arnold Schwarzenegger on "Terminator": I'm done with it.`,
  comment: `12 comments`,

  src: img7,
}
const listDetailsB={
  description: `Arnold Schwarzenegger on "Terminator": I'm done with it.`,
  comment: `12 comments`,

  src: img5,
}
const listDetailsC={
  description: `Arnold Schwarzenegger on "Terminator": I'm done with it.`,
  comment: `12 comments`,

  src: img6,
}
</script>

<style>
.mehdi {
  /* background-image: url("../../assets/image/header-img.jpg"); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
