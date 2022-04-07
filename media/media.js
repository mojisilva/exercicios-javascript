const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C'
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C'
    }
];


function calculaMedia(aluno, media){
    let a = [];
    for(let i= 0; i<aluno.length; i++){
        const {nota, nome} = aluno[i];
        if(nota>=media){
            a.push(nome);
        }
    }
    console.log(a);
}


calculaMedia(alunos,5);