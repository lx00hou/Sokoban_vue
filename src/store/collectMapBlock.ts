import { defineStore } from "pinia";


let isCollect = false;
export const useCollectStore = defineStore('collect',() => {
    const start = () => {
        isCollect = true
    };
    const move = (fn:() => void) => {
        if(!isCollect) return
        fn && fn()
    }
    const end = () => {
        isCollect = false
    };

    return {
        start,
        move,
        end
    }
    
})