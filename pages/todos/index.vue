<script lang="ts" setup>
const { data: todos } = await useFetch("/api/todos");
</script>

<template>
  <div>
    <ul v-for="todo in todos" class="list-disc">
      <li :key="todo.id">
        <NuxtLink :to="{ name: 'todos-id', params: { id: todo.id } }">
          {{ todo.text }} <span v-if="todo.done">(completed)</span>
        </NuxtLink>
      </li>
    </ul>
    <NuxtPage />
  </div>
</template>
