<script lang="ts" setup>
const links = ref([
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Todos",
    to: "/todos",
  },
  {
    label: "About",
    to: "/about",
  },
]);
</script>

<template>
  <header class="border-b flex items-center justify-between px-8 py-2">
    <h1 class="text-green-600">Todo List App</h1>
    <nav>
      <ul class="flex gap-4">
        <li v-for="link in links" class="underline-offset-4 hover:underline">
          <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
