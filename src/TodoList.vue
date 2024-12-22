<template>
  <form action="" @submit.prevent="addTodo">
    <input type="text" v-model="newTodo" placeholder="Tâche à effectuer"
      class="p-2 bg-green-50 focus:border-2 focus:border-red-500 border-l-2 border-b-2 border-t-2" />


    <button :disabled="newTodo.length === 0"
      class="bg-green-500 text-white px-4 py-2 mr-5 border-green-500 border-r-2 border-b-2 border-t-2 rounded-r-md hover:bg-green-600 disabled:bg-green-300 disabled:border-green-300">
      Ajouter une tâche
    </button>

  </form>

  <div v-if="todos.length === 0">
    Vous n'avez pas de tâches à faire 🥺
  </div>
  <div v-else>
    <ul>
      <li class="list-disc ml-6 mt-2" v-for="todo in sortedTodos" :key="todo.date"
        :class="{ 'line-through': todo.completed, 'opacity-50': todo.completed }">
        <input type="checkbox" v-model="todo.completed" /> {{ todo.title }}
        <button v-if="todo.completed" @click="deleteTodo(todo)" class="text-red-500 ml-2">Supprimer</button>
      </li>
    </ul>
    <label class="block mt-4">
      <input type="checkbox" v-model="hideCompleted" class="mr-2" /> Masquer les tâches terminées
    </label>
    <button @click="sortTodos" class="bg-green-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-600">Trier</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const newTodo = ref('');
const todos = ref([
  {
    title: 'Tâches de test',
    completed: true,
    date: 1,
  },
  {
    title: 'Tâches à faire',
    completed: false,
    date: 2,
  },
]);

const hideCompleted = ref(false); // Ajout de hideCompleted

const sortedTodos = computed(() => {
  const sortedList = todos.value.sort((a, b) => a.completed - b.completed);
  return hideCompleted.value ? sortedList.filter(todo => !todo.completed) : sortedList;
});

const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    todos.value.push({
      title: newTodo.value,
      completed: false,
      date: Date.now(),
    });
    newTodo.value = '';
  }
};

const sortTodos = () => {
  todos.value.sort((a, b) => a.title.localeCompare(b.title));
};

const deleteTodo = (todo) => {
  todos.value = todos.value.filter(t => t !== todo);
};
</script>
