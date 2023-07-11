<template>

 

  <div class="mb-6">
     <label class="block text-gray-700 font-bold mb-2" for="password">
     
       <slot> </slot>
     </label>
     <input
       class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="password"
       type="password"
       :placeholder="title"
     />
   </div>

</template>

<script setup>
defineProps(['title'])
</script>

<style>

</style>