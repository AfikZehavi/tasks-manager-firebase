<template>
    <section class="edit-page-container">
        <main class="edit-main-container">


            <h2>
                <span v-if="newTask">Create new</span>
                <span v-else>Edit</span>
                Task
            </h2>

            <el-form label-width="150px" class="form">
                <el-form-item label="Task title">
                    <el-input v-model="taskToEdit.title" />
                </el-form-item>
                <el-form-item label="Task description">
                    <el-input v-model="taskToEdit.description" />
                </el-form-item>
                <el-form-item label="Done">
                    <el-checkbox v-model="taskToEdit.status" :checked="taskToEdit.status === 'done'" />
                </el-form-item>
                <el-form-item label="importance">
                    <el-radio-group v-model="taskToEdit.importance" class="ml-4">
                        <el-radio label="0">CSS !importent</el-radio>
                        <el-radio label="1">Kind of importent</el-radio>
                        <el-radio label="2">Not so importent</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-button class="formbtn" v-if="newTask">Create task</el-button>
                <el-button class="formbtn" v-else>Update task</el-button>
            </el-form>

        </main>
    </section>
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
    },

    methods: {
        updateTask() {
            if (this.newTask) this.$store.dispatch({ type: 'createNewTask', task: this.taskToEdit })
            else this.$store.dispatch({ type: 'updateTask', task: this.taskToEdit })
        }
    }

}
</script>





    
<style lang="scss" scoped >
.edit-page-container {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    margin-block: 3rem;
    align-items: center;

    h2 {
        text-align: center;
    }
}


form {
    padding: 1.4rem;
    border: rgba(26, 26, 26, 0.642) solid .3px;
    margin: 3rem;
}


.edit-main-contianer {
    display: flex;
    flex-direction: column;
}


button {
    align-items: center;
    display: block;
    margin: auto;
    font-weight: 700;
    height: 50px;
    font-size: 20px;
}
</style>
