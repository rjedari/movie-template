<template>
  <form class="md:flex-row flex flex-col items-start" @submit.prevent="sub">
    <div class=" p-3 "><slot /></div>
    <div class="flex md:flex-row flex-col md:justify-normal justify-center">
        <div class="flex flex-col">
               <input
        type="text"
        class="border my-1 border-gray-300 py-2 mx-1 hover:border-yellow-500 rounded px-2"
        v-model.lazy="var1"
      />
      <label class="text-xs m-2 text-gray-400" for="2">
          {{ props.placeHolder1 }}</label
        >
        </div>
   
      <div class="flex flex-col">
        <input
          id="2"
          class="border my-1 border-gray-300 py-2 mx-1 hover:border-yellow-500 rounded px-2"
          type="text"
          v-model.lazy="var2"
        />
     
           <label class="text-xs m-2 text-gray-400" for="2">
          {{ props.placeHolder2 }}</label
        >  
       
       
      </div>
    </div>
    <div>
      <button
        @click="change ? (change = false) : (change = true)"
        class="p-2 m-2 rounded hover:text-yellow-500"
      >
        cancel
      </button>
      <button
        @click="handleSave"
        :type="submit"        class="p-2  bg-gray-300 m-2 rounded hover:bg-yellow-500 hover:text-white"
      >
        save
      </button>
    </div>
  </form>
</template>

<script setup>
import { onUpdated, ref } from "vue";
const emit = defineEmits(["save",]);
const props = defineProps([ "placeHolder1" ,"placeHolder2","type"]);
const var1 =ref("")
const var2 =ref("")
const handleSave = () => {
  emit("save", var1.value, var2.value);
};

</script>

<style></style>
