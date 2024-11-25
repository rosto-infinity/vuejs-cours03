<template>
  <button @click="sortColors()">Réorganiser</button>
  <button @click="resetColors()">Réinitialiser</button>
  <ul class="list-disc">
    <li v-for="color in colors" :key="color">
      {{ color }} 
      <button @click="deleteColor(color)"> => Supprimer</button>
      <button @click="openEditDialog(color)"> => Éditer</button>
    </li>
  </ul>

  <div v-if="isEditing" class="edit-dialog">
    <h3>Modifier la couleur</h3>
    <input v-model="colorToEdit" />
    <button @click="saveColor">Sauvegarder</button>
    <button @click="closeEditDialog">Annuler</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// État initial des couleurs
const initialColors = ["Red", "Green", "Blue", "Gray"];
const colors = ref([...initialColors]); // Copie de l'état initial
const isEditing = ref(false);
const colorToEdit = ref("");
const colorIndex = ref(-1);

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

// Ouvrir la boîte de dialogue d'édition
const openEditDialog = (color) => {
  isEditing.value = true;
  colorToEdit.value = color;
  colorIndex.value = colors.value.indexOf(color);
};

// Fermer la boîte de dialogue d'édition
const closeEditDialog = () => {
  isEditing.value = false;
  colorToEdit.value = "";
};

// Sauvegarder la couleur modifiée
const saveColor = () => {
  if (colorIndex.value !== -1) {
    colors.value[colorIndex.value] = colorToEdit.value;
  }
  closeEditDialog();
};
</script>

<style>
.edit-dialog {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
}
</style>
