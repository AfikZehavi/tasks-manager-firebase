<template>
    <div class="task-preview">
        <h2>{{ task.title }}</h2>
        <span>Description: </span>
        {{ task.description }}
        <span>Created at: {{ createdTime }}</span>
        <span v-if="task.doneAt">Done at: </span>
        <span>Status: {{ task.status }}</span>

        <div class="btns-container">
            <button>
                <router-link :to="'/task/edit/' + task.id">Edit</router-link>
            </button>
            <button @click="$emit('deleteTask', task)">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            createdTime: this.normalDate(this.task.createdAt)
        }
    },
    props: {
        task: {
            type: Object,
            required: true,
        }
    },
    methods: {
        normalDate(secs) {
            return new Date(secs).toLocaleString('en-GB', { timeZone: 'UTC' })
        }
    },
    created() {
    }
}
</script>

<style lang="scss" scoped>
</style>