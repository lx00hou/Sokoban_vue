<template>
    <div :style="position" class="player">
        <img  :src="keeper" >
    </div>
 </template>
 <script setup lang="ts">
 import keeper from '../assets/keeper.png';
 import { usePlayerStore } from '../store/player';

 let {player} = usePlayerStore();
 const STEP = 32; 
 let position = {
    "left":player.x * STEP +'px',
    "top":player.y * STEP +'px',
 }
//  step = 32
 </script>

<style scoped lang="less">
div {
    position: absolute;
    img {
        display:block;
    }
}
</style>
 