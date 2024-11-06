<template>
  <div>
    <h1>Counter: {{ count }}</h1>
    <button @click="count++">Increment</button>
  </div>
</template>

<script lang="ts" setup>
const count = ref(0);
</script>
