<template>
  <Layout>
    <h1>{{ globalStore.colorScheme }}</h1>
  </Layout>
</template>

<script setup>
import Layout from './components/layout/Layout.vue';
import { useGlobalStore } from './stores/globalStore.js';

const globalStore = useGlobalStore();
</script>