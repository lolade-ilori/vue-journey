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


 