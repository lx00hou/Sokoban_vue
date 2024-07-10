<template>
    <main>
        <template v-if="!game.isWin">
            <Map />
            <PlacePoint />
            <Player />
            <Cargos />
        </template>
        <div v-else>
            游戏结束
        </div>
    </main>
</template>
<script setup lang="ts">
import Map from './Map.vue';  // 地图组件
import PlacePoint from './PlacePoint.vue';  // 箱子放置点
import Player from './Player.vue';  // 玩家组件
import Cargos from './Cargos.vue';   // 箱子组件

// 判断当前游戏是否结束
import { useGameStore } from '../store/game'
let { game } = useGameStore()

</script>

<style scoped>
main {
    position: relative;
}

</style>

