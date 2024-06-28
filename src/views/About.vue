<template>
    <HomeLayout>
    <PageTemplate classContent="w-full ">
      <RouterView/>
    </PageTemplate>
  </HomeLayout>
  </template>
  
  <script setup lang="ts">
  import { RouterView } from 'vue-router';
  import PageTemplate from '@/components/Layout/PageTemplate.vue';
  import HomeLayout from '../components/Layout/HomeLayout.vue';
  </script>
  