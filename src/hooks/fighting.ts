import { useMapStore } from '../store/map';
import { useCargoStore } from '../store/cargos';
import { RawCargo } from '../store/cargos'
import { usePlayerStore } from '../store/player'
export enum Direction  {
    left = 'left',
    right = 'right',
    up = 'up',
    down = 'down'
}
/**
 * 玩家移动 箱子碰撞 墙体碰撞 功能点
 * @param direction 
 * @returns 
 */
export function useFighting(direction:Direction) {
    let {isWall} = useMapStore();    // 墙体碰撞
    let { getCargoByPosition } = useCargoStore();  // 获取箱子位置
    let { player } = usePlayerStore();  // 获取玩家位置

    let map:Record<string,{
        playerPos:RawCargo,
        cargoPost:RawCargo,
        type:'x' | 'y',
        operator: -1 | 1
    }> = {
        left:{
            playerPos: {x:player.x - 1,y:player.y},
            cargoPost:{x:player.x - 2,y:player.y},
            type:'x',
            operator:-1
        },
        right:{
            playerPos: {x:player.x + 1,y:player.y},
            cargoPost:{x:player.x + 2,y:player.y},
            type:'x',
            operator:1
        },
        up:{
            playerPos: {x:player.x ,y:player.y - 1},
            cargoPost:{x:player.x ,y:player.y - 2},
            type:'y',
            operator: -1
        },
        down:{
            playerPos: {x:player.x ,y:player.y + 1},
            cargoPost:{x:player.x,y:player.y + 2},
            type:'y',
            operator: 1
        }
    }

    let { playerPos,cargoPost,type, operator }  = map[direction];
    if(isWall(playerPos)) return   // 监测玩家移动是否碰撞了墙体
    let cargo = getCargoByPosition(playerPos);  // 获取箱子位置
    if(cargo){
        if(isWall(cargoPost)){   // 监测箱子的移动是否碰撞了墙体
            return
        }
        cargo[type] = cargo[type] + 1 * operator;
    }

    player[type]= player[type] +1 * operator;



}