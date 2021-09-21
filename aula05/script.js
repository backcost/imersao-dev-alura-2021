const adicionarFilme = () => {
    let urlFilme = document.getElementById("filme").value
    let nomeFilme = document.getElementById("filme__nome").value

    if (urlFilme.endsWith(".jpg")) {
        listaFilmes.push([nomeFilme, urlFilme])
        listarFilmesNaTela(urlFilme, nomeFilme)
    } else {
        console.error('Endereço de filme inválido')
    }
    document.getElementById("filme").value = ""
    document.getElementById("filme__nome").value = ""
}

const removerFilme = () => {
    let urlFilme = document.getElementById("filme").value
    let nomeFilme = document.getElementById("filme__nome").value

    let temOFilme = -1
    for (let i = 0; i < listaFilmes.length; i++) {
        if (listaFilmes[i][1] === urlFilme || listaFilmes[i][0] === nomeFilme) {
            temOFilme = i
            break
        }
    }

    if (temOFilme !== -1) {
        listaFilmes.splice(temOFilme, 1)
        listarFilmesNaTela(urlFilme)
    } else {
        console.error('Filme não encontrado')
    }
    document.getElementById('filme').value = ''
}

const listarFilmesNaTela = (filme, titulo) => {
    let elementoListaFilmes = document.getElementById('listaFilmes')
    elementoListaFilmes.innerHTML = ''

    for (let el of listaFilmes) {
        elementoListaFilmes.innerHTML += `<img src = ${el[1]}>`
    }
    console.log(listaFilmes)
}

let listaFilmes = []