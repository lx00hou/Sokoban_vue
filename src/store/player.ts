import { defineStore } from "pinia";
import { reactive } from "vue";
import { useFighting,Direction } from '../hooks/fighting'


export const usePlayerStore = defineStore('player',() => {
    // 控制玩家所处的坐标位置
    let player = reactive({
        x:1,
        y:2
    })
    /**
     * 玩家 和 箱子移动  判断是否碰撞了墙体
     * @params
     * @returns 
     */
    const movePlayerToLeft = () => {
        useFighting(Direction.left);
        // let position = {x:player.x - 1,y:player.y};
        // if(isWall(position)) return   // 检测玩家移动是否碰撞墙体
        // let cargo = getCargoByPosition(position);
        // if(cargo) {
        //     if(isWall({ x:player.x - 2,y:player.y})){   // 检测箱子移动是否碰撞墙体
        //         return
        //     }
        //     cargo.x = cargo.x - 1;
        // }
    
        // player.x = player.x -1;
    }
    const movePlayerToRight = () => {
        useFighting(Direction.right)
    }
    const movePlayerToUp = () => {
        useFighting(Direction.up)
    }
    const movePlayerToDown = () => {
        useFighting(Direction.down)
    }
    return {
        player,
        movePlayerToLeft,
        movePlayerToRight,
        movePlayerToUp,
        movePlayerToDown
    }
    
})