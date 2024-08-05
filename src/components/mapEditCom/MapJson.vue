<template>
<main>
    Json 显示区域
    <textarea name="json"  cols="30" rows="10">
    {{ gameData }}
    </textarea>
</main>
</template>
<script setup lang="ts">
import { computed }  from 'vue';
import { useMapGameJson  } from '../../store/mapGameJson'
const {player,cargoPosition,cargoTargetPosition} = useMapGameJson();

 const rawMap = 
 {
    name:"关卡1",
    map:[
        [0,0,1,1,1,1,1,0],
        [1,1,1,2,2,2,1,0],
        [1,2,2,2,2,2,1,0],
        [1,1,1,2,2,2,1,0],
        [1,1,1,1,2,2,1,0],
        [1,2,1,2,2,2,1,1],
        [1,2,2,2,2,2,2,1],
        [1,2,2,2,2,2,2,1],
        [1,1,1,1,1,1,1,1],
    ]
}
const gameData = computed(() => (
    {
        player:player,
        cargos:cargoPosition,
        cargoTarget:cargoTargetPosition
    }
))



</script>

<style scoped>
main{
    position: absolute;
    top: 0;
    right: 45%;
    display: flex;
    flex-direction: column;
    /* width: 300px; */
    /* height: 500px; */
    /* border: 1px solid #cccccc; */
}

</style>

