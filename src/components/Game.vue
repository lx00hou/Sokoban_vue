<template>
    <main>
        <Map />
        <Player />
        <Cargos />
    </main>
</template>
<script setup lang="ts">
import Map from './Map.vue';  // 地图组件
import Player from './Player.vue';  // 玩家组件
import Cargos from './Cargos.vue';   // 箱子组件
</script>

<style scoped>
main {
    position: relative;
}

</style>

