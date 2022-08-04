<template>
    <div class="task-preview">
        {{ task.title }}
        <span>Description: </span>
        {{ task.description }}
        <span>Created at: {{ createdTime }}</span>
        <span v-if="task.doneAt">Done at: </span>
        <span>Status: {{ task.status }}</span>

        <div class="btns-container">
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            createdTime: this.normalDate(this.task.createdAt.seconds)
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
        console.log('task = ', this.task)
    }
}
</script>

<style lang="scss" scoped>
</style>