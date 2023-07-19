<template>
    <button :type="type" :class="['my-custom-style', customStyleClass]"
   >
        {{ title }}     <slot></slot>
      </button>
</template>

<script setup>
defineProps(["title","btn","customStyleClass","type"])
</script>

<style>

</style>