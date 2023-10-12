<script setup>
import { computed } from 'vue';

const props = defineProps(['post'])
const snippet = computed(() => {
  // if (props.post.body.length > 100) {
  return props.post.body.substring(0, 100) + '...'
  // }
  // return props.post.body
})
</script>
<template>
  <h2 class="text-2xl font-bold">{{ post.title }}</h2>
  <p>{{ snippet }}</p>
</template>
