
//  Passo 1 
function Alunos(nome, qtdFaltas, notas) {

    this.nome = nome,
        this.qtdFaltas = qtdFaltas,
        this.notas = notas,


// Passo 2
        calcularMedia = function () {
            let total = 0;
            for (var i = 0; i < notas.length; i++) {
                total += notas[i] / notas.length;
            } return console.log(total)
            // (Está retortando a média do último aluno criando lá em baixo)

        }


    //(Não sei onde está o erro, mas para funcionar é só apagar esse if)   addFaltas = function(Alunos) {
    if (qtdFaltas > 1) {
        qtdFaltas++ + 1
    }
}

// Passo 3
let curso = {
    curso: "BackEnd",
    notaDeAprovacao: 8,
    maxFaltas: 2,
    listaAlunos: ["Adriano", "Guilherme", "Giulia"]
}

// Passo 5
function aprovacao(aluno) {
    if (nota > notaDeAprovacao && faltas < maxFaltas) {
        console.log("Aprovado")
    }

}


const aluno1 = new Alunos('Guilherme', 1, [10, 9, 8]);
const aluno2 = new Alunos('Giulia', 0, [9, 10, 7]);
const aluno3 = new Alunos('Laguiosta', 0, [10, 10, 2]);

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
console.log(calcularMedia(aluno1));





