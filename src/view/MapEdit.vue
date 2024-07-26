<template>
    <section class="content">
        <!-- 地图编辑区域 -->
        <div class="mapEditArea" v-for="row in rows">
            <div v-for="j in cols">
                <MapBlock :x="j - 1" :y="row - 1" @curPosition = "getPosition"/>
            </div>
        </div>
        <!--
            地图渲染其他组件 
         -->
        <div :style="setPosition" class="show playerShow " v-if="playerIsShow" >
            <img :src="keeperPlayer" alt="">
        </div>

        <div class="show cargoShow"  v-if="cargoIsShow" >
            <img :src="cargo" alt="">
        </div>

        <div class="show cargoTargetShow"  v-if="cargoTargetIsShow" >
            <img :src="cargoTarget" alt="">
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
import { provide, ref,Ref ,computed ,reactive} from 'vue';
import floor from '../assets/floor.png';
import wall from '../assets/wall.png';
import keeperPlayer from '../assets/keeper.png';
import cargo from '../assets/cargo.png';
import cargoTarget from '../assets/cargoTarget.png'
import MapBlock from '../components/mapEditCom/MapBlock.vue';
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

// 获取当前点击位置
const playerIsShow:Ref<Boolean> = ref(false);
const cargoIsShow:Ref<Boolean> = ref(false);
const cargoTargetIsShow:Ref<Boolean> = ref(false);
const player = reactive({
    x:0,
    y:0
})

const getPosition = (position:{
    x:number,
    y:number
}) => {
    player.x = position.x;
    player.y = position.y;
    // console.log('获取位置',position);
    // console.log('当前选中的组件',curSelTail.value);
    if(curSelTail.value === '玩家'){
        playerIsShow.value = true;
    }else if(curSelTail.value === '箱子'){
        cargoIsShow.value = true;
    }else if(curSelTail.value === '放置点'){
        cargoTargetIsShow.value = true;
    }
}
const setPosition = usePosition();
function usePosition(){
    const STEP = 50; 
    return computed(() => ({
        "left":player.x * STEP +'px',
        "top":player.y * STEP +'px',
    }));

}
</script>

<style scoped lang="less">

.content {
    position: relative;
    user-select: none;
    .mapEditArea {
        display: flex;
    }
    .mapComponent {
        display: flex;
        margin-top: 30px;
        .other {
            width: 80px;
            height: 80px;
            margin-right: 10px;
            img {
                width: 100%;
            }
        }
    }


    .show  {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        position: absolute;
        img {
            width: 100%;
        }
    }
    .playerShow,.cargoShow,.cargoTargetShow {
        margin-right: 0;
    }

    .sel {
        margin-top: 20px;
        cursor: pointer;
    }

}






</style>

