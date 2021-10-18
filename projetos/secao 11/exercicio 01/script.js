class ContaBancaria{
    constructor(saldo){
        this.saldo=saldo;
    }

    deposito(valor)
    {
        this.saldo  += valor;
    }

    saque(valor)
    {
        this.saldo  -= valor;
    }
}

let Conta = new ContaBancaria(100);

Conta.deposito(50);

Conta.saque(10);

console.log(Conta.saldo);