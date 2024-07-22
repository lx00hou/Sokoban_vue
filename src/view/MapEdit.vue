<template>
    <section class="content">
        <!-- 地图编辑区域 -->
        <div class="mapEditArea" v-for="row in rows">
            <div v-for="j in cols">
                <MapBlock />
            </div>
        </div>
        <!-- 选择地图组件 -->
        <section class="mapComponent">
            <Tile title="地板" :imgSrc="floor" @selTail="title => curSelTail = title" />
            <Tile  title="墙体" :imgSrc="wall"  @selTail="title => curSelTail = title" />

            <div class="other" @click="changeOther('keeperPlayer')" >
                <img :src="keeperPlayer" alt="">
            </div>
            <div class="other" @click="changeOther('cargo')" >
                <img :src="cargo" alt="">
            </div>
            <div class="other" @click="changeOther('cargoTarget')" >
                <img :src="cargoTarget" alt="">
            </div>
        </section>

        <section class="sel" v-if="curSelTail" >
            您当前选中了: {{ curSelTail }}
        </section>
    </section>
</template>
<script setup lang="ts">
import { provide, ref } from 'vue';
import floor from '../assets/floor.png';
import wall from '../assets/wall.png';
import keeperPlayer from '../assets/keeper.png';
import cargo from '../assets/cargo.png';
import cargoTarget from '../assets/cargoTarget.png'
import MapBlock from '../components/mapEditCom/mapBlock.vue';
import Tile from '../components/mapEditCom/Tile.vue'

// 设置行列数量
const rows = ref(10);
const cols = ref(10);
// 当前选中的地图组件
let curSelTail = ref("");
provide('getSelectTail',curSelTail)
// 选中其他组件
enum mapOther  {
    keeperPlayer  =  "玩家",
    cargo = "箱子",
    cargoTarget = "放置点"
}

const changeOther = (value:keyof typeof mapOther) => {
    curSelTail.value = mapOther[value]
}
</script>

<style scoped>
.content {
    position: relative;
    user-select: none;
}
.mapEditArea {
    display: flex;
}
.mapComponent {
    display: flex;
    margin-top: 30px;
}
.sel {
    margin-top: 20px;
    cursor: pointer;
}
.other {
    width: 80px;
    height: 80px;
    margin-right: 10px;
}
.other img {
    width: 100%;
}
</style>

