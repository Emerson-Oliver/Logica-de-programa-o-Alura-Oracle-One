function calcularIMC(altura, peso) {    
    let imc = peso / (altura * altura);    
    return imc.toFixed(2);
}

let altura = 1.69; 
let peso = 66; 

let meuIMC = calcularIMC(altura, peso);
console.log("Meu IMC é:", meuIMC);
