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
        <div :style="setPosition" class="show playerShow "
            v-show="player.x !== 0 || player.y !== 0"
        >
            <img :src="keeperPlayer" alt="">
        </div>

        <div class="show cargoShow" 
        :style="setCargoPosition(cargoItem)"
        v-for="cargoItem of cargoPosition"
        v-show="cargoPosition.length > 0"
        >
            <img :src="cargo" alt="">
        </div>

        <div class="show cargoTargetShow" 
        v-for="cargoTargetItem of cargoTargetPosition"
        :style="setCargoPosition(cargoTargetItem)"
        v-show="cargoTargetPosition.length > 0"  >
            <img :src="target" alt="">
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
            <div class="other" @click="changeOther('target')" >
                <img :src="target" alt="">
            </div>
        </section>

        <section class="sel" v-if="curSelTail" >
            您当前选中了: {{ curSelTail }}
        </section>
    </section>
</template>
<script setup lang="ts">
import { provide, ref ,computed ,reactive} from 'vue';
import floor from '../assets/floor.png';
import wall from '../assets/wall.png';
import keeperPlayer from '../assets/keeper.png';
import cargo from '../assets/cargo.png';
import target from '../assets/target.png'
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
    target = "放置点"
}
const changeOther = (value:keyof typeof mapOther) => {
    curSelTail.value = mapOther[value]
}

type positionType = {
    x:number,
    y:number
}
let player:positionType = reactive({
    x:0,
    y:0
})
let cargoPosition:positionType[] = reactive([])
let cargoTargetPosition:positionType[] = reactive([])

const STEP = 50; 
const getPosition = (position:{
    x:number,
    y:number
}) => {
    if(curSelTail.value === '玩家'){
        player.x = position.x;
        player.y = position.y;
    }else if(curSelTail.value === '箱子'){
        cargoPosition.push({
            x:position.x,
            y:position.y
        })
    }else if(curSelTail.value === '放置点'){
        cargoTargetPosition.push({
            x:position.x,
            y:position.y
        })
    }
}
const setPosition = computed(() => ({
    "left":player.x * STEP +'px',
    "top":player.y * STEP +'px',
}));;
const setCargoPosition = (position:positionType) => ({
    "left":position.x * STEP +'px',
    "top":position.y * STEP +'px',
})
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

