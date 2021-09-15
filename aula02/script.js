const Converter = () => {
    let valorElemento = document.getElementById('valor').value
    let valorEmDolar = parseFloat(valorElemento)
    let real = valorEmDolar * 5
    let bitcoin = real / 250000

    let elementoValorRealConvertido = document.getElementById('valorEmReal')
    elementoValorRealConvertido.innerHTML = `O resultado em Real é R$ ${real}`

    let elementoValorBitcoinConvertido = document.getElementById('valorEmBitcoin')
    elementoValorBitcoinConvertido.innerHTML = `O resultado em Bitcoin é ${bitcoin} BTC`
}