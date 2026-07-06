const prompt = require('prompt-sync')();
//Exercicio 1 
function ex1 (){
    let idade = Number(prompt("Digite sua idade: "));
    let mensagem = idade >= 18 ? "Maior de Idade" : "Menor de Idade";
    console.log(mensagem);
}

function ex2(){
    let peso = Number(prompt("Digite seu peso: "));
    let altura = Number(prompt("Digite sua altura (Ex: 1.75): "));
    let imc = (peso/(altura)**2)

    if (imc <18.5) {
        console.log("Abaixo do peso")
    }
    else if (imc >= 18.5 && imc < 24.9){
        console.log("Normal")
    }
    else if (imc >= 25 && imc < 29.9){
        console.log("Sobrepeso")
    }
    else if (imc >= 30){
        console.log("Obesidade")
    }
    else { console.log("Erro!")}
}

function ex3(){
    let x = Number(prompt("Digite o primeiro numero: "));
    let y = Number(prompt("Digite o segundo numero: "));
    let escolha = Number(prompt("Escolha a operação:\n1-+ \n2-- \n3- *\n4-/"));

    switch(escolha){
        case 1:
            console.log(`Resultado: ${x + y}`);
            break;
        case 2: 
            console.log(`Resultado: ${x-y}`);
            break;
        case 3: 
            console.log(`Resultado: ${x*y}`);
            break;
        case 4:
            if (y === 0){
                console.log("Impossivel! Operação Cancelada ");
            } else{
                console.log(`Resultado: ${x/y}`);
            }
            break;

        default: 
            console.log("Valor ínvalido!!")
    }
}

function ex4(){
    let semaforo = prompt("Escolha uma cor: V-Pare A-Atenção v-Siga");
    switch(semaforo){
        case "V":
            console.log("Pare");
            break;
        case "A":
            console.log("Atenção");
            break;
        case "v":
            console.log("Siga");
            break;
        default:
            console.log("Semáforo inválido")
    }
}
ex4()