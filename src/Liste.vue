<template>
  <button @click="sortColors()">Réorganiser</button>
  <button @click="resetColors()">Réinitialiser</button>
  <ul class="list-disc">
    <li v-for="color in colors" :key="color">
      {{ color }} <button @click="deleteColor(color)"> => Supprimer</button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

// État initial des couleurs
const initialColors = ["Red", "Green", "Blue", "Gray"];
const colors = ref([...initialColors]); // Copie de l'état initial

const deleteColor = (color) => {
  colors.value = colors.value.filter((col) => col !== color);
};

const sortColors = () => {
  colors.value.sort((a, b) => (a > b ? 1 : -1));
};

// Fonction pour réinitialiser les couleurs
const resetColors = () => {
  colors.value = [...initialColors]; // Réinitialise à l'état initial
};
</script>
