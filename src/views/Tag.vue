<script setup>
import { useRoute } from 'vue-router';
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';
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
  <div v-if="posts.length" class="flex py-10">
    <div>
      <h1 class="py-2 text-2xl font-bold">Showing posts with tags: {{ route.params.tag }}</h1>
      <div v-if="error">{{ error }}</div>
      <PostList :posts="postsWithTag" />
    </div>
    <TagCloud :posts="posts" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>