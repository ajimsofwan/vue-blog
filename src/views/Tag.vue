<script setup>
import { useRoute } from 'vue-router';
import PostList from '../components/PostList.vue';
import Spinner from '../components/Spinner.vue';
import getPosts from '../composables/getPosts'
import { computed } from 'vue';
const route = useRoute()
const { posts, error, load } = getPosts(50)

load()

const postsWithTag = computed(() => {
  return posts.value.filter((p) => p.tags.includes(route.params.tag))
})
</script>

<template>
  <h1 class="text-2xl font-bold">Showing posts with tags: {{ route.params.tag }}</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length" class="py-10">
    <PostList :posts="postsWithTag" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>