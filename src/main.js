import { createApp } from 'vue'
import App from './Components/App.vue'
import routing from "@/routing/routing.js"
import components from './Components/UI/UI.js'

var app = createApp(App)
app.use(routing)
    .mount('#app')

components.forEach(element =>
{
    app.component(element.name, element)
    console.log(element.name)
})