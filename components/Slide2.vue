<script setup lang="ts">
const { data } = await useFetch('/api/content');
const content = data.value?.pages[1];

const scroller = ref<HTMLElement>();

const currentScroll = ref(0);

function scrollRight() {
  if (!scroller.value) return;
  scroller.value.scrollLeft = currentScroll.value + 60;
  currentScroll.value = scroller.value.scrollLeft;
}
</script>

<template>
  <div class="flex items-center justify-end bg-[url('/bg-globe/img-800x368.jpg')] lg:bg-[url('/bg-globe/img-1920x1200.jpg')] bg-no-repeat bg-contain bg-black bg-center h-screen text-white animate__animated animate__fadeIn">
    <div class="w-screen lg:w-[800px] pr-24 lg:pr-0 lg:mx-24 border border-red-500">
      <div class="text-4xl text-right mb-4 mr-8 font-bold">{{ content?.title }}</div>
      <div class="flex items-center border border-red-500">
        <div class="border-[20px] border-transparent border-r-white cursor-pointer"></div>
        <div
          class="border border-red-500 mx-4 overflow-scroll flex gap-4 text-black rounded-lg"
          ref="scroller"
        >
          <div
            v-for="item in content?.slider?.items"
            :key="item.id"
            class="w-64 h-64 bg-white/80 rounded-lg shrink-0 snap-center p-6"
          >
            <h3 class="text-lg font-bold mb-4">{{ item.title }}</h3>
            <p class="line-clamp-6">{{ item.content }}</p>
          </div>
        </div>
        <div
          class="border-[20px] border-transparent border-l-white cursor-pointer"
        ></div>
      </div>
    </div>
  </div>
</template>
