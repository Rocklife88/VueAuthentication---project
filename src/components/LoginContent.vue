<template>
  <div class="relative bg-gray-900 min-h-full flex items-center justify-center overflow-hidden">
    <!-- Immagine di sfondo con overlay scuro -->
    <div class="absolute inset-0 overflow-hidden">
      <img src="../assets/images/programmer-3321751736.jpg" alt="Background" class="w-full h-full object-cover opacity-50">
      <div class="absolute inset-0 bg-black opacity-60"></div>
    </div>
    <div class="bg-slate-900 p-8 rounded shadow-md w-full max-w-sm z-10">
      <h1 class="text-2xl font-bold mb-6 text-center text-green-600">Login</h1>
      <form @submit.prevent="handleLogin" class="space-y-4 ">
        <div>
          <label for="username" class="block text-gray-200">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            class="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800"
          />
        </div>
        <div>
          <label for="password" class="block text-gray-200">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800"
          />
        </div>
        <div>
          <button
            type="submit"
            class="w-full py-2 mt-4 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            :disabled="isLoading"
          >
            Login
          </button>
          <div class="text-center pt-2">
            <RouterLink to="/register" class="text-green-400 text-left text-xs">Not Registered? then <span class="text-green-300 font-bold hover:text-green-500 cursor-pointer">Register</span></RouterLink>
          </div>
        </div>
        <div v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthenticationStore } from '@/stores/authentication';

const store = useAuthenticationStore();
const router = useRouter();
const username = ref('');
const password = ref('');
const isLoading = ref(false);
const errorMessage = ref('');

const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    await store.loginUser(username.value, password.value);
    // Se non ci sono eccezioni, il login è avvenuto con successo
    router.push('/dashboard');
  } catch (error) {
    console.error('Error during login:', error);
    errorMessage.value = 'Login failed. Please check your credentials.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
/* Aggiungi eventuali stili specifici del componente qui */
</style>
