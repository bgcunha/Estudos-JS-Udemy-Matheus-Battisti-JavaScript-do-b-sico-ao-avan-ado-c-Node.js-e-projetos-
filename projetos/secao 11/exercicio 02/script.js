class item{
    constructor(Nome, Qtde, Valor, Desc=0 ){
        this.Nome=Nome;
        this.Qtde=Qtde;
        this.Valor=Valor;
        this.Desc=Desc;
    }
}



let produto = new item('Memoria', 2, 125.99);

console.log(produto);