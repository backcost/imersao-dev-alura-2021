const adicionarFilme = () => {
    let filmeFavorito = document.getElementById("filme").value
    if (filmeFavorito.endsWith(".jpg")) {
        listaFilmes.push(filmeFavorito)
        listarFilmesNaTela(filmeFavorito)
    } else {
        console.error('Endereço de filme inválido')
    }
    document.getElementById("filme").value = ""
}

const removerFilme = () => {
    let filmeFavorito = document.getElementById("filme").value
    let temOFilme = listaFilmes.indexOf(filmeFavorito)
    if (temOFilme !== -1) {
        listaFilmes.splice(temOFilme, 1)
        listarFilmesNaTela(filmeFavorito)
    } else {
        console.error('Filme não encontrado')
    }
    document.getElementById('filme').value = ''
}

const listarFilmesNaTela = (filme) => {
    let elementoListaFilmes = document.getElementById('listaFilmes')
    elementoListaFilmes.innerHTML = ''

    for (let el of listaFilmes) {
        elementoListaFilmes.innerHTML += `<img src = ${el}>`
    }
}

let listaFilmes = []