let numtxt1 = document.querySelector('#num1txt')
let numtxt2 = document.querySelector('#num2txt')
let resExe2 = document.querySelector('#resExe02')

function calcularVencedor(){
    let ale = parseInt(Math.random()*2)
    
    if(numtxt1.value == numtxt2.value){
        resExe2.innerHTML = 'Empate'
    } else{
        if(ale == 1){
            if(numtxt1.value > numtxt2.value){
                resExe2.innerHTML = `Jogador 1 Maior, Vencedor`
            } else{
                resExe2.innerHTML = `Jogador 2 Maior, Vencedor`
            }
        } else{
            if(numtxt1.value < numtxt2.value){
                resExe2.innerHTML = `Jogador 1 Menor, Vencedor`
            } else{
                resExe2.innerHTML = `Jogador 2 Menor, Vencedor`
            }
        }
    }

    }
