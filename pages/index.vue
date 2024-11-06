<script lang="ts" setup>
const count = ref(0);
</script>

<template>
  <div>
    <h1>Counter: {{ count }}</h1>
    <Button @click="count++">Increment</Button>
  </div>
</template>
