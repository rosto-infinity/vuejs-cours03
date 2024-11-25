<template>
  <label for="tacks">
  <input type="checkbox" name="tacks" id="tacks"> Voutre couleur
  <input type="checkbox" name="tacks" id="tacks"> Voutre theme
  </label>
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
