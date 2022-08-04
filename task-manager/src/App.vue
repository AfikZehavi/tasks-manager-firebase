

<template>
  <header>
    <div class="wrapper">
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

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