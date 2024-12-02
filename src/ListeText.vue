<template>
  <button
    @click="sortColors()"
    class="bg-slate-600 p-2 rounded-md mr-3 text-white"
  >
    Reorganiser
  </button>
  <button
    @click="resetColors()"
    class="bg-slate-600 p-2 rounded-md mr-3 text-white"
  >
    Reinitialiser
  </button>

  <form action="" class="mt-2">
    <input
      type="text"
      placeholder="New color"
      class="border-3 border-x-black"
      v-model="colorName"
    />

    {{ colorName}}
    <button
      @click="resetColors()"
      class="bg-slate-600 p-2 rounded-md mr-3 text-white"
    >
      Ajouter
    </button>
  </form>

  <ul class="list-disc mt-4">
    <li v-for="color in colors" :key="color" class="flex items-center">
      <span>{{ color }}</span>
      <div>
        <button
          @click="deleteColor(color)"
          class="text-red-500 hover:text-red-700"
        >
          ... Supprimer
        </button>

        <button
          @click="openEditDialog(color)"
          class="text-blue-500 hover:text-blue-700 ml-2"
        >
          | Éditer
        </button>
      </div>
    </li>
  </ul>

  <div v-if="isEditing" class="mt-4">
    <h3 class="text-lg font-semibold">Modifier la couleur</h3>
    <input
      v-model="colorToEdit"
      class="border border-gray-300 rounded px-2 py-1"
    />
    <button
      @click="saveColor"
      class="bg-green-500 text-white px-4 py-2 rounded ml-3 hover:bg-green-600"
    >
      Sauvegarder
    </button>
    <button
      @click="closeEditDialog"
      class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
    >
      Annuler
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const initialColors = ["Red", "Green", "Blue", "Gray", "White"];
const colors = ref([...initialColors]); // Copie de l'état initial
const colorIndex = ref(-1);
const isEditing = ref(false);
const colorToEdit = ref("");
const colorName = ref("");

const sortColors = () => {
  colors.value.sort((a, b) => (a > b ? 1 : -1));
};

const resetColors = () => {
  colors.value = [...initialColors];
};

const deleteColor = (color) => {
  colors.value = colors.value.filter((col) => col !== color);
};

// Ouvrir la boîte de dialogue d'édition
const openEditDialog = (color) => {
  isEditing.value = true;

  colorToEdit.value = color;
  console.log(isEditing.value);
  colorIndex.value = colors.value.indexOf(color);
};

const saveColor = () => {
  if (colorIndex.value !== -1) {
    colors.value[colorIndex.value] = colorToEdit.value;
  }
};

// Fermer la boîte de dialogue d'édition
const closeEditDialog = () => {
  isEditing.value = false;
  colorToEdit.value = "";
};
</script>
