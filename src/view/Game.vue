<template>
    <main>
        <Map />
        <PlacePoint />
        <Player />
        <Cargos />
        <div v-if="game.isWin">
            游戏结束
        </div>
    </main>
</template>
<script setup lang="ts">
import Map from '../components/Map.vue';  // 地图组件
import PlacePoint from '../components/PlacePoint.vue';  // 箱子放置点
import Player from '../components/Player.vue';  // 玩家组件
import Cargos from '../components/Cargos.vue';   // 箱子组件

// 判断当前游戏是否结束
import { useGameStore } from '../store/game'
let { game } = useGameStore()

</script>

<style scoped>
main {
    position: relative;
}

</style>

