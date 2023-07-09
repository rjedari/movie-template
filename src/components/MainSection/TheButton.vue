<template>
    <button :class="['my-custom-style', customStyleClass]"
   >
        {{ title }}     <slot></slot>
      </button>
</template>

<script setup>
defineProps(["title","btn","customStyleClass"])
</script>

<style>

</style>