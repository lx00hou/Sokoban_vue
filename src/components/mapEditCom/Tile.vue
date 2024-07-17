<template>
    <div>
        <img :src="imgSrc" :alt="title" @click="handleClick(title)">
    </div>
</template>
<script setup lang="ts">
interface Prop {
    title:string,
    imgSrc:string
}
defineProps<Prop>();
const emit = defineEmits(['selTail']);
const handleClick = (title:string) => {
    emit('selTail',title)
}

</script>

<style scoped>
div {
    width: 80px;
    height: 80px;
    margin-right: 20px;
}
img {
    width: 100%;
    cursor: pointer;
}
</style>

