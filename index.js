let saldoDeRank = rank(88, 12)
let elo;

if(saldoDeRank <= 10){
    elo = "ferro"
}else if(saldoDeRank >= 11 && saldoDeRank <= 20 ){
    elo = "bronze"
}else if(saldoDeRank >= 21 && saldoDeRank <= 50 ){
    elo = "prata"
}else if(saldoDeRank >= 51 && saldoDeRank <= 80 ){
    elo = "Ouro"
}else if(saldoDeRank >= 81 && saldoDeRank <= 90 ){
    elo = "Diamante"
}else if(saldoDeRank >= 91 && saldoDeRank <= 100 ){
    elo = "Lendario"
}else { 
    elo = "Imortal"
}

function rank(vitorias, derrotas){
    let somatorio = vitorias - derrotas
    return somatorio
}

console.log("O heroi tem o saldo de " + saldoDeRank + " vitorias, e esta no elo " + elo +"." )
