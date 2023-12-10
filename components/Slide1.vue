<script setup lang="ts">
const { data } = await useFetch('/api/content');
const content = data.value?.pages[0];
</script>

<template>
  <div
    class="flex items-center justify-center h-screen animate__animated animate__fadeIn"
  >
    <video
      autoplay
      muted
      loop
      class="absolute object-cover w-full h-full -z-10 opacity-40"
    >
      <source
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
      />
    </video>
    <div class="mx-24 max-w-[800px] text-center">
      <h1 class="animate__animated animate__fadeInUp text-4xl font-bold">{{ content?.title }}</h1>
      <div class="w-48 h-1 mx-auto my-8 bg-black"></div>
      <div class="animate__animated animate__fadeInUp text-xl leading-relaxed">{{ content?.subtitle }}</div>
    </div>
  </div>
</template>
