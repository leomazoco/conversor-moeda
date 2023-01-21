var valorNormal = document.getElementById('valorInteiro');
var moeda1 = document.getElementById('seletor-moeda1');
var moeda2 = document.getElementById('seletor-moeda2');
var result = document.getElementById('resultado')
var primeiroValor = document.getElementById('valorPrimeiro')
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
        primeiroValor.innerHTML = `R$ ${valorConverter} é igual a:` 
        result.innerHTML += `<p>US$ ${valorConvertido}</p>`
        //console.log(`O valor em dolar é de ${valorConvertido}`)
    //Real para Euro
    } else if (moeda1[0].selected && moeda2[2].selected){
        valorConvertido = (valorConverter*valorEuro_Real).toFixed(2)
        console.log(`O valor em euro é de ${valorConvertido}`)
    //Real para Libra
    } else if (moeda1[0].selected && moeda2[3].selected){
        valorConvertido = (valorConverter*valorLibra_Real).toFixed(2)
        console.log(`O valor em libra é de ${valorConvertido}`)

    //CONVERTER DOLAR

    } else if (moeda1[1].selected && moeda2[0].selected){
        valorConvertido = (valorConverter/valorDolar).toFixed(2)
        console.log(`O valor de Dolar para Real é de ${valorConvertido}`)
    //Dolar pra Euro
    } else if (moeda1[1].selected && moeda2[2].selected) {
        valorConvertido = (valorConverter*valorDolar_Euro).toFixed(2)
        console.log(`O valor de Dolar para Euro é de ${valorConvertido}`)
    //Dolar para Libra
    } else if (moeda1[1].selected && moeda2[3].selected) {
        valorConvertido = (valorConverter*valorDolar_Libra).toFixed(2)
        console.log(`O valor de Dolar para Libra é de ${valorConvertido}`)

        // CONVERTER EURO
    } else if (moeda1[2].selected && moeda2[0].selected){
        valorConvertido = (valorConverter*valorEuro_Real).toFixed(2)
        console.log(`O valor de Euro para Real é de ${valorConvertido}`)
    } else if (moeda1[2].selected && moeda2[1].selected) {
        valorConvertido = (valorConverter/valorDolar_Euro).toFixed(2)
        console.log(`O valor de Euro para dolar é de ${valorConvertido}`)
    } else if (moeda1[2].selected && moeda2[3].selected){
        valorConvertido = (valorConverter*valorEuro_Libra).toFixed(2)
        console.log(`O valor de Euro para libra é de ${valorConvertido}`)
    
    //CONVERTER LIBRA
    } else if (moeda1[3].selected && moeda2[0].selected){
        valorConvertido = (valorConverter*valorLibra_Real).toFixed(2)
        console.log(`O valor de Libra para Real é de ${valorConvertido}`)
    } else if (moeda1[3].selected && moeda2[1].selected){
        valorConvertido = (valorConverter/valorDolar_Libra).toFixed(2)
        console.log(`O valor de Libra para dolar é de ${valorConvertido}`)
    } else if (moeda1[3].selected && moeda2[2].selected){
        valorConvertido = (valorConverter/valorEuro_Libra).toFixed(2)
        console.log(`O valor de Libra para Euro é de ${valorConvertido}`)
    } else {
        console.log('Confira o valor declarado ou a moeda')
    }

    /*let valorConvertido = (valorConverter * valorDolar).toFixed(2)

    console.log(valorConvertido)*/
}