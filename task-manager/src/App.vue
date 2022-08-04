

<template>
  <header>
    <div class="wrapper">
      <router-link to="/task/CeTRhqsduWnvv2FK7cAs">to test Task</router-link>
    </div>
  </header>

  <main v-if="tasks">
    <RouterView />
  </main>
</template>

<script>


export default {
  data() {
    return {
    }
  },
  created() {
    this.$store.dispatch({ type: 'loadTasks' })
  },
  methods: {

  },
  computed: {
    tasks() {
      return this.$store.getters.getTasks
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500&display=swap');

html {
  font-family: 'Inter', sans-serif;
}
</style>