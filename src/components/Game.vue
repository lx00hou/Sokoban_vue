<template>
    <main>
        <div
        style="display: flex;" 
         v-for="row in map">
            <div v-for="j in row">
               <component :is="getElComponent(j)" /> 
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import {initMap,type Element} from '../game/map';
import Empty from './spare/Empty.vue';
import Floor from './spare/Floor.vue';
import Wall from './spare/Wall.vue';
import Cargo from './spare/Cargo.vue';
/** 
 * 初始化地图
 * 0 空白
 * 1 墙
 * 2 地板
 * 3 箱子
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
let map = initMap(rawMap);


/**
 * 动态渲染组件
 * @param eleObj 
 */
let imgEleComponentMap = {
    Empty,
    Floor,
    Wall,
    Cargo
}
function getElComponent (ele:Element) {
    return imgEleComponentMap[ele.name]
}   
</script>

<style scoped>
</style>
