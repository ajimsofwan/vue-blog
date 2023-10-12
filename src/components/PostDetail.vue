<script setup>
import { computed } from 'vue';

const props = defineProps(['post'])
const imgUri = computed(() => {
  return "https://source.unsplash.com/random/800x350/?" + props.post.title
})
</script>

<template>
  <div class="p-6 mb-3 text-left bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="py-3">
      <h2 class="mb-2 text-4xl font-bold">{{ post.title }}</h2>
      <div class="text-sm"><span>Posted By User</span> - Reactions {{ post.reactions }}</div>
    </div>
    <div class="w-full text-center">
      <img :src="imgUri" class="w-full" alt="thumb">
    </div>
    <div class="py-5">
      {{ post.body }}
    </div>
    <div>
      Tags: <span v-for="tag in post.tags" :key="tag" class="px-1 mr-1 text-sm text-white bg-primary">{{ tag }}</span>
    </div>
  </div>
</template>