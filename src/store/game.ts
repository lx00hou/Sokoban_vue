import { defineStore } from "pinia";
import { reactive } from "vue";
import { useCargoStore  } from './cargos'


export const useGameStore = defineStore('game',() => {
    let { cargoPosition } = useCargoStore(); 
    let game:Record<string,boolean> = reactive({
        isWin:false
    })

    // 判断游戏是否结束
    function judgeGameIsWin(){
        game.isWin = cargoPosition.every(cargo => cargo.onTarget)
    }

    return {
        game,
        judgeGameIsWin
    }
})