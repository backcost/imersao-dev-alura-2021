function calculaPontos(jogador) {
    return jogador.vitorias * 3 + jogador.empates
}

function adicionarVitoria(i) {
    let jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}
  
function adicionarEmpate(i) {
    let jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}
  
function adicionarDerrota(i) {
    let jogador = jogadores[i]
    jogador.derrotas++
    exibeJogadoresNaTela(jogadores)
}

function zerar() {
    for (let i = 0; i < jogadores.length; i++) {
        let jogador = jogadores[i]
        jogador.vitorias = 0
        jogador.empates = 0
        jogador.derrotas = 0
        jogador.pontos = calculaPontos(jogador)
    }
    exibeJogadoresNaTela(jogadores)
}

function exibeJogadoresNaTela(jogadores) {
    let elemento = ""
    for (let i = 0; i < jogadores.length; i++) {
        elemento += 
        `<tr><td>${jogadores[i].nome}</td>
        <td>${jogadores[i].vitorias}</td>
        <td>${jogadores[i].empates}</td>
        <td>${jogadores[i].derrotas}</td>
        <td>${jogadores[i].pontos}</td>
        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td></tr>`
    }
    let tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento
}

function adicionarJogador() {
    let nomeJogador = document.getElementById('jogador__nome').value
    if (nomeJogador === '') {
        console.error('Nome não digitado')
    } else {
        let novoJogador = { nome: nomeJogador, vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
        jogadores.push(novoJogador)
        exibeJogadoresNaTela(jogadores)
    }
}


let rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 }
let paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 }
let gui = { nome: "Gui", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 }

let jogadores = [rafa, paulo, gui]

rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)
gui.pontos = calculaPontos(gui)

exibeJogadoresNaTela(jogadores)
