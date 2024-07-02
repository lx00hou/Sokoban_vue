import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from './map';
import { useCargoStore } from './cargos'

export const usePlayerStore = defineStore('player',() => {
    let {isWall} = useMapStore();
    let { cargoPosition,getCargoByPosition } = useCargoStore();
    let cargos = cargoPosition
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
        // 对箱子进行检测
        if(cargos){
            let position = {x:player.x - 1,y:player.y};
            let cargo = getCargoByPosition(position);
            if(cargo) {
                cargo.x = cargo.x - 1;
            }
        }
        
        player.x = player.x -1;
    }
    const movePlayerToRight = () => {
        if(isWall({x:player.x + 1,y:player.y})) return
        let position = {x:player.x + 1,y:player.y};
        let cargo = getCargoByPosition(position);
        if(cargo) {
            cargo.x = cargo.x + 1;
        }

        player.x = player.x +1;
    }
    const movePlayerToUp = () => {
        if(isWall({x:player.x,y:player.y - 1})) return
        let position = {x:player.x,y:player.y - 1};
        let cargo = getCargoByPosition(position);
        if(cargo) {
            cargo.y = cargo.y - 1;
        }
        player.y = player.y -1;
    }
    const movePlayerToDown = () => {
        if(isWall({x:player.x,y:player.y + 1})) return
        let position = {x:player.x,y:player.y + 1};
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