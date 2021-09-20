function chutar() {
    let elementoResultado = document.getElementById('resultado')
    let chute = parseInt(document.getElementById('valor').value)

    if (chute === numeroSecreto) {
        i = 0
        elementoResultado.innerHTML = "Você acertou!"
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10"
    } else {
        i++
        if (chute > numeroSecreto) {
            elementoResultado.innerHTML = `Errou, o número é menor que ${chute}!`
        } else {
            elementoResultado.innerHTML = `Errou, o número é maior que ${chute}!`
        } 
    }
    if (i === 3) {
        i = 0
        elementoResultado.innerHTML = `Você não acertou! O número era o ${numeroSecreto}!`
    }
}

let i = 0
let numeroSecreto = parseInt(Math.random() * 11)
