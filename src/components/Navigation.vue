<template>
  <div class=" flex  justify-between items-center py-4 md:px-40 px-4 bg-slate-900  ">
    <div class="flex items-center gap-1">
      <img class="w-6" src="/src/assets/images/vue.png" alt="">
      <div class="text-green-500 font-semibold">Authentication Project Vue</div>
    </div>
    <nav class="space-x-4">
      <RouterLink to="/" class="text-green-500 hover:text-green-700">Home</RouterLink>
      <RouterLink to="/about" class="text-green-500 hover:text-green-700">About</RouterLink>
      <RouterLink to="/register" class="text-green-500 hover:text-green-700">Register</RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useAuthenticationStore } from '@/stores/authentication';
import { storeToRefs } from 'pinia';

const store = useAuthenticationStore();
const { isAuthenticated } = storeToRefs(store);
</script>

<style scoped>
.wrapper {
  /* Aggiungi qui eventuali stili specifici per il wrapper */
}
</style>
