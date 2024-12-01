<template>
<button @click="sortColors()" class="bg-slate-600 p-2 rounded-md mr-3 text-white">Reorganiser</button>
<button @click="resetColors()"  class="bg-slate-600 p-2 rounded-md mr-3 text-white">Reinitialiser</button>

   <ul class="list-disc mt-4">
      <li v-for="color in colors" :key="color" class="flex items-center ">
        <span>{{ color }}</span>
        <div>

          <button @click="deleteColor(color)" class="text-red-500 hover:text-red-700"> ... Supprimer </button>

          <button @click="openEditDialog(color)" class="text-blue-500 hover:text-blue-700 ml-2"> | Éditer</button>
        </div>
      </li>
    </ul>


   


</template>


<script setup>
import {ref} from "vue";

const initialColors = ["Red", "Green", "Blue", "Gray", "White"];
const colors = ref([...initialColors]); // Copie de l'état initial
const colorIndex = ref(-1);

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




