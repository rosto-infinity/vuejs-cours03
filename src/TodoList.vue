<template>
  <form action=""  @submit.prevent="addTodo">

    <fieldset>
      <input type="text"
       v-model="newTodo"
       
       placeholder="Tâche a effectuer"
       class="p-2   bg-green-50
       focus:border-2   focus:border-red-500
       border-l-2 border-b-2 border-t-2 "
       >
      

      <button
        :disabled="newTodo.length===0"
         class="bg-green-500 text-white  px-4 py-2  mr-5
         border-green-500 border-r-2 border-b-2 border-t-2 
         rounded-r-md
         hover:bg-green-600
        
         disabled:bg-green-300 
         disabled:border-green-300


         "> Ajouter une tache</button>
    </fieldset>
  </form>

  <div v-if="todos.length===0">
    Vous n'avez pas de tâches a faire 🥺
  </div>
  <div v-else>
      <ul>
        <li class="list-disc ml-6 mt-2"
          v-for="todo in todos"
          :key="todo.date"
          :class="{ 'line-through': todo.completed }"
         >
           <input type="checkbox"
           v-model="todo.completed"
           > {{ todo.title }}
         </li>
      </ul>
  </div>

</template>

<script setup>
  import { ref } from 'vue';

    const newTodo = ref('');
    const todos = ref([]);

    const addTodo = ()=>{
      todos.value.push({
        title: newTodo.value,
        completed: false,
        date: Date.now()
      });
      newTodo.value ='';
      // console.log(todos.title);
    }
</script>
