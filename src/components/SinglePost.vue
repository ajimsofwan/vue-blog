<script setup>
import { computed } from 'vue';

const props = defineProps(['post'])
const snippet = computed(() => {
  // if (props.post.body.length > 100) {
  return props.post.body.substring(0, 200) + '...'
  // }
  // return props.post.body
})

const imgUri = computed(() => {
  return "https://source.unsplash.com/random/200x150/?" + props.post.title
})
</script>
<template>
  <div
    class="flex p-6 mb-3 text-left bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex-none mr-3">
      <img :src="imgUri" alt="thumb">
    </div>
    <div class="flex-1">
      <router-link :to="{ name: 'Details', params: { id: post.id } }">
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-primary ">{{ post.title
        }}
        </h2>
      </router-link>
      <span v-for="tag in post.tags" :key="tag" class="px-1 mr-1 text-sm text-white bg-primary">{{ tag }}</span>
      <p class="font-normal text-gray-700 dark:text-gray-400">{{ snippet }}</p>
    </div>
  </div>
</template>
