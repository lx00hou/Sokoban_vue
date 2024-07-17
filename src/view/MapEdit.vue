<template>
    <main>
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
        </section>

        <section class="sel" v-if="curSelTail" >
            您当前选中了: {{ curSelTail }}
        </section>
    </main>
</template>
<script setup lang="ts">
import floor from '../assets/floor.png';
import wall from '../assets/wall.png';
import MapBlock from '../components/mapEditCom/mapBlock.vue';
import Tile from '../components/mapEditCom/Tile.vue'
import { provide, ref } from 'vue';

// 设置行列数量
const rows = ref(10);
const cols = ref(10);
// 当前选中的地图组件
const curSelTail = ref("");
provide('getSelectTail',curSelTail)
</script>

<style scoped>
main {
    position: relative;
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
</style>

