<template>
  <div
            class="absolute mehdi shadow-[inset_10px_-42px_26px_rgba(0,0,0,0.6)] inset-0 transition-transform duration-700 transform"
            :style="{ 'background-image': `url(${details.src})` }"
          ></div>
          <div
            class="absolute z-10 bottom-5 px-5 flex flex-col justify-between"
          >
            <div
              class="text-white hovering-text text-2xl max-sm:text-sm font-bold"
            >
              {{ details.description }}
            </div>
            <div class="text-gray-300 py-2">{{ details.comment }}</div>
          </div>
</template>

<script>
export default {
  props: ["details","detailsA"],
};
</script>

<style>

</style>