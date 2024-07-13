<template>
    <div :style="setPosition" class="absolute" :x="player.x" :y="player.y" >
        <img :src="keeper" >
    </div>
</template>
<script setup lang="ts">
import { onMounted , onUnmounted , computed} from "vue";
import keeper from '../assets/keeper.png';
import { usePlayerStore } from '../store/player';


useMove();
let setPosition = usePosition(); 

/**
 * 监听键盘移动事件
 *@params {} 
 */

function useMove(){
    let {
        movePlayer
    } = usePlayerStore();
    onMounted(() => window.addEventListener('keyup', handleKeyUp))
    onUnmounted(() => window.removeEventListener('keyup', handleKeyUp));
    
    let handleKeyUp = (e:KeyboardEvent) => {
        movePlayer(e)
    }
}

/**
 * 利用缓存 赋值玩家位置
 *@params {} 
 *@return {left,top} 
 */
let {player} = usePlayerStore();
function usePosition(){
    const STEP = 32; 
    return computed(() => ({
        "left":player.x * STEP +'px',
        "top":player.y * STEP +'px',
    }));

}








 </script>

<style scoped lang="less">
img {
    display:block;
}
</style>
 