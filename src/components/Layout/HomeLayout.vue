<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Navigation -->
    <div ref="homeHeadingRef">
      <Navigation />
    </div>

    <!-- Main Content -->
    <div class="flex flex-1 overflow-hidden">
      <div
        class="flex flex-col w-full overflow-auto"
        :style="{ height: contentHeight }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import Navigation from '../../components/Navigation.vue';
import { useElementSize } from '@vueuse/core';

const homeHeadingRef = ref(null);
const { height } = useElementSize(homeHeadingRef);
const contentHeight = computed(() => `calc(100vh - ${height.value}px)`);

</script>
