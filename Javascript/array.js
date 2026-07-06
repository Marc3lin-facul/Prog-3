function ex1(){
    // 1. Criação do array com 5 objetos alunos
    const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 4.5 },
    { nome: "Carlos", nota: 7.0 },
    { nome: "Diana", nota: 5.5 },
    { nome: "Eduardo", nota: 9.0 }
    ];

// 2. FILTER: Filtra apenas os alunos aprovados (nota >= 6)
    const aprovados = alunos.filter(aluno => aluno.nota >= 6);
    console.log("Alunos Aprovados:", aprovados);

// 3. MAP: Adiciona o campo 'status' baseado na nota
    const alunosComStatus = alunos.map(aluno => ({
    ...aluno,
    status: aluno.nota >= 6 ? "Aprovado" : "Reprovado"
    }));
    console.log("Alunos com Status:", alunosComStatus);

// 4. REDUCE: Calcula a média geral somando as notas e dividindo pelo total
    const somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);
    const mediaGeral = somaNotas / alunos.length;
    console.log("Média Geral da Turma:", mediaGeral);
}

function ex2(){
    const dados = [1,2,3,4,5,6,7,8,9,10];
    const impares = dados.filter(dado => dado  % 2 !==0);
    const triplicar = impares.map(dado => dado*3);
    const somar = triplicar.reduce((acc, dado) => acc + dado, 0);

    console.log(somar);
}

function ex3(){
    const config = {
        host: 'localhost',
        porta: 8080,
        usuario: 'admin',
        senha: '123'
    };

// 1. Extraindo apenas host e porta com desestruturação
    const { host, porta } = config;

// 2. Criando uma cópia com spread alterando apenas a porta
    const novaConfig = { ...config, porta: 3000 };

}

function ex4(){
    const vendas = [
  { produto: 'Celular', categoria: 'Eletrônico', valor: 4500 },
  { produto: 'Arroz', categoria: 'Alimento', valor: 100 },
  { produto: 'Fone', categoria: 'Eletrônico', valor: 500 },
  { produto: 'Feijão', categoria: 'Alimento', valor: 200 }
];

// Agrupando e somando os valores por categoria
    const totalPorCategoria = vendas.reduce((acumulador, venda) => {
        const { categoria, valor } = venda;
  
  // Inicializa a categoria com 0 se ela ainda não existir no acumulador
    acumulador[categoria] = (acumulador[categoria] || 0) + valor;
  
    return acumulador;
}, {});

    console.log(totalPorCategoria);
// Saída: { Eletrônico: 5000, Alimento: 300 }

}

function ex5(){
    const alunos = [ 
    {nome: 'Marcelo', nota: 10}, 
    {nome: 'Daniel', nota: 5} 
    ];

    const todosAprovados = alunos.every((aluno) => aluno.nota >= 6);
    console.log(todosAprovados);

    const verificaReprovado = alunos.some((aluno) => aluno.nota < 6);
    console.log(verificaReprovado);

    const mediaTurma = (alunos) =>{
        const somatorioNotas = alunos.reduce((acc, aluno)=> acc +aluno.nota, 0)
        return somatorioNotas/alunos.length;
    }
    console.log(mediaTurma(alunos))
}
ex5()