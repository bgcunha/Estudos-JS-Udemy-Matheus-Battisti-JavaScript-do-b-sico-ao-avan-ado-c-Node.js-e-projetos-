let Carro = {
    Cor:'Preto',
    Motor:'2.0',
    Portas: 4,
    Rodas: '14"'
}
console.log(Carro);


let Adcionais = {
    Ar: true,
    TetoSolar: true,
    CameraDeRe: false
}

Object.assign(Carro, Adcionais);

console.log(Carro);

console.log(Object.keys(Carro));

