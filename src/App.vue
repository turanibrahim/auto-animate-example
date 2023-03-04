<script setup lang="ts">
import ExampleOne from "@/components/ExampleOne.vue";
import ExampleTwo from "@/components/ExampleTwo.vue";
import ExampleThree from "@/components/ExampleThree.vue";
</script>

<template>
  <header class="text-center pt-10">
    <h1 class="text-2xl font-bold">Examples</h1>
  </header>

  <main class="container px-10 mx-auto py-10">
    <example-one />

    <example-two />

    <example-three />
  </main>
</template>

<style>
#app {
    min-height: 100vh;
    max-width: 100vw;
    background-color: #f4f4f5;
}
</style>
