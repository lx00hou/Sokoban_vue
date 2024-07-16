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
     * @params KeyboardEvent
     */
    const movePlayer = (keyBoard:KeyboardEvent) => {
        let gather:Record<string,keyof typeof Direction> = {
            ArrowLeft:'left',
            ArrowRight:'right',
            ArrowUp:'up',
            ArrowDown:'down',
        }
        useFighting(Direction[gather[keyBoard.code]]);
    }
    return {
        player,
        movePlayer,
    }
    
})