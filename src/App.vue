<template>
  <!-- 1 ##########################  -->
  <h1 class="text-green-800 text-2xl">HELLO WORLD {{ name.toUpperCase() }}</h1>

  <span>Le compteur est à {{ count }}</span>
  <div class="flex items-center">
    <div v-if="count >= 0">
      <button
        @click="increment"
        class="px-7 py-2 bg-green-950 text-green-300 rounded-md mr-2"
      >
        Incrémenter
      </button>
    </div>

    <button
      v-on:click="decrement"
      class="px-7 py-2 bg-green-950 text-green-300 rounded-md ml-2"
    >
      Décrémenter
    </button>

    <div v-show="count >= 5" class="text-3xl ml-2 text-green-500">
      Vous avez cliquez plus de 5 fois
    </div>
    <div v-show="count < 5" class="text-3xl ml-2 text-red-500">
      Vous avez cliquez moins de 5 fois
    </div>
    <!-- 2 ##########################  -->
  </div>
  <p v-bind:id="count">Vous avez cliquez {{ count }} fois</p>
  <p v-bind:id="`p-${count}`">Vous avez cliquez {{ count }} fois</p>
  <p
    :id="`rosto-${count}`"
    :class="{ actif: count > 5 }"
    class="text-green-500"
  >
    Vous avez cliquez {{ count }} fois
  </p>

  <!-- 3 v-for ##########################  -->
  <ol>
    <li v-for="color in colors"> {{ color }}</li>
  </ol>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
const name = ref("Rostand lele");

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

setInterval(() => {
  // count.value++
}, 1000);

// 3- #########################

const colors = ref(["Red", "Green", "Blue", "Gray"]);
</script>

<style>
.actif {
  color: red;
}
</style>
