<script setup>
// import { watchEffect } from 'vue';
import PostList from '../components/PostList.vue';
import Spinner from '../components/Spinner.vue';
import TagCloud from '../components/TagCloud.vue';
import getPosts from '../composables/getPosts'

const { posts, error, load } = getPosts()

load()

// watchEffect(() => {
//   load()
// })
</script>
<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length" class="flex py-10">
    <PostList :posts="posts" />
    <TagCloud :posts="posts" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>