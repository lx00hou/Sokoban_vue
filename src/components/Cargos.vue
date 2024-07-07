<template>
    <template v-for="cargo in cargos">
        <div class="absolute" :style="setPosition(cargo)" :x="cargo.x" :y="cargo.y">
            <img class="gameImg" :src="Cargo" alt="">
        </div>
    </template>
 </template>
 <script setup lang="ts">
 import Cargo from '../assets/cargo.png';
 import { computed } from 'vue';
 import { useCargoStore , type RawCargo } from '../store/cargos'

/**
 * 初始化箱子实例
 */
 const { initCargos } = useCargoStore();
 let cargos = initCargos();   
 
 /**
  * 给箱子的位置赋值
  * @param cargoInfo
  * @return
  */
let setPosition = (cargoInfo:RawCargo) => {
    const STEP = 32; 
    let top = computed(() => cargoInfo.y * STEP);
    let left = computed(() => cargoInfo.x * STEP);
    return [`top:${top.value}px`,`left:${left.value}px`]
}

 </script>

 <style>
</style>
 