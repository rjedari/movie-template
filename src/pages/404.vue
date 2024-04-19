<template>
  <div class="flex  items-center flex-col justify-center min-h-screen ">
  <h1 class="md:text-7xl text-5xl text-yellow-600 my-5">404</h1>
  <h2>sorry we didn't found the page you are looking for...  </h2>
  <span>: (</span>
  <router-link class="mt-20 text-yellow-600 font-bold hover:text-yellow-500" :to="{ name: 'Home'}">BACK TO HOME
</router-link>
  <slot-test>
   <template #header>
    <h1 class="text-3xl">H1</h1>
   </template>
   <template #default="props"> {{ props.id }} {{ props.message }} on me </template>
 
  <template #footer="props">
    <h3 class="text-lg">
      H3<p>{{ props.id }}</p>
    </h3>
  </template>
  </slot-test>
<div>
  <p>
    Ask a yes/no question:
    <input v-model="question" :disabled="loading" />
  </p>
  <p>{{ answer }}</p>

</div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";

import signInPopUp from '../components/signInPopUp.vue';
import SlotTest from '../components/SlotTest.vue';
const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)
watch(question, async(newVal,oldVal)=>{
  newVal.includes ('?')? `${loading.value === true} , ${answer.value == ' thinking '}` : ' '
},
})

</script>

<style>

</style>