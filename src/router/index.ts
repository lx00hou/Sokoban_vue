import { createRouter, createWebHashHistory } from "vue-router";
import Game from "../view/Game.vue";
import MapEdit from "../view/MapEdit.vue";
export const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:Game
        },
        {
            name:"Game",
            path:"/game",
            component:Game
        },
        {
            name:"MapEdit",
            path:"/mapEdit",
            component:MapEdit
        }
    ]
})