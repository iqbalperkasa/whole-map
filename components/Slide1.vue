<script setup lang="ts">
const { data } = await useFetch('/api/content');
const content = data.value?.pages[0];
</script>

<template>
  <div class="flex items-center h-screen justify-center animate__animated animate__fadeIn">
    <video
      autoplay
      muted
      loop
      class="absolute -z-10 h-full w-full opacity-40 object-cover"
    >
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
    </video>
    <div class="max-w-[800px] mx-24 text-center">
      <h1 class="text-4xl font-bold">{{ content?.title }}</h1>
      <div class="w-48 h-1 bg-black mx-auto my-8"></div>
      <div class="text-xl leading-relaxed">{{ content?.subtitle }}</div>
    </div>
  </div>
</template>
