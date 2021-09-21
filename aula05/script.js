const adicionarFilme = () => {
    let filmeFavorito = document.getElementById("filme").value
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito)
    } else {
        console.error('Endereço de filme inválido')
    }
    document.getElementById('filme').value = ''
    console.log(listaFilmes)
}

const listarFilmesNaTela = (filme) => {
    let elementoListaFilmes = document.getElementById('listaFilmes')
    elementoListaFilmes.innerHTML = ''
    listaFilmes.push(filme)
    
    for (let el of listaFilmes) {
        elementoListaFilmes.innerHTML += `<img src = ${el}>`
    }
}

let listaFilmes = []