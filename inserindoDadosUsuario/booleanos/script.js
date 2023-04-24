let numtxt1 = document.querySelector('#num1txt')
let numtxt2 = document.querySelector('#num2txt')
let resExe1 = document.querySelector('#resExe01')

function calcularMedia(){
    let media = (numtxt1.value+numtxt2.value)/2
 if(media>5){
    resExe1.innerHTML = 'Aprovado'
 }else{
    resExe1.innerHTML = 'Reprovado'
 }

}