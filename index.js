let wins = 48
let loses = 7 
let resultCalcRank = calcRank(wins, loses)
let resultCheckLevel = checkLevel()




function calcRank (wins, loses){
    rank = wins - loses
    return rank
}


function checkLevel(rank){
    
    rank = resultCalcRank

    if (rank <=10){
        return "ferro"
    }
    else if(rank  >= 11 && rank <= 20){
        return "Bronze"
    }
    else if (rank  >= 21 && rank  <= 50 ){
        return "Prata"
    }
    else if (rank  >= 51 && rank  <= 80){
        return "Ouro"
    }
    else if (rank  >=81 && rank  <=90){
        return "Diamante"

    }
    else if (rank  >= 91 && rank  <= 100){
        return "Lendário"
    }
    else if (rank  >= 101){
        return "Imortal"
    }
}



console.log(`O Herói tem saldo de ${resultCalcRank} está no nível de ${resultCheckLevel}`)
