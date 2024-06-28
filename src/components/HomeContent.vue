<template>
    <div class="relative bg-gray-900  min-h-full flex items-center overflow-hidden">
      <!-- Immagine di sfondo con overlay scuro -->
      <div class="absolute inset-0 overflow-hidden">
        <img src="../assets/images/programmer-3321751736.jpg" alt="Background" class="w-full h-full object-cover opacity-50">
        <div class="absolute inset-0 bg-black opacity-60"></div>
      </div>
  
      <!-- Contenuto al centro della hero section -->
      <div class="relative z-10 text-center text-white w-full">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome to Authentication Project</h1>
        <p class="text-lg md:text-xl pb-1">An authentication method built with Vue.Js and Express</p>
        <p class="text-lg md:text-xl mb-6">Register if you're not already or Login to discover the section available only for the logged ones!</p>
        <div class="flex justify-center space-x-4">
          <router-link to="/register" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">Start Here</router-link>
        
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>
  /* Stili specifici per il componente Home.vue */
  /* Puoi personalizzare ulteriormente lo stile dell'hero section qui */
  </style>
  