<template>
    <div
        @mousedown="handleDown" 
        @mousemove="handleMove"
        @mouseup="handleUp"
        @click="handleSetTail"
    >
        <div v-if="typeTail == 0"  />
        <div v-else-if="typeTail === 1 " >
            <img :src="Wall" alt="">
        </div>
        <div v-else-if="typeTail === 2 " >
            <img :src="Floor" alt="">
        </div>
    </div>

</template>
<script setup lang="ts">
import { inject,ref,Ref } from 'vue';
import { useCollectStore } from '../../store/collectMapBlock';
import Wall from '../../assets/wall.png';
import Floor from '../../assets/floor.png';

const tail:Ref<string> = inject('getSelectTail')!   // 获取当前选中的tile
enum TileEnum {
   EMPTY = 0,
   WALL,
   FLOOR 
}
let typeTail:Ref<number> = ref(0);
const handleSetTail = () => {
    typeTail.value = tail.value === '墙体' ? 
                     TileEnum.WALL :  tail.value === '地板' ?
                     TileEnum.FLOOR : TileEnum.EMPTY;
}

// 鼠标移动 给地图编辑器 赋值 tile
let {  start , move , end } = useCollectStore();
const handleMove = () => {
    move(handleSetTail)
}
const handleDown = () => {
    start();
    // document.addEventListener('mouseup',handleUp)
}
const handleUp = () => {
    end();
    // document.removeEventListener('mouseup',handleUp)
}

</script>

<style scoped>
div{
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
}
img{
    width: 50px;
    height: 50px;
    pointer-events: none;
    user-select: none;

}

</style>

