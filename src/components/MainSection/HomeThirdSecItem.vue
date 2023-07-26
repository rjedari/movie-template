<template>
    <div>
            <div
              class="relative group p-5 mx-5 w-40 h-60 shadow-lg overflow-hidden"
            >
              <div
                class="absolute -z-1 inset-0 transition-transform duration-500 transform hover:scale-110"
              
              >
              <router-link :to="{ name: 'movie-detail', params: { id } }">
          <img class="object-contain image" :src="`${src}`" alt="" />
        </router-link>
         
            </div>

              <div class="absolute z-1 -top-1 left-0">
                <i
                  class="fa-solid fa-bookmark relative text-yellow-500 text-4xl"
                >
                  <i
                    class="fa-solid fa-star text-black flex justify-center top-0 left-0 right-0 text-lg absolute"
                  ></i>
                </i>
              </div>
              <div
                class="absolute z-1 bottom-0 p-5 bg-black duration-200 flex items-baseline justify-center group-hover:bg-white left-0 right-0"
              >
                <i class="fas fa-eye text-yellow-500 px-2"></i>
                <span class="group-hover:text-black text-white">{{ vote_count }}</span>
              </div>
            </div>
          </div>
</template>

<script setup>
defineProps(["src","vote_count","title","id"])
</script>

<style>

</style>