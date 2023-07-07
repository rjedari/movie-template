<template>
<slot name="header">header!</slot>
hello this is an article of 
<slot name="footer" id="10">razi</slot>

  <button>{{ text }} {{ count }}   <slot>put your name</slot>
 </button>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});
</script>
<style scoped>
button {
  border-radius: 5px;
  padding: 16px 32px;
  margin: 4px;
  color: rgb(56, 55, 55);
  border: 0;
  cursor: pointer;
}
</style>
