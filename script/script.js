var valorNormal = document.getElementById('valorInteiro');
var moeda1 = document.getElementById('seletor-moeda1');
var moeda2 = document.getElementById('seletor-moeda2');
var result = document.getElementById('resultado')
var primeiroValor = document.getElementById('valorPrimeiro')
var displayResult = document.getElementById('valor-resultado')
var displayAlerta = document.getElementById('conversor-alerta')
var mensagAlerta = document.getElementById('mensagemAlerta')
var valorDolar_Real = 5.2078;
var valorEuro_Real = 5.6648;
var valorLibra_Real = 6.4519;

var valorDolar_Euro = 0.9194
var valorDolar_Libra = 0.8072

var valorEuro_Libra = 0.8780

function converter() {

    var valorConverter = Number(valorNormal.value);

    //Conversor real para dolar
    if (moeda1[0].selected && moeda2[1].selected){
        valorConvertido = (valorConverter/valorDolar_Real);
        let moedaLocal = valorConverter.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
        var moedaEstrangeira = valorConvertido.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        displayAlerta.style.display = 'none'
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `${moedaLocal} Real brasileiro é igual a:` 
        result.innerHTML = `<p>${moedaEstrangeira} Dolar americano</p>`
        //console.log(`O valor em dolar é de ${valorConvertido}`)
    //Real para Euro
    } else if (moeda1[0].selected && moeda2[2].selected){
        valorConvertido = (valorConverter/valorEuro_Real);
        let moedaLocal = valorConverter.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
        var moedaEstrangeira = valorConvertido.toLocaleString('en-DE', {style: 'currency', currency: 'EUR'})
        //console.log(`O valor em euro é de ${valorConvertido}`)
        displayAlerta.style.display = 'none'
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `${moedaLocal} Real brasileiro é igual a:` 
        result.innerHTML = `<p>${moedaEstrangeira} Euros</p>`
    //Real para Libra
    } else if (moeda1[0].selected && moeda2[3].selected){
        valorConvertido = (valorConverter/valorLibra_Real);
        let moedaLocal = valorConverter.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
        let moedaEstrangeira = valorConvertido.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'})
        //console.log(`O valor em libra é de ${valorConvertido}`)
        displayAlerta.style.display = 'none'
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `${moedaLocal} Real brasileiro é igual a:` 
        result.innerHTML = `<p>${moedaEstrangeira} libra esterlina</p>`

    //CONVERTER DOLAR

    } else if (moeda1[1].selected && moeda2[0].selected){
        valorConvertido = (valorConverter*valorDolar_Real)
        let moedaLocal = valorConverter.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
        let moedaEstrangeira = valorConvertido.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        //console.log(`O valor de Dolar para Real é de ${valorConvertido}`)
        displayAlerta.style.display = 'none'
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `${moedaLocal} Dolar é igual a:` 
        result.innerHTML = `<p>${moedaEstrangeira} real brasileiro</p>`
    //Dolar pra Euro
    } else if (moeda1[1].selected && moeda2[2].selected) {
        valorConvertido = (valorConverter*valorDolar_Euro)
        let moedaLocal = valorConverter.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        let moedaEstrangeira = valorConvertido.toLocaleString('en-DE', {style: 'currency', currency: 'EUR'})
        //console.log(`O valor de Dolar para Euro é de ${valorConvertido}`)
        displayAlerta.style.display = 'none'
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `${moedaLocal} Dolar é igual a:` 
        result.innerHTML = `<p>${moedaEstrangeira} Euros</p>`
    //Dolar para Libra
    } else if (moeda1[1].selected && moeda2[3].selected) {
        valorConvertido = (valorConverter*valorDolar_Libra);
        let moedaLocal = valorConverter.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        let moedaEstrangeira = valorConvertido.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'})
        //console.log(`O valor de Dolar para Libra é de ${valorConvertido}`)
        displayAlerta.style.display = 'none'
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `${moedaLocal} Dolar é igual a:` 
        result.innerHTML = `<p>${moedaEstrangeira} Libra esterlina</p>`

        // CONVERTER EURO
    } else if (moeda1[2].selected && moeda2[0].selected){
        valorConvertido = (valorConverter*valorEuro_Real);
        let moedaLocal = valorConverter.toLocaleString('en-DE', {style: 'currency', currency: 'EUR'})
        let moedaEstrangeira = valorConvertido.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        //console.log(`O valor de Euro para Real é de ${valorConvertido}`)
        displayAlerta.style.display = 'none'
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `${moedaLocal} Euro é igual a:` 
        result.innerHTML = `<p>${moedaEstrangeira} Real brasileiro</p>`
    } else if (moeda1[2].selected && moeda2[1].selected) {
        valorConvertido = (valorConverter/valorDolar_Euro);
        let moedaLocal = valorConverter.toLocaleString('en-DE', {style: 'currency', currency: 'EUR'})
        let moedaEstrangeira = valorConvertido.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
        //console.log(`O valor de Euro para dolar é de ${valorConvertido}`)
        displayAlerta.style.display = 'none'
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `${moedaLocal} Euro é igual a:` 
        result.innerHTML = `<p>${moedaEstrangeira} Dolar americano</p>`
    } else if (moeda1[2].selected && moeda2[3].selected){
        valorConvertido = (valorConverter*valorEuro_Libra);
        let moedaLocal = valorConverter.toLocaleString('en-DE', {style: 'currency', currency: 'EUR'});
        let moedaEstrangeira = valorConvertido.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'})
        displayAlerta.style.display = 'none'
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `${moedaLocal} Euro é igual a:` 
        result.innerHTML = `<p>${moedaEstrangeira} Libra esterlina</p>`
        //console.log(`O valor de Euro para libra é de ${valorConvertido}`)
    
    //CONVERTER LIBRA
    } else if (moeda1[3].selected && moeda2[0].selected){
        valorConvertido = (valorConverter*valorLibra_Real);
        let moedaLocal = valorConverter.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'})
        let moedaEstrangeira = valorConvertido.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        //console.log(`O valor de Libra para Real é de ${valorConvertido}`)
        displayAlerta.style.display = 'none'
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `${moedaLocal} Libra esterlina é igual a:` 
        result.innerHTML = `<p>${moedaEstrangeira} Real brasileiro</p>`
    } else if (moeda1[3].selected && moeda2[1].selected){
        valorConvertido = (valorConverter/valorDolar_Libra)
        let moedaLocal = valorConverter.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'})
        let moedaEstrangeira = valorConvertido.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
        displayAlerta.style.display = 'none'
        //console.log(`O valor de Libra para dolar é de ${valorConvertido}`)
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `${moedaLocal} Libra esterlina é igual a:` 
        result.innerHTML = `<p>${moedaEstrangeira} Dolar americano</p>`
    } else if (moeda1[3].selected && moeda2[2].selected){
        valorConvertido = (valorConverter/valorEuro_Libra)
        let moedaLocal = valorConverter.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'})
        let moedaEstrangeira = valorConvertido.toLocaleString('en-DE', {style: 'currency', currency: 'EUR'})
        displayAlerta.style.display = 'none'
        //console.log(`O valor de Libra para Euro é de ${valorConvertido}`)
        displayResult.style.display = 'block'
        primeiroValor.innerHTML = `${moedaLocal} Libra esterlina é igual a:` 
        result.innerHTML = `<p>${moedaEstrangeira} Euro</p>`
    } else {
        displayAlerta.style.display = 'block'
        displayResult.style.display = 'none'
        mensagAlerta.innerHTML = '<p>Por favor, verifique o valor digitado ou as moedas selecionadas</p>'

    }

    /*let valorConvertido = (valorConverter * valorDolar).toFixed(2)

    console.log(valorConvertido)*/
}