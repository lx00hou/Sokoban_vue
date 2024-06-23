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
import { useMapStore , type Assembly} from '../store/map';
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
const {initMap} = useMapStore();
let map = initMap()


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
function getElComponent (ele:Assembly) {
    return imgEleComponentMap[ele.name]
}   
</script>

