<script setup lang="ts">
const scroller = ref<HTMLElement>();

const currentScroll = ref(0);

function scrollRight() {
  if (!scroller.value) return;
  scroller.value.scrollLeft = currentScroll.value + 60;
  currentScroll.value = scroller.value.scrollLeft;
}
</script>

<template>
  <div class="flex items-center justify-end bg-[url('/bg-globe/img-1920x1200.jpg')] bg-no-repeat bg-contain bg-black bg-center h-screen text-white animate__animated animate__fadeIn">
    <div class="max-w-[800px] mx-24">
      <div class="uppercase text-4xl text-right mb-4 mr-8 font-bold">Donec Nec Justo</div>
      <div class="flex items-center">
        <div class="border-[20px] border-transparent border-r-white cursor-pointer"></div>
        <div
          class="w-[600px] mx-4 overflow-scroll flex gap-4 text-black rounded-lg"
          ref="scroller"
        >
          <div class="w-64 h-64 bg-white/80 rounded-lg shrink-0 snap-center p-6">
            <h3 class="text-lg font-bold mb-4">Lorem ipsum</h3>
            <p class="line-clamp-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi labore dolor asperiores maxime, incidunt numquam quod autem, nemo at necessitatibus ab aliquam minus quasi sint quisquam vitae nostrum a.</p>
          </div>
          <div class="w-64 h-64 bg-white/80 rounded-lg shrink-0 snap-center p-6">
            <h3 class="text-lg font-bold mb-4">Lorem ipsum</h3>
            <p class="line-clamp-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi labore dolor asperiores maxime, incidunt numquam quod autem, nemo at necessitatibus ab aliquam minus quasi sint quisquam vitae nostrum a.</p>
          </div>
          <div class="w-64 h-64 bg-white/80 rounded-lg shrink-0 snap-center p-6">
            <h3 class="text-lg font-bold mb-4">Lorem ipsum</h3>
            <p class="line-clamp-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi labore dolor asperiores maxime, incidunt numquam quod autem, nemo at necessitatibus ab aliquam minus quasi sint quisquam vitae nostrum a.</p>
          </div>
          <div class="w-64 h-64 bg-white/80 rounded-lg shrink-0 snap-center p-6">
            <h3 class="text-lg font-bold mb-4">Lorem ipsum</h3>
            <p class="line-clamp-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi labore dolor asperiores maxime, incidunt numquam quod autem, nemo at necessitatibus ab aliquam minus quasi sint quisquam vitae nostrum a.</p>
          </div>
        </div>
        <div
          class="border-[20px] border-transparent border-l-white cursor-pointer"
        ></div>
      </div>
    </div>
  </div>
</template>
