function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

let numero = 8;
let fatorial = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é: ${fatorial}`);
