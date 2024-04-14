import Authorization from "@/Components/EnterAccount/Authorization/Authorization.vue"
import Registration from "@/Components/EnterAccount/Registration/Registration.vue"
import MainMenu from "@/Components/MainMenu/MainMenu.vue"
import EnterAccount from "@/Components/EnterAccount/EnterAccount.vue"
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/EnterAccount',
        component: EnterAccount,
        children: [
            {
              path: '/EnterAccount',
              component: Authorization,
            },
            {
                path: '/EnterAccount/Registration',
                component: Registration,
            },
          ]
    },
    {
        path: '/EnterAccount',
        component: Authorization
    },
    {
        path: '/EnterAccount/Registrtion',
        component: Registration
    },
    {
        path: '/MainMenu',
        component: MainMenu
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router