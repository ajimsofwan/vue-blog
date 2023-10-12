<script setup>
import SinglePost from './SinglePost.vue';

defineProps(['posts'])
</script>
<template>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>