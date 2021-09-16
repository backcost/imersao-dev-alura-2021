const acharMedia = () => {
    const media = (n1, n2, n3, n4) => 
    ((n1 + n2 + n3 + n4) / 4).toFixed(1)

    const aprovado = (media) => {
        if (media >= 7) {
            return 'aprovado'
        }
        else if (media < 4) {
            return 'reprovado'
        }
        return 'de recuperação'
    }
    
    let nota1 = parseFloat(document.getElementById('nota1').value)
    let nota2 = parseFloat(document.getElementById('nota2').value)
    let nota3 = parseFloat(document.getElementById('nota3').value)
    let nota4 = parseFloat(document.getElementById('nota4').value)

    let elementoMedia = document.getElementById('media')
    elementoMedia.innerHTML = `A média foi ${media(nota1, nota2, nota3, nota4)}`

    let elementoSituacao = document.getElementById('situacao')
    elementoSituacao.innerHTML = `O aluno está ${aprovado(media(nota1, nota2, nota3, nota4))}!`
}
