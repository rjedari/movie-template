<template>
  <div class="flex flex-col shadow-md mx-5 w-60 h-60 hover-changes-header">
    <div class="relative h-32 overflow-hidden">
      <div
        class="absolute inset-0 transition-transform duration-500 transform hover:scale-110"
      >
        <router-link :to="{ name: 'movie-detail', params: { id } }">
          <img class="object-contain" :src="`${src}`" alt="" />
        </router-link>
      </div>
    </div>
    <div class="text-sm flex flex-col p-5 justify-between">
      <router-link :to="{name:'movie-detail' , params :{id}}" class="text-black hovering-text">
        {{ shortenOverview(overview, 70) }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps(["overview", "src", "id" ]);
function shortenOverview(overview, maxLength) {
  if (overview.length <= maxLength) {
    return overview;
  } else {
    return overview.slice(0, maxLength) + "...";
  }
}
</script>

<style scoped></style>
