const prompt = require("prompt-sync")();
const ex1 =  () =>{
    const soma = (a,b) => console.log(`Resultado = ${a + b}`);
    const sub = (a,b) => console.log(`Resultado = ${a - b}`);
    const mul = (a,b) => console.log(`Resultado = ${a * b}`);
    const div = (a,b) =>{
        if (b === 0 ){ 
            console.log("Erro") 
            return
        }
        console.log(`Resultado = ${a / b}`);
        
    }
    let num = Number(prompt("Digite um número: "))
    let num2 = Number(prompt("Digite um número: "))

    soma(num, num2);
    sub(num, num2);
    mul(num, num2);
    div(num, num2);
}

const ex2= () => {
    const ehPar = (n) => n % 2 === 0;
    const ehMultiplo = (n, base) =>n % base === 0;
    console.log(ehPar(3));
    console.log(ehMultiplo(15,5));
}

const ex3 = ()=>{
    const calcularMedia = (...resto) =>{
        const soma = resto.reduce((a,b) => a + b, 0);
        return soma / resto.length;
    }
    console.log(calcularMedia(7,8,9,10));
}

const ex4 = () =>{
    const criarSaudacao = periodo => nome => 
        periodo === 'manhã' ? `Bom dia, ${nome}!` : 
        periodo === 'tarde' ? `Boa tarde, ${nome}!` : 
        periodo === 'noite' ? `Boa noite, ${nome}!` : `Olá, ${nome}!`;
    console.log(criarSaudacao('tarde')('Ana'))
}

function ex5(){
    const alunos = [ 
    {nome: 'Marcelo', nota: 10}, 
    {nome: 'Daniel', nota: 5} 
    ];

// Arrow function com filter e parâmetro padrão (notaMinima = 6)
    const obterAprovados = (listaAlunos, notaMinima = 6) => {
        return listaAlunos.filter(aluno => aluno.nota >= notaMinima);
    };

    const aprovados = obterAprovados(alunos);
        console.log(aprovados);
// Saída: [ { nome: 'Marcelo', nota: 10 } ]

}
