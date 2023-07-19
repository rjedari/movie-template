<template>
  <div class="mb-6">
    <label class="block text-gray-700 font-bold mb-2" for="password">
      <slot> </slot>
    </label>
    <input
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :id="`${id}`"
      :type="type"
      :placeholder="title" 
      v-model.lazy="inputValue"
      @input="updateInput"
      
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps(["title", "id","type"]);
const inputValue = ref("")
const emit =defineEmits(["inputValue"])
function updateInput(event) {
  inputValue.value = event.target.value;
  emit("inputValue", inputValue.value);
}
</script>

<style></style>
