<template>
  <div class="min-h-full flex flex-col bg-gray-100">
    <!-- Header -->
    <div ref="elRef" class="sticky top-0 w-full bg-white z-10 shadow-md">
      <slot name="header" />
    </div>

    <!-- Main Content -->
    <div :class="classContent" class="flex-grow overflow-auto ">
      <slot />
    </div>

    <!-- Loader, se necessario -->
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 z-20">
      <slot name="isLoading"></slot>
    </div>

    <!-- Footer -->
    <div class="mt-auto w-full bg-white shadow-md">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['isLoading', 'classContent']);
</script>
