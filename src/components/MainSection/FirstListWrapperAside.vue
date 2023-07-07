<template>
  <div
    class="sm:p-5 setting bg-black grid grid-col-1 grid-rows-1 max-sm:grid-row-2 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-rows-1 gap-5 col-span-1 max-lg:col-span-2 max-sm:w-screen max-sm:h-1/2 max-lg:h-96 mt-5"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="">
      <div class="group overflow-hidden">
        <img
          class="group-hover:scale-110 transition-transform w-full py-3 bg-cover duration-300"
          src="../../assets/image/8.jpg"
          alt=""
        />
        <div class="overflow-y-auto overflow-scroll max-h-72 flex flex-col">
          <div
            v-for="({ comment, description, date, id }, index) in list"
            :key="id"
          >
            <div
              class="text-xs p-2 bg-white bg-opacity-20 py-4 sm:border-b text-white hover:text-gray-300"
            >
              {{ description }}
              <span class="block text-gray-400 py-2">
                {{ comment }}/ {{ date }}</span
              >
            </div>
          </div>

        </div>
      </div>
    </div>
    <div
      class="bg-white lg:flex-col overflow-y-hidden max-sm:w-full flex-row opacity-80 p-2"
    >
      <div class="text-lg lg:mb-10 mb-2">MOST POPULAR</div>
      <div class="lg:overflow-hidden overflow-x-auto md:flex-col flex-row flex">
        <div
          class="flex lg:flex-row items-center lg:mx-1 mx-5 flex-col lg:border-b border-black py-2"
        >
          <div class="relative h-20 w-56 max-lg:w-52 max-lg:h-28">
            <div
              class="absolute z-10 inset-0 transition-transform overflow-hidden duration-500 transform hover:scale-110"
            >
              <img :src="imgA" alt="johny" />
            </div>
          </div>
          <div
            class="lg:text-xs text-base text-clip md:px-4 hover:text-yellow-500"
          >
            She showed the children a Disney animation. He might go to jail!
          </div>
        </div>
        <div
          class="flex lg:flex-row items-center lg:mx-1 mx-5 flex-col lg:border-b border-black py-2"
        >
          <div class="relative h-20 w-56 max-lg:w-52 max-lg:h-28">
            <div
              class="absolute z-10 inset-0 transition-transform overflow-hidden duration-500 transform hover:scale-110"
            >
              <img :src="imgC" alt="johny" />
            </div>
          </div>
          <div
            class="lg:text-xs text-base text-clip md:px-4 hover:text-yellow-500"
          >
            She showed the children a Disney animation. He might go to jail!
          </div>
        </div>
        <div
          class="flex lg:flex-row items-center lg:mx-1 mx-5 flex-col lg:border-b border-black py-2"
        >
          <div class="relative h-20 w-56 max-lg:w-52 max-lg:h-28">
            <div
              class="absolute z-10 inset-0 transition-transform overflow-hidden duration-500 transform hover:scale-110"
            >
              <img :src="imgB" alt="johny" />
            </div>
          </div>
          <div
            class="lg:text-xs text-base text-clip md:px-4 hover:text-yellow-500"
          >
            She showed the children a Disney animation. He might go to jail!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import imgA from "../../assets/image/12.jpg";
import imgB from "../../assets/image/10.jpg";
import imgC from "../../assets/image/11.jpg";
import imgD from "../../assets/image/13.jpg";
import bg from "../../assets/image/bx.png";
const backgroundImage = ref("");

backgroundImage.value = bg;
const list = reactive([
  {
    description:
      " She showed the children a Disney animation. He might go to jail",
    date: "yesterday",
    comment: "16 comments",
    id: 1,
  },
  {
    description:
      " She showed the children a Disney animation. He might go to jail",
    date: "yesterday",
    comment: "16 comments",
    id: 2,
  },
  {
    description:
      " She showed the children a Disney animation. He might go to jail",
    date: "yesterday",
    comment: "16 comments",
    id: 3,
  },

  {
    description:
      " She showed the children a Disney animation. He might go to jail",
    date: "yesterday",
    comment: "16 comments",
    id: 4,
  },
]);
</script>

<style scoped></style>
