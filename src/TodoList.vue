<template>
  <form action="" @submit.prevent="addTodo">

    <fieldset>
      <input type="text"
       v-model="newTodo"

       placeholder="Tâche a effectuer"
       class=" p-2 border-2 border-green-500 bg-green-50">

      <button
        :disabled="newTodo.length === 0"
      
       class="bg-green-500 text-white  px-4 py-2  mr-5 hover:bg-green-600 disabled:bg-green-300 border-2 border-green-500"> Ajouter</button>
    </fieldset>
  </form>

  <div v-if="todos.length === 0">
    Vous n'avez pas de tâches a faire 🥺
  </div>
  <div v-else>
      <ul>
        <li class="list-disc ml-6 mt-2"
         v-for="todo in todos"
         :key="todo.date"
         >
         <label>
           <input type="checkbox">{{ todo.title }}
         </label>
         </li>
      </ul>
  </div>

</template>

<script setup>
import { ref } from 'vue';

const newTodo = ref('');
const todos = ref([]);

const addTodo = () => {
  todos.value.push({
    title: newTodo.value,
    completed: false,
    date: Date.now()
  });
  newTodo.value = '';
}
</script>
