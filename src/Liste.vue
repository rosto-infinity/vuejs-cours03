<template>
  <ul class="list-disc">
    <li v-for="color in colors">{{ color }}</li>
  </ul>
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
