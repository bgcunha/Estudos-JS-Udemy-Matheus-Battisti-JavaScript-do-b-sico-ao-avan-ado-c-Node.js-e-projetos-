let numeros = [1,2,3,4,5,6,7,8,9,10];

function EhParEhImpar(numerosin) {   

    for (let index = 0; index < numerosin.length-1; index++) {
        let element = numerosin[index];    

        if(element % 2 == 0)
            console.log(element + ' é par');
        else
            console.log(`${element} é impar`);    
    };
};

EhParEhImpar(numeros);

let numerosInvertidos = numeros.reverse();

EhParEhImpar(numerosInvertidos);

//remove no final
numeros.pop();
console.log(numeros);

//insere no final
numeros.push(11);
console.log(numeros);

//remove no inicio
numeros.shift();
console.log(numeros);

//insere no inicio
numeros.unshift(12)
console.log(numeros);

console.log(numeros.slice(0,2));
console.log(numeros.slice(8));
console.log(numeros.slice(-3));

console.log(numeros.includes(100));
console.log(numeros.includes(12));






