import { defineStore } from "pinia";
import { reactive } from "vue";
export type placePoint = {
    x:number,
    y:number    
}

export const usePlacePointStore = defineStore('placePoint' ,() => {
    let placePointPos:placePoint[] = reactive([
        { x:5,y:2},
        { x:3,y:6},
    ])


    // 获取放置点位置
    function getPlacePointPos() {
        return placePointPos
    }

    return {
        placePointPos,
        getPlacePointPos
    }
})