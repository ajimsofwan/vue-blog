<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { db, timestamp } from "../firebase/config";

const title = ref('')
const body = ref('')
const tags = ref([])
const tag = ref('')
const router = useRouter()

const handleKeydown = () => {
  if (!tags.value.includes(tag.value)) {
    tag.value = tag.value.replace(/\s/, '') // remove whitespace
    tags.value.push(tag.value)
  }
  tag.value = ""
}

const handleSubmit = async () => {
  const post = {
    title: title.value,
    body: body.value,
    tags: tags.value,
    createdAt: timestamp()
  }

  try {
    const response = await db.collection('posts').add(post)
    if (!response.id) {
      throw Error("Failed to add post");
    }
    router.push({ name: 'Home' })

  } catch (err) {
    console.log(err.message)
  }
}
</script>
<template>
  <div class="py-10 text-left">
    <h1 class="py-4 text-lg font-bold text-center">Create New Post</h1>
    <div class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <form @submit.prevent="handleSubmit">
        <div class="mb-6">
          <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
          <input type="text" id="title" v-model="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            required>
        </div>
        <div class="mb-6">
          <label for="body" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body</label>
          <textarea id="body" rows="6" v-model="body"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
            required></textarea>
        </div>
        <div class="mb-6">
          <label for="tag" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tag (hit enter to
            add)</label>
          <input type="text" id="tag" v-model="tag" @keydown.enter.prevent="handleKeydown"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary">
          <div class="flex flex-wrap py-2"><span v-for="tag in tags" :key="tag"
              class="px-2 py-1 mb-1 mr-1 text-white rounded-lg bg-primary">#{{
                tag
              }}</span>
          </div>
        </div>
        <button type="submit"
          class="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add
          Post</button>
      </form>
    </div>
  </div>
</template>