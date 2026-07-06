const prompt = require('prompt-sync')();
const ex1 = () => {
    let senha = '';
    let tentativas = 0;
    while (senha !== 'oi'  && tentativas < 3){
        senha = prompt("Senha: ");
        tentativas++;
    }
    if (senha === 'oi'){
        console.log("Senha Correta!");
    }else{ 
        console.log("Bloqueado!");
    }
}

const ex2 = () =>{
    let numero = Number(prompt("Digite um numero: "));
    console.log(`Tabuadas até a tabuada do ${numero}`);
    for(i = 1; i <= numero; i++){
        console.log(`\nTabuada do ${i}`)
        for(j = 1;j <= 10; j++){
            console.log(`${i} X ${j} = ${j * i}`)
        }
    }
}

const ex3 = () =>{
    let soma = 0;
    for(let i = 1; i <= 100; i++){
        if(i % 2 === 0) continue; 
        soma += i;
    }
    console.log(`Soma = ${soma}`);
}

const ex4 = () =>{
    const produtos = [
        { nome: "Caderno", preco: 25.00 },
        { nome: "Caneta", preco: 5.50 },
        { nome: "Mochila", preco: 150.00 },
        { nome: "Estojo", preco: 30.00 },
        { nome: "Notebook", preco: 3500.00 }
    ];

// Loop para encontrar o primeiro produto acima de R$ 100
    for (const produto of produtos) {
        if (produto.preco > 1000) {
            console.log(`Produto: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)}`);
            break; // Interrompe a execução do loop imediatamente
        }
    }
}

function ex5(){
    let numero
    let soma = 0
    do{
        numero = Number(prompt("Digite um numero entre 1 e 100: "))
        soma += numero
    }while (numero < 100);

    console.log(`Soma: ${soma}`);
}

function ex6(){
    const frutas = ['Maça', 'Banana', 'Laranja'];
    for (const fruta of frutas){
        console.log(fruta)
    }
    for (const i in frutas){
            console.log(`${i}: ${frutas[i]}`)
        }
}
ex6()