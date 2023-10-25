<script setup>
import getPost from '../composables/getPost'
import PostDetail from '../components/PostDetail.vue'
import Spinner from '../components/Spinner.vue';

const props = defineProps(['id'])
const { post, error, load } = getPost()

load(props.id)
</script>
<template>
  <h1 class="text-4xl font-bold"><span class="text-primary">Vue</span>Blog</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="py-10 xl:mx-40 2xl:mx-96">
    <PostDetail :post="post" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>