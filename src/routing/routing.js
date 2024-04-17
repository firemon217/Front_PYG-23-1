import Authorization from "@/Components/EnterAccount/Authorization/Authorization.vue"
import Registration from "@/Components/EnterAccount/Registration/Registration.vue"
import MainMenu from "@/Components/MainMenu/MainMenu.vue"
import EnterAccount from "@/Components/EnterAccount/EnterAccount.vue"
import Profile from "@/Components/Profile/Profile.vue"
import Project from "@/Components/Project/Project.vue"
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/enteraccount',
        component: EnterAccount,
        children: [
            {
              path: '/enteraccount',
              component: Authorization,
            },
            {
                path: '/enteraccount/registration',
                component: Registration,
            },
          ]
    },
    {
        path: '/enteraccount',
        component: Authorization
    },
    {
        path: '/enteraccount/registrtion',
        component: Registration
    },
    {
        path: '/',
        component: MainMenu
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/project',
        component: Project
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router