<template>
    <main>
        <!-- 地图编辑区域 -->
        <div class="mapEditArea" v-for="row in 10">
            <div v-for="j in 10">
                <MapBlock />
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import MapBlock from '../components/mapEditCom/mapBlock.vue'


</script>

<style scoped>
main {
    position: relative;
}
.mapEditArea {
    display: flex;
}

</style>

