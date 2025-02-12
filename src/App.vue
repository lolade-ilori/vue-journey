<script setup>
import {ref } from 'vue';

const name = ref("John Doe")
const count = ref(0)
const status = ref('active')
const tasks = ref(['Task 1', 'Task3', 'Task 0'])

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

</script>


<template>
  <h1>{{ name }} {{ count }}</h1>
  <button @click="increment" >Increase count</button>
  <p v-if="status === 'active'">This user is confirmed</p>
  <p v-else-if="status === 'pending'">This user is pending</p>
  <p v-else>This user is not confirmed</p>
  <br />
  <button @click="toggleStatus">Toggle Status</button>



  <h4>Tasks</h4>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <a :href="link">Click to visit google</a>
</template>

<style scoped>
  h1 {
    color: #fff
  }
</style>


 