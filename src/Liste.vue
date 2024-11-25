<template>
  <ul class="list-disc">
    <li class="text-2xl" v-for="color in colors">
    {{ color }} <button @click="deleteColor(color)"
    class="bg-red-600 m-1 p-1 rounded-md">Supprimer</button>
    </li>
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

  const deleteColor = (color)=>{
    colors.value = colors.value.filter(col => col !== color)
  }
</script>
