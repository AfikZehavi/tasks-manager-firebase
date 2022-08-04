

<template>
  <header>
    <div class="wrapper">
      <router-link to="/task/CeTRhqsduWnvv2FK7cAs">to test Task</router-link>
    </div>
  </header>

  <main>
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
  },
}
</script>