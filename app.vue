<script lang="ts" setup>
import Navbar from "./components/custom/structure/Navbar.vue";
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <Navbar />
    <main class="container mx-auto py-8">
      <NuxtPage />
    </main>
  </div>
</template>
