<script setup>
import {ref } from 'vue';

const name = ref("John Doe")
const count = ref(0)
const status = ref('active')
const tasks = ref(['Task 1', 'Task3', 'Task 0'])
const newTask = ref('')

const increment = () => {
  count.value++
}

const toggleStatus = () => {
    if(status.value === 'active') {
      status.value = 'pending'
    }else if(status.value === 'pending') {
      status.value = 'inactive'
    }else {
      status.value = 'active'
    }
}

const addTask = () => {
  if(newTask.value.trim() !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}

</script>


<template>
  <h1>{{ name }} {{ count }}</h1>
  <button @click="increment" >Increase count</button>
  <p v-if="status === 'active'">This user is confirmed</p>
  <p v-else-if="status === 'pending'">This user is pending</p>
  <p v-else>This user is not confirmed</p>
  <br />
  <button @click="toggleStatus">Toggle Status</button>

  <form v-on:submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">Submit</button>
  </form>


  <h4>Tasks</h4>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>

</template>

<style scoped>
  h1 {
    color: #fff
  }
</style>


 