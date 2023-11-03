<script setup>
import useTags from '../composables/useTags'
const props = defineProps(['posts'])

const { tags } = useTags(props.posts)
</script>
<template>
  <div class="max-w-xs ml-5">
    <h1 class="py-2 mb-4 text-lg font-bold border-b border-slate-300">Posts Tags</h1>
    <div class="flex flex-wrap">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }"
        class="px-2 py-1 mb-1 mr-1 font-bold rounded-xl bg-slate-400 text-slate-100 hover:bg-slate-500"
        v-for="tag in tags" :key="tag">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.router-link-active {
  @apply bg-primary;

}
</style>