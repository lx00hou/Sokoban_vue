import Wall from "./spare/Wall";
import Floor from "./spare/Floor";
import Empty from "./spare/Empty";
import Cargo from "./spare/Cargo";
export type Element = Wall | Floor | Empty | Cargo;   

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
            if(el === 0){
                newMap[i][j] = new Empty();
            }else if(el === 1){
                newMap[i][j] = new Wall();
            }else if(el === 2){
                newMap[i][j] = new Floor();
            }else if(el === 3){
                newMap[i][j] = new Cargo();
            }
        })
    })
    
    return newMap
}