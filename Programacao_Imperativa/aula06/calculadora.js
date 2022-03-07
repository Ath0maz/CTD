function somar(n1, n2) {
    return n1 + n2
}

function subtrair(n1, n2) {
    return n1 - n2
}

function multiplicar(n1, n2) {
    return n1 * n2
}

function dividir(n1, n2) {
    return n1 / n2
}

function quadradoDoNumero(n) {
    return multiplicar(n, n)
}

function mediaDeTres(n1, n2, n3) {
    const soma = somar(n1, somar(n2, n3))
    return dividir(soma, 3)
}

function calculaPorcentagem(v, p) {
    return dividir(multiplicar(v, p), 100)
}

function geradorDePorcentagem(n1, n2) {
    return multiplicar(dividir(n1, n2), 100)
}

console.log(`
Soma: ${somar(10, 5)}
Subtrair: ${subtrair(50, 100)}
Multiplicar: ${multiplicar(100, 3)}
Dividir: ${dividir(50, 0)}
Quadrado: ${quadradoDoNumero(2)}
Media: ${mediaDeTres(6, 9, 10)}
Porcentagem: ${calculaPorcentagem(200, 50)}
Gerador de Porcentagem: ${geradorDePorcentagem(2, 200)}
`)