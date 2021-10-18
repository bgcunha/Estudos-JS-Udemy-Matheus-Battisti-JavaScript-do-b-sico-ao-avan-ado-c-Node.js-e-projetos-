let NumeroMatricula = '236';

console.log(NumeroMatricula.padStart(10,'0'));

console.log(NumeroMatricula.padStart(6,'X'));

let list = [1,2,3,4,5,6,7,8,9,10,11,12,13];

function imprimir(... param) {

    param.forEach(element => {
        console.log(element);
    });
    
}

const [num1, num2, num3] = list;

console.log(num1+num2*num3);

imprimir(list);

let obj ={
    roda: 13,
    nome: 'carro'
}

const  {roda: vroda, nome: vnome} = obj;

console.log(vnome+vroda);