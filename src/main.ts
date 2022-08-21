import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import router from './router'

import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            user: { 
                name: null, 
                id: null, 
                steam: null, 
                ready: false 
            }
        }
    },
    getters: {
        loggedIn: (state: any) => {
            return state.user.steam != null
        }
    },
    mutations: {
        set(state: any, payload: any) {
            state.user = payload
        }
    }
})

const app = createApp(App)

app.use(router)

app.use(store)

app.mount('#app')

app.config.performance = true