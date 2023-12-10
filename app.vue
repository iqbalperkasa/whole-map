<script setup lang="ts">
enum Page {
  FIRST,
  SECOND,
}

const page = ref<Page>(Page.FIRST);

function handleScroll(ev: WheelEvent) {
  const isScrollDown = ev.deltaY > 0;
  if (isScrollDown) page.value = Page.SECOND;
  else page.value = Page.FIRST;
}
</script>

<template>
  <main @wheel="handleScroll">
    <Slide1
      v-if="page === Page.FIRST"
    />
    <Slide2
      v-else-if="page === Page.SECOND"
    />

    <nav
      v-if="page === Page.SECOND"
      class="uppercase text-white absolute right-10 top-10 cursor-pointer"
      @click="page = Page.FIRST"
    >Discover More</nav>

		<div class="w-12 absolute top-[50%] translate-y-[-50%] right-0">
			<div class="h-2 bg-gray-500 mb-4"></div>
			<div class="h-2 bg-gray-500"></div>
		</div>

		<div
      v-if="page === Page.FIRST"
      class="absolute w-20 h-20 bg-red-500 bottom-0 left-[50%] translate-x-[-50%] mb-8 cursor-pointer"
      @click="page = Page.SECOND"
    ></div>
  </main>
</template>
