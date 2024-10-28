<template>
  <div class="header">
    <div class="header__close">Close</div>
    <div class="header__logo">
      <div class="header__maintitle">Milkyway</div>
      <div class="header__subtitle">vsekroham mini app</div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from '../../stores/globalStore.js';

const globalStore = useGlobalStore();
</script>