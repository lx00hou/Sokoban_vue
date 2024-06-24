<template>
    <section>
        <div
        style="display: flex;" 
        v-for="row in map">
            <div v-for="j in row">
                <component :is="getElComponent(j)" /> 
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { type Component } from 'vue';
import { useMapStore , type Assembly} from '../store/map';
import Empty from './spare/Empty.vue';
import Floor from './spare/Floor.vue';
import Wall from './spare/Wall.vue';
/** 
 * 初始化地图
 * 0 空白
 * 1 墙
 * 2 地板
 * 3 箱子
 */
const {initMap} = useMapStore();
let map = initMap()


/**
 * 动态渲染组件
 * @param eleObj 
 */
let imgEleComponentMap:Record<string,Component> = {
    Empty,
    Floor,
    Wall,
}
function getElComponent (ele:Assembly) {
    return imgEleComponentMap[ele.name]
}   
</script>

