function tabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
tabuada(7); 
