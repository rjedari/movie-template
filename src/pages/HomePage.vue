<template>
  <header class="  pb-20 header-grid-background">
    <div
      class=" max-sm:max-w-fit container"
      style="position: relative; z-index: 1"
    >
      <div class="flex flex-col max-lg:pb-12">
        <div
          class="fixed header-bg right-0 left-0 w-full top-0"
          style="z-index: 999"
        >
          <header-menu :title="title" />
        </div>
        <header-grid class="pb-20" />
      </div>
    </div>
  </header>
  <home-main-sec />
  <home-seconde-sec />
  <home-third-sec />
  <home-forth-sec />
    <footer-main />
</template>

<script setup>
import { ref, reactive } from "vue";
import HeaderGrid from "../components/header/HeaderGrid.vue";

import HomeMainSec from "../components/MainSection/HomeMainSec.vue";
import HomeSecondeSec from "../components/MainSection/HomeSecondeSec.vue";
import HomeThirdSec from "../components/MainSection/HomeThirdSec.vue";
import HomeForthSec from "../components/MainSection/HomeForthSec.vue";
import FooterMain from "../components/footer/FooterMain.vue";
import image from "../assets/image/header-img.jpg";
import imageA from "../assets/image/2.jpg";
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");
.container {
  margin: 0px auto;
  max-width: 1140px;
}
.mobile-container {
  margin: 0px auto;
  max-width: fit-content;
}
.x_container {
  max-width: 600px;
}

* {
  box-sizing: border-box;
}
/* Change scrollbar color */
/* For WebKit-based browsers */
/* Customize the scrollbar track */
::-webkit-scrollbar-track {
  background-color: #f1f1f100;
}

/* Customize the scrollbar thumb */
::-webkit-scrollbar-thumb {
  background-color: #88888800;
}

/* Customize the scrollbar size */
::-webkit-scrollbar {
  width: 1px;
}

/* For Firefox */
/* Customize the scrollbar track */
::-moz-scrollbar-track {
  background-color: #f1f1f100;
}

/* Customize the scrollbar thumb */
::-moz-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}

/* Customize the scrollbar size */
::-moz-scrollbar {
  width: 1px;
}
.x:hover .absolute {
  border-top: 4px solid rgb(255, 208, 0);
  display: block;
  z-index: 100;
}
.header-bg {
  background-image: url(./assets/image/bg.jpg) !important;
}
.header-poster {
  margin-top: 150px !important;
}
.bg-image {
  background-image: url(./assets/image/2.jpg);
}
.hover-changes-header:hover .hovering-text {
  color: rgb(255, 200, 0);
}
.hover-changes-header:hover .hovering-icon {
  border: 1px solid rgb(255, 200, 0);
  background-color: rgb(255, 200, 0);
}
.raz:hover .mehdi {
  transform: scale(1.1);
  transition-duration: 150;
}
.first-section-menu li a {
  padding: 8px 3px;
  margin-right: 10px;
  white-space: nowrap;
  height: 40px;
  font-size: 15px;
  display: flex;
}
.first-section-menu li a:hover {
  border-bottom: 2px solid rgb(255, 200, 0);
  color: gray;
  margin-bottom: 0;
}
.footer-link a {
  margin: 1px 5px;
}
.footer-link a:hover {
  color: rgb(10, 10, 10);
}
@keyframes drawer {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
}

.drawer {
  animation-name: drawer;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}
.header-grid-background{
  background-image: url(../assets/image/bg.jpg);
}
</style>
