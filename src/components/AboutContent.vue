<template>
  <div
    class="relative bg-gray-900 min-h-full flex items-center justify-center overflow-hidden p-4 md:p-0 "
  >
    <!-- Immagine di sfondo con overlay scuro -->
    <div class="absolute inset-0 overflow-hidden">
      <img
        src="../assets/images/programmer-3321751736.jpg"
        alt="Background"
        class="w-full h-full object-cover opacity-50"
      />
      <div class="absolute inset-0 bg-black opacity-60"></div>
    </div>

    <!-- Sezione di presentazione -->
    <div
      class="mt-8 relative z-10 text-white container w-full md:flex align-items-center justify-center gap-4"
    >
      <div class=" text-wrap w-1/2">
        <h2 class="text-2xl font-bold pb-4 text-green-400">About Me</h2>
        <p class="text-md leading-relaxed ">
          Marco Pellegrini, frontend developer specializing in Vue.js with
          skills in UX design, creative writing, and content creation. With a
          passion for building intuitive user interfaces and crafting engaging
          digital experiences, I bring a blend of technical expertise and
          creative vision to every project.
        </p>
        <h3 class="text-green-400 pt-4 text-2xl font-bold pb-2">My Journey in development</h3>
        <p class="pb-2"> My journey in development started at the beginning of 2023.
            In that period i was working as a UX designer for a company located in the north-east of Italy (not far from Venice).
            I was working on the design of the company's new website when i started to become curios and interested in programming.
            from that moment on i have been working on myself to build the skills needed to become a frontend developer.
            i'm still in the process of learning and developing new skills and tools because working as a frontend developer means to accept the fact that you always need to improve.
        </p>
      </div>
      <img class="w-1/2 rounded-md" src="../assets/images/IMG_20180801_105253-822x617.jpg" alt="">
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
/* Stili specifici per il componente Home.vue */
/* Puoi personalizzare ulteriormente lo stile dell'hero section qui */
</style>
