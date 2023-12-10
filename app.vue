<script setup lang="ts">
enum Page {
  FIRST,
  SECOND,
}

const { data } = await useFetch('/api/content');
const content = data.value;

const page = ref<Page>(Page.FIRST);
const isFirstPage = computed(() => page.value === Page.FIRST);
const isSecondPage = computed(() => page.value === Page.SECOND);

const lastScroll = ref(0);

function handleScroll(ev: WheelEvent) {
  const isScrollDown = ev.deltaY > 0 && lastScroll.value >= 0 && ev.deltaX === -0;
  const isScrollUp = ev.deltaY < 0 && lastScroll.value <= 0 && ev.deltaX === -0;

  if (isScrollDown) {
    page.value = Page.SECOND;
  } else if (isScrollUp) {
    page.value = Page.FIRST;
  }

  lastScroll.value = ev.deltaY;
}
</script>

<template>
  <main @wheel="handleScroll($event)">
    <Slide1
      v-if="isFirstPage"
    />
    <Slide2
      v-else-if="isSecondPage"
    />

    <nav
      v-if="isSecondPage"
      class="text-white absolute right-10 top-10 cursor-pointer"
      @click="page = Page.FIRST"
    >{{ content?.top_nav?.label }}</nav>

		<div class="w-12 absolute top-[50%] translate-y-[-50%] right-0 flex flex-col items-end">
			<div
        :class="`${isFirstPage ? 'w-full bg-blue-500' : 'w-1/2 bg-gray-500'} h-2 mb-4 cursor-pointer`"
        @click="page = Page.FIRST"
      ></div>
      <div
        :class="`${isSecondPage ? 'w-full bg-blue-500' : 'w-1/2 bg-gray-500'} h-2 mb-4 cursor-pointer`"
        @click="page = Page.SECOND"
      ></div>
		</div>

		<div
      v-if="isFirstPage"
      class="absolute border-[20px] border-transparent border-t-blue-500 bottom-0 left-[50%] translate-x-[-50%] mb-8 cursor-pointer"
      @click="page = Page.SECOND"
    ></div>
  </main>
</template>
