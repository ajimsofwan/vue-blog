<script setup>
import { ref, watchEffect } from 'vue';
import PostList from '../components/PostList.vue';

const posts = ref([])
const error = ref(null)

const load = async () => {
  try {
    const response = await fetch('https://dummyjson.com/posts')

    if (!response.ok) {
      throw Error('No data available')
    }
    const data = await response.json()
    posts.value = data.posts
  } catch (error) {
    console.log(error.message)
  }
}
watchEffect(() => {
  load()
})
</script>
<template>
  <h1 class="text-4xl font-bold">Home</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <PostList :posts="posts" />
  </div>
  <div v-else>Loading ...</div>
</template>