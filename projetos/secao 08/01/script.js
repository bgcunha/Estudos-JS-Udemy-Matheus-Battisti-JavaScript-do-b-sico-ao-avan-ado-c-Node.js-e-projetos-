let pessoa = {
    nome:'Joaquim',
    idade: 20,
    falar: function () {
        console.log("Hello")   
    }
}

pessoa.profissao = 'Do lar'

pessoa.piscar = function () {
    console.log('piscando');
}

console.log(pessoa.nome);
pessoa.falar();
pessoa.piscar();

