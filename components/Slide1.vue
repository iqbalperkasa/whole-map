<script setup lang="ts">
const { data } = await useFetch('/api/content');
const content = data.value?.pages[0];
</script>

<template>
  <div
    class="animate__animated animate__fadeIn flex h-screen items-center justify-center"
  >
    <video
      autoplay
      muted
      loop
      class="absolute -z-10 h-full w-full object-cover opacity-40"
    >
      <source
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
      />
    </video>
    <div class="mx-24 max-w-[800px] text-center">
      <h1 class="text-4xl font-bold">{{ content?.title }}</h1>
      <div class="mx-auto my-8 h-1 w-48 bg-black"></div>
      <div class="text-xl leading-relaxed">{{ content?.subtitle }}</div>
    </div>
  </div>
</template>
