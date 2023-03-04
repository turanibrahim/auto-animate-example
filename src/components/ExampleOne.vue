<script setup lang="ts">
import { ref } from 'vue';

const isExpanded = ref<boolean>(false);
</script>

<template>
  <section>
    <h2 class="text-lg font-bold">Adding/Removing element in the dom</h2>

    <div v-auto-animate class="rounded-2xl overflow-hidden bg-gray-200">
      <div class="p-3" role="button" @click="isExpanded = !isExpanded">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Click Me
        </button>
      </div>

      <div v-if="isExpanded" class="bg-white py-2 shadow-lg rounded-2xl px-3 m-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec posuere malesuada nulla, vitae congue metus rutrum ac.
        Aliquam placerat metus consectetur nisi venenatis, eget tristique ligula consectetur.
        Phasellus quis blandit nulla. Vestibulum tempus lectus elit, sit amet accumsan ligula
        consectetur sit amet. Phasellus egestas, mi et dapibus pulvinar, ipsum augue vulputate
        metus, vel suscipit nunc velit id tellus. Vestibulum viverra dolor non euismod malesuada.
      </div>
    </div>
  </section>
</template>
