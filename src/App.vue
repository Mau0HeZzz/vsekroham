<template>
  <Layout>
    <h1>windowWidth = {{ windowWidth }}</h1>
    <h1>windowHeight = {{ windowHeight }}</h1>
    <!-- <pre>{{ globalStore.tg }}</pre> -->
  </Layout>
</template>

<script setup>
import Layout from './components/layout/Layout.vue';
import { useGlobalStore } from './stores/globalStore.js';
import { ref } from 'vue';

const globalStore = useGlobalStore();

let windowWidth = ref(window.innerWidth);
let windowHeight = ref(window.innerHeight);
</script>