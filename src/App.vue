<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <section class="px-5 py-10 text-center xl:mx-40 2xl:mx-96">
    <Header />
    <router-view />
    <div>&copy; 2023 VueBlog</div>
  </section>
</template>
