<template>
  <form>
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="email">
        Email
      </label>
      <input
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Email"
      />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="Password"
      />
    </div>
    <div class="flex items-center justify-between">
    
      <the-button :title="title" :my-custom-style="myCustomStyleClass" />
      <a
        class="inline-block align-baseline font-bold text-sm text-yellow-500 hover:text-yellow-800"
        href="#"
      >
        Forgot Password?
      </a>
    </div>
  </form>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
const myCustomStyleClass = "my-custom-style";
const title = "sign in";
</script>

<!-- <style scoped>
.my-custom-style{
     @apply   

}
</style> -->
<style scoped>

.my-custom-style {
  @apply bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ;
}
</style>