class contaBancaria{
    
    constructor(agencia, numero, tipo){
        this.agencia =agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }
    set saldo(saldo){
        this._saldo = saldo;
    }

    sacar(saque){
        if(this._saldo > saque ){
            this._saldo = this._saldo - saque
            console.log(`Você sacou ${saque} reais, seu saldo agora é ${this._saldo}`)
        }else{
            console.log(`Saldo insuficiente, seu saldo é de "${this._saldo}" reais`)
        }       
    }
    depositar(deposito){
        this._saldo = this._saldo + deposito;
        console.log(`Você depositou ${deposito} seu saldo agora é de ${this._saldo} reais`)
    }
}

//conta corrente

class contaCorrente extends contaBancaria{
    
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero, cartaoCredito);
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
        
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(cartaoCredito){
        this._cartaoCredito = cartaoCredito;
    }
}


// conta Poupança


class contaPoupanca extends contaBancaria{

    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "poupança"
        
    }

}

// conta universitária


class contaUniversitario extends contaBancaria{

    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "universitária";
        
        
    }
    sacar(saque){
        if(saque > this._saldo){
            console.log(`Saldo insuficiente, seu saldo é de "${this._saldo}" reais`)
        }else if(saque > 500){
            console.log("Você não pode sacar um valor igual ou maior que 500 reais")
        }else{
            this._saldo = this._saldo - saque
            console.log(`Você sacou ${saque} reais, seu saldo é de ${this._saldo} reais`)
            
        }
    }

}