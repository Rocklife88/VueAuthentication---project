<template>
    <div class="relative bg-gray-900 min-h-full flex items-center overflow-hidden">
      <!-- Background image with dark overlay -->
      <div class="absolute inset-0 overflow-hidden">
        <img src="../assets/images/programmer-3321751736.jpg" alt="Background" class="w-full h-full object-cover opacity-50">
        <div class="absolute inset-0 bg-black opacity-60"></div>
      </div>
  
      <!-- Content centered in the hero section -->
      <div class="relative z-10 text-center text-white w-full">
        <!-- Original content -->
        <div v-if="!showProjectDetails">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
          You Did it! Now you're Logged in!
          </h1>
          <p class="text-lg md:text-xl mb-6">
           Congratulations, You have successfully logged in.
          </p>
        </div>
  
        <!-- New content block to be shown on button click -->
        <div v-if="showProjectDetails" class="mt-8  transition-opacity duration-500 z-10">
          <p class="text-lg md:text-xl mb-4 text-white pb-4">
            Project realized in 2024 by Marco Pellegrini, Frontend developer Vue.js, using Express, Vue.js, Tailwind, and Node.js.
          </p>
       <RouterLink class="px-10 py-4 bg-green-500 rounded-md hover:bg-green-300 transition-opacity duration-300"  to="/">Home</RouterLink>
        </div>
  
        <!-- Button to toggle project details -->
        <button @click="showProjectDetails = !showProjectDetails" v-if="!showProjectDetails" class="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md transition duration-300">
          Show Project Details
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthenticationStore } from '@/stores/authentication';
  
  const store = useAuthenticationStore();
  const showProjectDetails = ref(false);
  
  const handleLogout = () => {
    store.logoutUser();
  };
  </script>
  
  <style scoped>
  /* Specific styles for the Home.vue component */
  /* You can further customize the hero section style here */
  </style>
  