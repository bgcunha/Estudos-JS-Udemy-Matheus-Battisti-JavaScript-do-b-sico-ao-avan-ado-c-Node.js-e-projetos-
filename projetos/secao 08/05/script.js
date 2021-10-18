let pessoa = {
    "Nome": "Bruno",
    "Idade": 32,
    "Hobies": ["Series", "Academia","Assitir MMA"] 
}

console.log(pessoa.Nome);
console.log(pessoa.Idade);
console.log(pessoa.Hobies);

let frase = 'O rato roubou a roupa do rei de roma';

let arr = frase.split(' ');

arr.forEach(element => {
   console.log(element) ;
});
///////////////////////////////////////////////////
function CriarCachorro(raca, pata, nome){
    let cachorro = Object.create({}) ;
    cachorro.raca = raca;
    cachorro.pata = pata;
    cachorro.Nome = nome;

    return cachorro;    
}

let dog  = CriarCachorro('Vira Lata', 4, 'Rex');

console.log(dog);
////////////////////////////////////////////////////////////////

function Gato(nome)
{
    this.nome = nome;
}

Gato.prototype.Miar = function(){ console.log('Miauu')};

let gato = new Gato('SRD');
gato.Miar();

///////////////////////////////////////////////////////////

class Peixe{
    constructor(Nome, Cor, TipoDeAgua, UnidadeMedida)
    {
        this.Nome = Nome;
        this.Cor = Cor;
        this.TipoDeAgua = TipoDeAgua;
        this.UnidadeMedida = UnidadeMedida;
    }
}

Peixe.prototype.Olhos = 2;

let Nariz = Symbol();

Peixe.prototype[Nariz] = 1;

let nemo = new Peixe('Nemo', ['vermelho', 'Brnaco'], 3, 'Cm');

console.log('Olhos: '+ nemo.Olhos);
console.log('Nariz: '+ nemo[Nariz]);

