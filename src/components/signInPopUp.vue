<template>
    <div v-if="showPopup" class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 z-50" @click="closePopup">
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md" @click.stop>
        <h1 class="text-3xl font-bold mb-4 text-center">Sign In with Google</h1>
        <p class="text-gray-600 mb-6 text-center">Sign in to access your account using Google</p>
        <button @click="closePopup" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded w-full flex items-center justify-center">
          <svg class="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.66 6.34a9 9 0 11-12.73 0m12.73 0a9 9 0 00-12.73 0m12.73 0c1.29 1.27 2.05 2.94 2.27 4.79h-2c-.17-.95-.65-1.79-1.34-2.42l-3.18 3.18c-1.23-.37-2.52-.56-3.75-.56-1.24 0-2.46.19-3.66.56l-3.18-3.18c-.69.63-1.18 1.46-1.34 2.42h-2c.22-1.85.98-3.52 2.27-4.79a9 9 0 0112.73 0z"
            ></path>
          </svg>
          Sign In with Google
        </button>
        <p class="text-xs mt-4 text-center text-gray-500">
          By signing in, you agree to our <a href="#" class="underline">Terms of Service</a> and <a href="#" class="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const showPopup = ref(true);
  
  function closePopup() {
    showPopup.value = false;
  }
  </script>
  
  <style>
  /* Add additional custom styles here if needed */
  </style>
  