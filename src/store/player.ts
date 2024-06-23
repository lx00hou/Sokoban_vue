import { defineStore } from "pinia";
export const usePlayerStore = defineStore('player',() => {
    // 控制玩家所处的位置
    let player = {
        x:1,
        y:2
    }
    
    return {
        player
    }
})