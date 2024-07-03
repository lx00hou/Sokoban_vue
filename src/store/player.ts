import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from './map';
import { useCargoStore } from './cargos'

export const usePlayerStore = defineStore('player',() => {
    let {isWall} = useMapStore();
    let {getCargoByPosition } = useCargoStore();
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
        let position = {x:player.x - 1,y:player.y};
        if(isWall(position)) return
        // 对箱子进行检测
        let cargo = getCargoByPosition(position);
        if(cargo) {
            cargo.x = cargo.x - 1;
        }
    
        player.x = player.x -1;
    }
    const movePlayerToRight = () => {
        let position = {x:player.x + 1,y:player.y};
        if(isWall(position)) return
        let cargo = getCargoByPosition(position);
        if(cargo) {
            cargo.x = cargo.x + 1;
        }

        player.x = player.x +1;
    }
    const movePlayerToUp = () => {
        let position = {x:player.x,y:player.y - 1};
        if(isWall(position)) return
        let cargo = getCargoByPosition(position);
        if(cargo) {
            cargo.y = cargo.y - 1;
        }
        player.y = player.y -1;
    }
    const movePlayerToDown = () => {
        let position = {x:player.x,y:player.y + 1};
        if(isWall(position)) return
        let cargo = getCargoByPosition(position);
        if(cargo) {
            cargo.y = cargo.y + 1;
        }
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