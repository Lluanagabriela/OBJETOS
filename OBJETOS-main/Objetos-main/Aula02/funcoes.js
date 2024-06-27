const cliente = {
    nome: "Carla",
    idade: 37,
    email: "carla@email.com.br",
    telefone: ["(43)999077471", "(43)999226866"],
    saldo: 200,
    efetuarPagamento: function (valorCompra){
        if(valorCompra > this.saldo){
            console.log("Saldo Insuficiente!!")
        }else{
            this.saldo = this.saldo - valorCompra;
            console.log(`Pagamento realizado!! Novo Saldo : ${this.saldo}`)
        
    }
    }
};

cliente.endereços = [
 {
    rua: "Vereadora Ruth Martinez Corrêa",
    número: 877,
    apartamento: false,
    casa: true,
    complemento: "Em frente a Delegacia Civil",
},
]

cliente.endereços.push({
    rua: "Jack and Rose - Titanic",
    número: 1912,
    apartamento: false,
    casa: false,
    complemento: "no fundo do mar",
});

cliente.efetuarPagamento(50);