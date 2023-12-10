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
  <div
    class="animate__animated animate__fadeIn flex h-screen items-center justify-end bg-black bg-[url('/bg-globe/img-800x368.jpg')] bg-contain bg-center bg-no-repeat text-white lg:bg-[url('/bg-globe/img-1920x1200.jpg')]"
  >
    <div
      class="w-screen border border-red-500 pr-24 lg:mx-24 lg:w-[800px] lg:pr-0"
    >
      <div class="mb-4 mr-8 text-right text-4xl font-bold">
        {{ content?.title }}
      </div>
      <div class="flex items-center border border-red-500">
        <div
          class="cursor-pointer border-[20px] border-transparent border-r-white"
        ></div>
        <div
          class="mx-4 flex gap-4 overflow-scroll rounded-lg border border-red-500 text-black"
          ref="scroller"
        >
          <div
            v-for="item in content?.slider?.items"
            :key="item.id"
            class="h-64 w-64 shrink-0 snap-center rounded-lg bg-white/80 p-6"
          >
            <h3 class="mb-4 text-lg font-bold">{{ item.title }}</h3>
            <p class="line-clamp-6">{{ item.content }}</p>
          </div>
        </div>
        <div
          class="cursor-pointer border-[20px] border-transparent border-l-white"
        ></div>
      </div>
    </div>
  </div>
</template>
