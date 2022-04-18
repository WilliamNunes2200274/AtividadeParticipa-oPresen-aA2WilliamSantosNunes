
function Person(height, weight) {
    if (typeof(height) !== 'number' || isNaN(height))
        throw Error('height not a number');

    if (typeof(weight) !== 'number' || isNaN(weight))
        throw Error('weight not a number');

    this.height = height;
    this.weight = weight;
}

function Dietician(height, weight) {
    this.calculateImc = function() {
        return this.weight / Math.pow(this.height, 2);
    }
    Person.call(this, height, weight);
}

Dietician.prototype = Object.create(Person.prototype);
Dietician.prototype.constructor = Dietician;

function calculateImc() {
    var height = parseFloat(document.querySelector('#altura').value);
    var weight = parseFloat(document.querySelector('#peso').value);
    document.querySelector('#imc').innerHTML = new Dietician(height, weight).calculateImc();

}
let botaoCalcular = document.getElementById(btn_calcular);
function calculandoIMC(){
    let height = document.getElementById("peso").value;
    let weight = document.getElementById("altura").value/100;
    let imc = document.getElementById("resultado")
    if(altura !== "" && peso !==""){
        let imc = (peso / (altura*altura)).toFixed(2);
        let mensagem = "";
        if(imc < 18.5){
            mensagem = "Magreza!"
        }else if(imc >=18.5 < 25){
            mensagem = "Normal!"
        }else if(imc >=24.9 < 30){
            mensagem = "Sobrepeso"
        }else {
            mensagem = "Obesidade"
        }
        resultado.textContent = `Seu IMC é ${imc}! ${mensagem}`;      
    }else{
        resultado.textContent = "Preencha todos os campos!!!"
    }
}
btn_calcular.addEventListener('click', calcularIMC);
   
  
  