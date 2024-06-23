import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from './map';

export const usePlayerStore = defineStore('player',() => {
    let {isWall} = useMapStore();
    // 控制玩家所处的坐标位置
    let player = reactive({
        x:1,
        y:2
    })
    /**
     * 控制人物移动
     * 判断下一步是否会碰撞墙体
     * @params
     * @returns 
     */
    const movePlayerToLeft = () => {
        if(isWall({x:player.x - 1,y:player.y})) return
        player.x = player.x -1;
    }
    const movePlayerToRight = () => {
        if(isWall({x:player.x + 1,y:player.y})) return
        player.x = player.x +1;
    }
    const movePlayerToUp = () => {
        if(isWall({x:player.x,y:player.y - 1})) return
        player.y = player.y -1;
    }
    const movePlayerToDown = () => {
        if(isWall({x:player.x,y:player.y + 1})) return
        player.y = player.y +1;
    }
    
    return {
        player,
        movePlayerToLeft,
        movePlayerToRight,
        movePlayerToUp,
        movePlayerToDown
    }
    
})