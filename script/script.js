var valorNormal = document.getElementById('valorInteiro');
var valorDolar = 5.21;
var valorEuro = 5.66;
var valorLibra = 6.45;

function converter() {

    var valorConverter = Number(valorNormal.value);

    let valorConvertido = (valorConverter * valorDolar).toFixed(2)

    console.log(valorConvertido)
}