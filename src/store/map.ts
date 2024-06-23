import { defineStore } from "pinia";
import Wall from "../example/Wall";
import Floor from "../example/Floor";
import Empty from "../example/Empty";
import Cargo from "../example/Cargo";
interface posInterface  {
    x:number,
    y:number
}
export type Assembly = Wall | Floor | Empty | Cargo;   
export enum eleCode {
    'EMPTY' = 0,
    'WALL' = 1,
    'FLOOR' = 2,
    'CARGO' = 3
}

export const useMapStore = defineStore('map',() => {
    /**
     * 地图数据
     *   0 空白
     *   1 墙
     *   2 地板
     *   3 箱子
     */
    const rawMap = [
        [0,0,1,1,1,1,1,0],
        [1,1,1,3,2,2,1,0],
        [1,2,2,2,2,2,1,0],
        [1,1,1,2,2,2,1,0],
        [1,1,1,1,2,2,1,0],
        [1,2,1,2,2,2,1,1],
        [1,2,2,2,2,2,2,1],
        [1,2,2,2,2,2,2,1],
        [1,1,1,1,1,1,1,1],
    ]
    /**
     * 地图初始化
     * @returns Assembly[][] 
     */
    function initMap(){
        const newMap:Assembly[][] = [];
        rawMap.forEach((row,i) => {
            newMap[i] = []; 
            row.forEach((el,j) => {
                if(el === eleCode.EMPTY){
                    newMap[i][j] = new Empty();
                }else if(el === eleCode.WALL){
                    newMap[i][j] = new Wall();
                }else if(el === eleCode.FLOOR){
                    newMap[i][j] = new Floor();
                }else if(el === eleCode.CARGO){
                    newMap[i][j] = new Cargo();
                }
            })
        })
        return newMap
    }

    /**
     * 根据x,y坐标检测是否是墙体
     * @param position
     * @returns Boolean
     */
    function isWall(position:posInterface){
        return rawMap[position.y][position.x] === eleCode.WALL
    }
    
    return {
        rawMap,
        initMap,
        isWall
    }
})