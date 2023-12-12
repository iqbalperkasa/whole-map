<script setup lang="ts">
const { data } = await useFetch('/api/content');
const content = data.value?.pages[1];

const scroller = ref<HTMLElement>();

function scroll(direction: 'right' | 'left') {
  if (!scroller.value) return;
  const scrollAmount = 256 + 16;
  scroller.value.scrollBy({
    left: direction === 'right' ? scrollAmount : -scrollAmount,
    behavior: 'smooth',
  });
}
</script>

<template>
  <div
    class="animate__animated animate__fadeIn flex h-screen items-center justify-end bg-black bg-[url('/bg-globe/img-800x368.jpg')] bg-contain bg-center bg-no-repeat text-white lg:bg-[url('/bg-globe/img-1920x1200.jpg')]"
  >
    <div
      class="w-screen pr-24 lg:mx-24 lg:w-[800px] lg:pr-0"
    >
      <div class="animate__animated animate__fadeInUp mb-4 mr-8 text-4xl font-bold text-right">
        {{ content?.title }}
      </div>
      <div class="flex items-center">
        <div
          class="cursor-pointer border-[20px] border-transparent border-r-white"
          @click="scroll('left')"
        ></div>
        <div
          class="flex gap-4 mx-4 overflow-scroll text-black rounded-lg animate__"
          ref="scroller"
        >
          <div
            v-for="item in content?.slider?.items"
            :key="item.id"
            class="w-64 h-64 p-6 rounded-lg shrink-0 snap-center bg-white/80"
          >
            <h3 class="mb-4 text-lg font-bold">{{ item.title }}</h3>
            <p class="line-clamp-6">{{ item.content }}</p>
          </div>
        </div>
        <div
          class="cursor-pointer border-[20px] border-transparent border-l-white"
          @click="scroll('right')"
        ></div>
      </div>
    </div>
  </div>
</template>
