<template>
    <div class="relative bg-gray-900 min-h-full flex items-center  justify-center overflow-hidden">
           <!-- Immagine di sfondo con overlay scuro -->
      <div class="absolute inset-0 overflow-hidden">
        <img src="../assets/images/programmer-3321751736.jpg" alt="Background" class="w-full h-full object-cover opacity-50">
        <div class="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <form @submit.prevent="handleRegister" class="bg-slate-900 p-8 rounded shadow-md w-full max-w-sm z-10">
        <h1 class="text-2xl font-bold mb-6 text-center text-green-600">Register</h1>
        <div class="mb-4">
          <label for="username" class="block text-gray-200">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            class="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800"
            placeholder="Enter your username"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-200">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <button
            type="submit"
            class="w-full py-2 px-4 mt-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:green-blue-500"
          >
            Register
          </button>
          <div class="text-center pt-2">
            <RouterLink to="/login" class="text-green-400 text-center text-xs">Already Registered? then <span class="text-green-300 font-bold hover:text-green-500 cursor-pointer">Login</span></RouterLink>
        </div>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useAuthenticationStore } from '@/stores/authentication';
  import { useRouter } from 'vue-router';
  
  const store = useAuthenticationStore();
  const username = ref('');
  const password = ref('');
  const router = useRouter();
  
  const handleRegister = async () => {
    try {
      const message = await store.registerUser(username.value, password.value);
      alert(message);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed');
    }
  };
  </script>
  
  <style scoped>
  /* Nessun bisogno di stili specifici per cambiare il colore del testo, usiamo le utility di Tailwind direttamente nelle classi degli input */
  </style>
  