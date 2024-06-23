import Wall from "./spare/Wall";
import Floor from "./spare/Floor";
import Empty from "./spare/Empty";
import Cargo from "./spare/Cargo";
export type Element = Wall | Floor | Empty | Cargo;   
enum eleCode {
    'EMPTY' = 0,
    'WALL' = 1,
    'FLOOR' = 2,
    'CARGO' = 3
}

/**
 * 地图初始化
 * @param rawMap 
 * @returns [ [empty{},Floor{},wall{}] ]
 */
export function initMap(rawMap:number[][]){
    const newMap:Element[][] = [];
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