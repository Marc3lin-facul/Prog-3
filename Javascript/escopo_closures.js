function ex2(){
    const criarSomador = n => soma => n + soma
    console.log(criarSomador(10)(5))
}

function ex3(){
    function criarContador(inicio = 0, passo = 1) {
    let contagem = inicio;
    
    return {
        incrementar: () => contagem += passo,
        decrementar: () => contagem -= passo,
        resetar: () => contagem = inicio,
        valor: () => contagem,
    };
}

const meuContador = criarContador(10, 5);

console.log(meuContador.incrementar()); // Retorna 15
console.log(meuContador.incrementar()); // Retorna 20
console.log(meuContador.decrementar()); // Retorna 15
console.log(meuContador.resetar());     // Retorna 10
console.log(meuContador.valor());       // Retorna 10

}


function ex4(){
    
}
ex2()