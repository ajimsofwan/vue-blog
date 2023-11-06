<script setup>
import { computed } from 'vue';
import { db } from '../firebase/config';
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps(['post'])
const imgUri = computed(() => {
  return "https://source.unsplash.com/random/800x350/?" + props.post.title
})

const handleClick = async () => {
  await db.collection('posts').doc(props.post.id).delete();
  router.push({ name: 'Home' })
}
</script>

<template>
  <div class="p-6 mb-3 text-left bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="py-3">
      <h2 class="mb-2 text-4xl font-bold">{{ post.title }}</h2>
      <div class="text-sm"><span>Posted By User</span></div>
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
    <button @click="handleClick"
      class="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center my-4">Delete
      Post</button>
  </div>
</template>