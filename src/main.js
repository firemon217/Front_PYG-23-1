import '../src/main.css'

import { createApp } from 'vue'
import App from './Components/App.vue'
import routing from "@/routing/routing.js"

createApp(App)
            .use(routing)
            .mount('#app')
