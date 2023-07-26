<template>
  <div class="h-full flex">
    <div class="relative group">
      <div class="relative p-5 mx-5 w-40 h-60 shadow-lg overflow-hidden">
        <div
          class="absolute -z-1 inset-0 transition-transform duration-500 hover:scale-110"
        >   <router-link :to="{ name: 'movie-detail', params: { id } }">
          <img class="object-contain image" :src="`${src}`" alt="" />
        </router-link>
         
        
        </div>
        <div class="absolute z-1 -top-1 left-0">
          <i class="fa-solid fa-bookmark relative text-yellow-500 text-4xl">
            <i
              class="fa-solid fa-star text-black flex justify-center top-0 left-0 right-0 text-lg absolute"
            ></i>
          </i>
        </div>
      </div>
      <div
        class="absolute z-1 top-52 bg-white duration-300 p-1 py-2 flex flex-col group-hover:shadow-2xl items-center justify-center group-hover:bg-white group-hover:left-0 group-hover:right-0 left-10 right-10"
      >
        <!-- <div>
          <img class="w-10 h-10" src="./assets/image/hbo.jpg" alt="" />
        </div> -->
        <div class="text-sm py-2  text-gray-900">{{ name }}</div>
        <div class="text-sm text-gray-500">IMBD {{ vote_average }}</div>

      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["src", "name", "vote_average","id"]);
</script>

<style></style>
