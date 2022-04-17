



//  Passo 1 
        function Alunos(nome, qtdFaltas, notas) {

            this.nome = nome,
            this.qtdFaltas = qtdFaltas,
            this.notas = notas,


// Passo 2
        this.calcularMedia = function () {
            let total = 0;
            for (let i = 0; i < this.notas.length; i++) {

                total = total + this.notas[i];

            }
            return total / this.notas.length;

        }

// Continuação do passo 2

    this.addQtdFaltas = function () {
        qtdFaltas = this.qtdFaltas++
         
        return console.log(this.qtdFaltas);
    // Está retornando "Undefined no final, mas a função está funcionando"
    }

   

}


// Passo 3
        let curso = {

            curso: "BackEnd",
            notaDeAprovacao: 8,
            maxFaltas: 2,
            listaAlunos: [],

// Passo 4
                adicionarAluno: function (nome, qtdFaltas, notas) {
                let aluno = new Alunos (nome, qtdFaltas, notas)
                this.listaAlunos.push(aluno);

                return console.log(this.listaAlunos)

            },
// Passo 5

                aprovacao:function (aluno) {
                if (aluno.calcularMedia() >= this.notaDeAprovacao && aluno.qtdFaltas < this.maxFaltas) {

                    return console.log("Aprovado")


                }
            }

}
                



const aluno1 = new Alunos('Guilherme', 1, [10, 9, 8]);
const aluno2 = new Alunos('Giulia', 0, [9, 10, 7]);
const aluno3 = new Alunos('Laguiosta', 0, [10, 10, 2]);

// Teste do passo 2.1
console.log(aluno1.calcularMedia(10, 9, 8));
// Teste do passo 2.2
aluno1.addQtdFaltas();
// Teste do passo 4
curso.adicionarAluno("teste1", 2, [10,10,10]);
curso.adicionarAluno("teste2", 2, [10,10,10]);
// Teste do passo 5
curso.aprovacao(aluno2);


        
