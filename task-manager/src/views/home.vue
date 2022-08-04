<template>
    <router-link to="/task/edit">Add task</router-link>
    <div>
        <h1>Tasks: </h1>
        <div class="tasks-container">
            <article v-for="task in tasks">
                <task-preview :task="task" @deleteTask="deleteTask" />
            </article>
        </div>
    </div>
</template>

<script>
import taskPreview from '../components/task-preview.vue'
export default {
    data() {
        return {
        }
    },
    components: {
        taskPreview
    },
    computed: {
        tasks() {
            return this.$store.getters.getTasks
        },
    },
    methods: {
        deleteTask(task) {
            this.$store.dispatch({ type: 'deleteTask', task })
        }
    },
}
</script>

