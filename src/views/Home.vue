<script setup>
import { watchEffect } from 'vue';
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts'

const { posts, error, load } = getPosts()

load()
console.log(error.value);
// watchEffect(() => {
//   load()
// })
</script>
<template>
  <h1 class="text-4xl font-bold">Home</h1>
  <div>{{ error }}</div>
  <div v-if="posts.length">
    <PostList :posts="posts" />
  </div>
  <div v-else>Loading ...</div>
</template>