<script setup lang="ts">
import { ref } from 'vue';

interface Item {
  index: number;
  title: string,
    description: string,
}

const items = ref<Item[]>(Array(5).fill(null).map((_, index) => ({
  index,
  title: `Item ${Math.ceil(Date.now().valueOf() + Math.random() * 100 * index)}`,
  description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
})));

const shuffle = (array: Item[]): Item[] => {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

const randomize = () => {
  items.value = shuffle([...items.value]);
}
</script>

<template>
  <section class="mt-10">
    <h2 class="text-lg font-bold mb-3">
      Change Sort Of the element
    </h2>

    <div v-auto-animate class="flex flex-col gap-2">
      <template v-for="item in items" :key="item.title">
        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class="object-cover w-full rounded-t-lg h-64 w-auto md:h-48 md:rounded-none md:rounded-l-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="">
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{item.title}}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{item.description}}</p>
          </div>
        </a>
      </template>
    </div>

    <div class="flex gap-3 mt-5">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="randomize"
      >
        Randomize
      </button>
    </div>
  </section>
</template>
