function calcularAreaEPerimetroCircular(raio) {
    const PI = 3.14;
    
    let area = PI * raio * raio;    
    let perimetro = 2 * PI * raio;    
    
    console.log("Área da sala circular: " + area + " metros quadrados");
    console.log("Perímetro da sala circular: " + perimetro + " metros");
}
calcularAreaEPerimetroCircular(4);