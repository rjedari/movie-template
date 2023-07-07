<template>
 <div class="flex flex-col shadow-md mx-auto w-60 hover-changes-header">
      <div class="relative h-32 overflow-hidden">
        <div
          class="absolute  inset-0 transition-transform duration-500 transform hover:scale-110"
        
        >
        <img :src="`${src}`" alt="">
       </div>
      </div>
      <div class="text-sm flex flex-col p-5 justify-between">
        <div class="text-black hovering-text">
            {{ comment }}
        </div>
      </div>
    </div>
</template>

<script setup>
defineProps(["comment","src"])
</script>

<style>

</style>