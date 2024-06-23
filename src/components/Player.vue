<template>
    <div :style="position" class="player">
        <img :src="keeper" >
    </div>
</template>
<script setup lang="ts">
import { onMounted , onUnmounted , computed} from "vue";
import keeper from '../assets/keeper.png';
import { usePlayerStore } from '../store/player';


useMove();
let position = usePosition(); 

/**
 * 监听键盘移动事件
 *@params {} 
 */


function useMove(){
    let {
        movePlayerToLeft,
        movePlayerToRight,
        movePlayerToUp,
        movePlayerToDown
    } = usePlayerStore();
    onMounted(() => window.addEventListener('keyup', handleKeyUp))
    onUnmounted(() => window.removeEventListener('keyup', handleKeyUp));
    
    let handleKeyUp = (e:KeyboardEvent) => {
        switch (e.code) {
            case 'ArrowLeft':
                movePlayerToLeft();
                break;
            case 'ArrowRight':
                movePlayerToRight();
                break;
            case 'ArrowUp':
                movePlayerToUp();
                break;
            case 'ArrowDown':
                movePlayerToDown();
                break;
        
            default:
                break;
        }
    }
}

/**
 * 利用缓存 赋值玩家位置
 *@params {} 
 *@return {left,top} 
 */

function usePosition(){
    let {
        player,
    } = usePlayerStore();
    const STEP = 32; 
    return computed(() => ({
        "left":player.x * STEP +'px',
        "top":player.y * STEP +'px',
    }));

}








 </script>

<style scoped lang="less">
div {
    position: absolute;
    img {
        display:block;
    }
}
</style>
 