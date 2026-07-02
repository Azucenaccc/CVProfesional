import {createRouter, createWebHistory} from "vue-router";
import CVProfesion from "../components/CVProfesion.vue";
import perfil from "../views/perfil.vue";
import estudios from "../views/estudios.vue";
import habilidades from "../views/habilidades.vue";
import tecnologuias from "../views/tecnologias.vue";

const routes = [
    {
        path: '/',
        name: 'CVProfesion',
        component: CVProfesion,
    },
    {
        path: '/perfil',
        name: 'Perfil',
        component: perfil,
    },
    {
        path: '/estudios',
        name: 'Estudios',
        component: estudios,
    },
    {
        path: '/habilidades',
        name: 'Habilidades',
        component: habilidades,
    },
    {
        path: '/tecnologuias',
        name: 'Tecnologuias',
        component: tecnologuias,
    }
]

//Creacion del router
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router