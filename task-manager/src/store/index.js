import { createStore } from 'vuex'
import { firebaseService } from '../firebase'

const store = createStore({
    strict: true,
    state: {
        tasks: null,
    },
    mutations: {
        setTasks(state, { tasks }) {
            state.tasks = tasks
            console.log('tasks = ', tasks)
        }
    },
    getters: {
        getTasks(state) {
            return state.tasks
        },
        getTaskById: (state) => (id) => state.tasks.find(task => task.id === id),

    },
    actions: {
        async loadTasks({ commit }) {
            try {
                const tasks = await firebaseService.init()
                commit({ type: 'setTasks', tasks })
            } catch (err) {
                console.log('err = ', err)
            }
        },
        async updateTask({ commit }, { task }) {
            try {
                await firebaseService.updateTask(task)
                const tasks = await firebaseService.init()
                commit({ type: 'setTasks', tasks })
            } catch (err) {
                console.log('err = ', err)
            }
        },
        async createNewTask({ commit }, { task }) {
            try {
                await firebaseService.addTask(task)
                const tasks = await firebaseService.init()
                commit({ type: 'setTasks', tasks })
            } catch (err) {
                console.log('err = ', err)
            }
        },
        async deleteTask({ commit }, { task }) {
            try {
                await firebaseService.deleteTask(task.id)
                const tasks = await firebaseService.init()
                commit({ type: 'setTasks', tasks })
            } catch (err) {
                console.log('err = ', err)
            }
        }
    }

})

export default store