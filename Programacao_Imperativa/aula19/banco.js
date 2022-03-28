let conta = {
    "NrºConta": " ",
    "TipoConta": " ",
    "Saldo": " ",
    "TitularConta": " "
}

function clientes(NrºConta, TipoConta, Saldo, TitularConta){
    this.NrºConta = NrºConta
    this.TipoConta = TipoConta
    this.Saldo = Saldo
    this.TitularConta = TitularConta
}

let clientes1 = new clientes(1234567-8, "Corrente", 595.50, "Fulano de tal")
let clientes2 = new clientes(1234567-9, "Poupança", 10, "Teste de Tal")
let clientes3 = new clientes(1234567-10, "Poupança", 150, "Teste de Fulano")
let clientes4 = new clientes(1234567-11, "Corrente", 200.000, "Teste de Ciclano")
let clientes5 = new clientes(1234567-12, "Corrente", 500, "Teste de Beltrano")
let clientes6 = new clientes(1234567-13, "Corrente", 800, "Teste de Jesus")
let clientes7 = new clientes(1234567-14, "Poupança", 290, "Teste de Dornelles")
let clientes8 = new clientes(1234567-15, "Corrente", 170, "Teste de Pizzani")
let clientes9 = new clientes(1234567-16, "Poupança", 380, "Teste de Lourenço")
let clientes10 = new clientes(1234567-17, "Poupança", 00, "Teste de Conceição")

console.log(clientes1)
console.log(clientes2)
console.log(clientes3)
console.log(clientes4)
console.log(clientes5)
console.log(clientes6)
console.log(clientes7)
console.log(clientes8)
console.log(clientes9)
console.log(clientes10)

let banco = (clientes) => {
    
}