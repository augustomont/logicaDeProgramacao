let numtxt1 = document.querySelector('#num1txt')
let numtxt2 = document.querySelector('#num2txt')
function calcular(){
    let num1 = numtxt1.value
    let num2 = numtxt2.value
    let resExe1 = document.querySelector('#resExe01')
 if((num1+num2)/2>5){
    resExe1.innerHTML = 'Aprovado'
 }else{
    resExe1.innerHTML = 'Reprovado'
 }

}