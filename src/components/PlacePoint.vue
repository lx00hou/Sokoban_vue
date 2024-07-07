<template>
    <template v-for="place in placePoint">
        <div class="absolute" :style="setPosition(place)"  :x="place.x" :y="place.y" >
            <img class="gameImg" :src="placePointImg" alt="">
        </div>
    </template>
 </template>
 <script setup lang="ts">
 import placePointImg from '../assets/target.png';
 import { computed } from 'vue';
 import { usePlacePointStore , type placePoint } from '../store/placePoint'
 
 const { placePointPos } = usePlacePointStore();
 let placePoint = placePointPos;   
 
 /**
  * 给箱子放置点的位置赋值
  * @param cargoInfo
  * @return
  */
let setPosition = (cargoInfo:placePoint) => {
    const STEP = 32; 
    let top = computed(() => cargoInfo.y * STEP);
    let left = computed(() => cargoInfo.x * STEP);
    return [`top:${top.value}px`,`left:${left.value}px`]
}
</script>

 <style>
</style>
 