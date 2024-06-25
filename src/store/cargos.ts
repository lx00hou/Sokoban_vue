import { defineStore } from "pinia";
import { reactive } from "vue";
export interface RawCargo {
    x:number,
    y:number
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
        let cargos:RawCargo[] = [];
        cargoPosition.map((c) => {
            let cargo = new Cargo();;
            cargo.x = c.x;
            cargo.y = c.y;
            cargos.push(cargo)
        })
        return cargos
    }
    
    return {
        cargoPosition,
        initCargos,
    }
    
})