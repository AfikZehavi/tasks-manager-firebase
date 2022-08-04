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
        }
    },
    actions: {
        async loadTasks({ commit }) {
            try {
                const tasks = await firebaseService.init()
                commit({ type: 'setTasks', tasks })
            } catch (err) {
                console.log('err = ', err)
            }
        }
    }
})

export default store