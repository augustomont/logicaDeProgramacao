function avaliar(){
    let p1 = document.querySelector('#p1txt')
    let p2 = document.querySelector('#p2txt')
    let media = (parseFloat(p1.value) + parseFloat(p2.value)) / 2
    let res = document.querySelector('#resultado')

    if(p1.value == 0 || p2.value == 0 || media<5){
        res.innerHTML = `REPROVADO! <br>
        Sua media é ${media}`
    } else {
        res.innerHTML = `APROVADO! <br>
        Sua media é ${media}`
    }
}