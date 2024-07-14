import { useMapStore } from '../store/map';
import { useCargoStore } from '../store/cargos';
import { RawCargo } from '../store/cargos'
import { usePlayerStore } from '../store/player'
import { usePlacePointStore } from '../store/placePoint';
import { useGameStore } from '../store/game';
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
    let { getCargoByPosition,boxCollisionBox } = useCargoStore();  // 获取箱子位置,以及箱子碰撞箱子检测方法
    let { player } = usePlayerStore();  // 获取玩家位置
    let { getPlacePointPos } = usePlacePointStore();   // 获取箱子放置点位置
    let { judgeGameIsWin }  = useGameStore();  // 检测每个箱子的onTarget 属性,判断是否游戏结束

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
    if(!map[direction]){
        return
    }
    let { playerPos,cargoPost,type, operator }  = map[direction];
    if(isWall(playerPos)) return   // 监测玩家移动是否碰撞了墙体
    let cargo = getCargoByPosition(playerPos);  // 获取箱子位置
    if(cargo){
        if(isWall(cargoPost)){   // 监测箱子的移动是否碰撞了墙体
            return
        }
        if(boxCollisionBox(cargoPost)){    // 监测是否有箱子碰撞箱子的情况
            return
        }
        cargo[type] = cargo[type] + 1 * operator;
        
        // 检测箱子是否到达了放置点
        let reach = getPlacePointPos().find(place => {
            return place.x === cargo.x && place.y === cargo.y
        })
        cargo.onTarget = !!reach;

        judgeGameIsWin();
    }

    player[type]= player[type] +1 * operator;



}