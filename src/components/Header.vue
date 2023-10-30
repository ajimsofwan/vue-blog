<template>
  <div class="flex justify-between">
    <h1 class="text-4xl font-bold"><span class="text-primary">Vue</span>Blog</h1>
    <nav>
      <ul class="flex">
        <li class="mr-3 font-semibold hover:border-b text-primary border-primary">
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li class="mr-3 font-semibold hover:border-b text-primary border-primary"><router-link
            :to="{ name: 'Create' }">Create Post</router-link></li>
      </ul>
    </nav>
  </div>
</template>