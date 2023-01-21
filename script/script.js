var valorNormal = document.getElementById('valorInteiro');
var moeda1 = document.getElementById('seletor-moeda1');
var moeda2 = document.getElementById('seletor-moeda2');
var result = document.getElementById('resultado')
var primeiroValor = document.getElementById('valorPrimeiro')
var displayResult = document.getElementById('valor-resultado')
var displayAlerta = document.getElementById('conversor-alerta')
var mensagAlerta = document.getElementById('mensagemAlerta')
var valorDolar_Real = 5.21;
var valorEuro_Real = 5.66;
var valorLibra_Real = 6.45;

var valorDolar_Euro = 0.92
var valorDolar_Libra = 0.81

var valorEuro_Libra = 0.88

function converter() {

    var valorConverter = Number(valorNormal.value);

    //Conversor real para dolar
    if (moeda1[0].selected && moeda2[1].selected){
        valorConvertido = (valorConverter*valorDolar_Real).toFixed(2);
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `R$ ${valorConverter} Real brasileiro é igual a:` 
        result.innerHTML = `<p>US$ ${valorConvertido} Dolar americano</p>`
        //console.log(`O valor em dolar é de ${valorConvertido}`)
    //Real para Euro
    } else if (moeda1[0].selected && moeda2[2].selected){
        valorConvertido = (valorConverter*valorEuro_Real).toFixed(2)
        //console.log(`O valor em euro é de ${valorConvertido}`)
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `R$ ${valorConverter} Real brasileiro é igual a:` 
        result.innerHTML = `<p>&euro; ${valorConvertido} Euros</p>`
    //Real para Libra
    } else if (moeda1[0].selected && moeda2[3].selected){
        valorConvertido = (valorConverter*valorLibra_Real).toFixed(2)
        //console.log(`O valor em libra é de ${valorConvertido}`)
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `R$ ${valorConverter} Real brasileiro é igual a:` 
        result.innerHTML = `<p>&pound; ${valorConvertido} libra esterlina</p>`

    //CONVERTER DOLAR

    } else if (moeda1[1].selected && moeda2[0].selected){
        valorConvertido = (valorConverter*valorDolar_Real).toFixed(2)
        //console.log(`O valor de Dolar para Real é de ${valorConvertido}`)
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `US$ ${valorConverter} Dolar é igual a:` 
        result.innerHTML = `<p>R$ ${valorConvertido} real brasileiro</p>`
    //Dolar pra Euro
    } else if (moeda1[1].selected && moeda2[2].selected) {
        valorConvertido = (valorConverter*valorDolar_Euro).toFixed(2)
        //console.log(`O valor de Dolar para Euro é de ${valorConvertido}`)
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `US$ ${valorConverter} Dolar é igual a:` 
        result.innerHTML = `<p>&euro; ${valorConvertido} Euros</p>`
    //Dolar para Libra
    } else if (moeda1[1].selected && moeda2[3].selected) {
        valorConvertido = (valorConverter*valorDolar_Libra).toFixed(2)
        //console.log(`O valor de Dolar para Libra é de ${valorConvertido}`)
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `US$ ${valorConverter} Dolar é igual a:` 
        result.innerHTML = `<p>&pound; ${valorConvertido} Libra esterlina</p>`

        // CONVERTER EURO
    } else if (moeda1[2].selected && moeda2[0].selected){
        valorConvertido = (valorConverter*valorEuro_Real).toFixed(2)
        //console.log(`O valor de Euro para Real é de ${valorConvertido}`)
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `&euro; ${valorConverter} Euro é igual a:` 
        result.innerHTML = `<p>R$ ${valorConvertido} Real brasileiro</p>`
    } else if (moeda1[2].selected && moeda2[1].selected) {
        valorConvertido = (valorConverter/valorDolar_Euro).toFixed(2)
        //console.log(`O valor de Euro para dolar é de ${valorConvertido}`)
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `&euro; ${valorConverter} Euro é igual a:` 
        result.innerHTML = `<p>US$ ${valorConvertido} Dolar americano</p>`
    } else if (moeda1[2].selected && moeda2[3].selected){
        valorConvertido = (valorConverter*valorEuro_Libra).toFixed(2)
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `&euro; ${valorConverter} Euro é igual a:` 
        result.innerHTML = `<p>&pound; ${valorConvertido} Libra esterlina</p>`
        //console.log(`O valor de Euro para libra é de ${valorConvertido}`)
    
    //CONVERTER LIBRA
    } else if (moeda1[3].selected && moeda2[0].selected){
        valorConvertido = (valorConverter*valorLibra_Real).toFixed(2)
        //console.log(`O valor de Libra para Real é de ${valorConvertido}`)
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `&pound; ${valorConverter} Libra esterlina é igual a:` 
        result.innerHTML = `<p>R$ ${valorConvertido} Real brasileiro</p>`
    } else if (moeda1[3].selected && moeda2[1].selected){
        valorConvertido = (valorConverter/valorDolar_Libra).toFixed(2)
        //console.log(`O valor de Libra para dolar é de ${valorConvertido}`)
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `&pound; ${valorConverter} Libra esterlina é igual a:` 
        result.innerHTML = `<p>US$ ${valorConvertido} Dolar americano</p>`
    } else if (moeda1[3].selected && moeda2[2].selected){
        valorConvertido = (valorConverter/valorEuro_Libra).toFixed(2)
        //console.log(`O valor de Libra para Euro é de ${valorConvertido}`)
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `&pound; ${valorConverter} Libra esterlina é igual a:` 
        result.innerHTML = `<p>&euro; ${valorConvertido} Euro</p>`
    } else {
        displayAlerta.style.display = 'block'
        mensagAlerta.innerHTML = '<p>Por favor, verifique o valor digitado ou as moedas selecionadas</p>'

    }

    /*let valorConvertido = (valorConverter * valorDolar).toFixed(2)

    console.log(valorConvertido)*/
}