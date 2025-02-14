<script>
  export default{
    // Properties returned from data() become reactive state
    // and will be exposed on `this`.
    data() {
      return {
        count: 0,
        name: 'John Doe',
        status: 'active',
        tasks: ["taks 1", "task 2", "task 3"],
        link: "https://google.com"
      }
    },

    // Methods are functions that mutate state and trigger updates.
    // They can be bound as event handlers in templates.
    methods: {
      increment() {
        this.count++
      },
      toggleStatus() {
        if(this.status === 'active') {
          this.status = 'pending'
        }else if(this.status === 'pending') {
          this.status = 'inactive'
        }else {
          this.status = 'active'
        }
      }
    },

    // Lifecycle hooks are called at different stages
    // of a component's lifecycle.
    // This function will be called when the component is mounted.
    mounted() {
      console.log(`The initial count is ${this.count}.`)
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

<!-- -------------------------------------------------------------------------------------- -->
 

<script setup>
import {ref, onMounted } from 'vue';

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

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()

    tasks.value = data.map((data) => data.title)
  } catch (error) {
    console.log('Error fetching todo')
  }

})

</script>


<template>
  <h1>{{ name }} {{ count }}</h1>
  <button @click="increment" >Increase count</button>
  <p v-if="status === 'active'">This user is confirmed</p>
  <p v-else-if="status === 'pending'">This user is pending</p>
  <p v-else>This user is not confirmed</p>
  <br />
  <button @click="toggleStatus">Toggle Status</button>

  <form @submit.prevent="addTask">
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


 