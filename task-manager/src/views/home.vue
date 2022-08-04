<template>
    <div>
        <h1>Tasks: </h1>
        <div class="tasks-container">
            <article v-for="task in tasks">
                <task-preview :task="task" />
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
    },
}
</script>

