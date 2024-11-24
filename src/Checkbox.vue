<template>
  <ol class="list-disc">
    <li v-for="color in colors">{{ color }}</li>
  </ol>
</template>

<script setup>
import {ref} from 'vue'
  const colors = ref([
    "Red", 
    "Green",
     "Blue",
      "Gray"
  ]);
</script>
