import { defineStore } from "pinia";
import { reactive } from "vue";

export type positionType = {
    x:number,
    y:number
}
// 保存用户编辑地图时的实时数据
export const useMapGameJson = defineStore('mapGameJson',() => {
    /**
     *  player:玩家当前位置
     *  cargoPosition:箱子当前位置集合
     *  cargoTargetPosition:放置点当前位置集合
     */
    let player:positionType = reactive({
        x:0,
        y:0
    })
    let cargoPosition:positionType[] = reactive([])
    let cargoTargetPosition:positionType[] = reactive([])

    return {
        player,
        cargoPosition,
        cargoTargetPosition
    }
})