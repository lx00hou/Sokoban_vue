import { defineStore } from "pinia";
import { reactive } from "vue";
export interface RawCargo {
    x:number,
    y:number,
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
        { x:1,y:6},
    ])
    //  初始化实例
    function initCargos(){
        // let cargos:RawCargo[] = [];
        // cargoPosition.forEach((c) => {
        //     let cargo = new Cargo();;
        //     cargo.x = c.x;
        //     cargo.y = c.y;
        //     cargos.push(cargo)
        // })
        cargoPosition.forEach(i => {
            let cargo = new Cargo();
            i.name = cargo.name;
        })
        return cargoPosition
    }

    // 通过x,y 获取当前是否有箱子
    function getCargoByPosition(position:RawCargo){
        return cargoPosition.find(i => i.x === position.x && i.y === position.y);
    }

    return {
        cargoPosition,
        initCargos,
        getCargoByPosition
    }
    
})