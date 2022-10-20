document.addEventListener('DOMContentLoaded', () => {
const numero1 = document.getElementById('n1');
const numero2 = document.getElementById('n2');
const resultado = document.getElementById('resultado');
const button_soma = document.getElementById('somar');
const button_subtracao = document.getElementById('subtrair');
const button_multiplicacao = document.getElementById('multiplicar');
const button_divisao = document.getElementById('dividir');

function soma(){
    const total = parseInt(numero1.value) + parseInt(numero2.value);
    resultado.innerText = `Resultado: ${total}`;
}

function subtracao(){
        const total = parseInt(numero1.value) - parseInt(numero2.value);
        resultado.innerText = `Resultado: ${total}`;
}

function multiplicacao(){
    const total = parseInt(numero1.value) * parseInt(numero2.value);
    resultado.innerText = `Resultado: ${total}`;
}

function divisao(){
        const total = parseInt(numero1.value) / parseInt(numero2.value);
        resultado.innerText = `Resultado: ${total}`;
}

button_soma.addEventListener('click', soma);
button_subtracao.addEventListener('click', subtracao);
button_multiplicacao.addEventListener('click', multiplicacao);
button_divisao.addEventListener('click', divisao);
});
