function calculaPontos(time) {
    return time.vitorias * 3 + time.empates
}

function adicionarVitoria(i) {
    let time = equipes[i]
    time.vitorias++
    time.pontos = calculaPontos(time)
    exibeEquipesNaTela(equipes)
}
  
function adicionarEmpate(i) {
    let time = equipes[i]
    time.empates++
    time.pontos = calculaPontos(time)
    exibeEquipesNaTela(equipes)
}
  
function adicionarDerrota(i) {
    let time = equipes[i]
    time.derrotas++
    exibeEquipesNaTela(equipes)
}

function zerar() {
    for (let i = 0; i < equipes.length; i++) {
        let time = equipes[i]
        time.vitorias = 0
        time.empates = 0
        time.derrotas = 0
        time.pontos = calculaPontos(time)
    }
    exibeEquipesNaTela(equipes)
}

function exibeEquipesNaTela(equipes) {
    let elemento = ""
    for (let i = 0; i < equipes.length; i++) {
        elemento += 
        `<tr><td>${equipes[i].nome}</td>
        <td>${equipes[i].vitorias}</td>
        <td>${equipes[i].empates}</td>
        <td>${equipes[i].derrotas}</td>
        <td>${equipes[i].pontos}</td>
        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td></tr>`
    }
    let tabelaEquipes = document.getElementById("tabelaEquipes")
    tabelaEquipes.innerHTML = elemento
}

function adicionarTime() {
    let nomeTime = document.getElementById('time__nome').value
    if (nomeTime === '') {
        console.error('Nome não digitado')
    } else {
        let novoTime = { nome: nomeTime, vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
        equipes.push(novoTime)
        exibeEquipesNaTela(equipes)
    }
}


let flamengo = { nome: "Flamengo", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 }
let vasco = { nome: "Vasco", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 }
let fluminense = { nome: "Fluminense", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 }

let equipes = [flamengo, vasco, fluminense]

flamengo.pontos = calculaPontos(flamengo)
vasco.pontos = calculaPontos(vasco)
fluminense.pontos = calculaPontos(fluminense)

exibeEquipesNaTela(equipes)
