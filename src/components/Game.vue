<template>
    <main>
        <Map />
        <Player />
        <Cargos />
    </main>
</template>
<script setup lang="ts">
import Map from './Map.vue';  // 地图
import Player from './Player.vue';  // 玩家  
import Cargos from './Cargos.vue';
</script>

<style scoped>
main {
    position: relative;
    
}

</style>

