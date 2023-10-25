<script setup>
// import { watchEffect } from 'vue';
import PostList from '../components/PostList.vue';
import Spinner from '../components/Spinner.vue';
import getPosts from '../composables/getPosts'

const { posts, error, load } = getPosts()

load()

// watchEffect(() => {
//   load()
// })
</script>
<template>
  <h1 class="text-4xl font-bold"><span class="text-primary">Vue</span>Blog</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length" class="py-10 xl:mx-40 2xl:mx-96">
    <PostList :posts="posts" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>