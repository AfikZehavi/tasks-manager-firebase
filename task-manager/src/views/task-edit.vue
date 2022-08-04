<template>
    <h2>
        <span v-if="newTask">Create new</span>
        <span v-else>Edit</span>
        Task
    </h2>

</template>
    
<script >

export default {
    data() {
        return {
            newTask: false,
            taskToEdit: null
        }
    },

    created() {
        const { id } = this.$route.params
        if (id) {
            this.newTask = false
            const task = this.$store.getters.getTaskById(id)
            this.taskToEdit = JSON.parse(JSON.stringify(task))
        } else {
            this.newTask = true
            this.taskToEdit = {
                createdAt: Date.now(),
                description: '',
                importance: 0,
                status: "not Done",
                title: ''
            }
        }
    }

}
</script>
    
<style>
</style>