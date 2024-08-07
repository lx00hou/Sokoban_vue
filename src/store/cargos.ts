import { defineStore } from "pinia";
import { reactive } from "vue";
export interface RawCargo {
    x:number,
    y:number,
    onTarget?:boolean,
    name?:string
}

// 箱子实例
export class Cargo {
    public name:string = "Cargo";
    public x:number = 0;
    public y:number = 0;
    constructor(){}
}

export const useCargoStore = defineStore('cargos',() => {
    // 箱子所在的位置
    let cargoPosition:RawCargo[] = reactive([
        { x:3,y:2},
        { x:4,y:6},
    ])
    //  初始化实例
    function initCargos(){
        let cargo = new Cargo();
        cargoPosition.forEach(i => {
            i.name = cargo.name;
            i.onTarget = false;
        })
        return cargoPosition
    }

    // 通过x,y 获取当前是否有箱子
    function getCargoByPosition(position:RawCargo){
        return cargoPosition.find(i => i.x === position.x && i.y === position.y);
    }

    /**
     * 根据 x y 坐标判断 是否存在 箱子碰撞箱子的情况
     * @param position
     * @returns Boolean
     */
    function boxCollisionBox(position:RawCargo){
        let cargoColl = cargoPosition.find(i => i.x === position.x && i.y === position.y);
        return !!cargoColl
    }

    return {
        cargoPosition,
        initCargos,
        getCargoByPosition,
        boxCollisionBox
    }
    
})