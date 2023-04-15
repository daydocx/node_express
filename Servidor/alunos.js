const alunos = [
    {
        nome: "Dayse Guedes",
        media: 8,
    },

    {
        nome: "Maria",
        media: 7.5,
    },

    {
        nome: "Marta",
        media: 9.5,
    },

    {
        nome: "Jorge",
        media: 9,
    },
];

function buscaPorNome(alunos, nome) {
    return alunos.filter(aluno => {
        return aluno.nome.toLowerCase().includes(nome.toLowerCase());
    });
}


function buscaPorMedia(alunos, media) {
    if (media >= 7) {
        return alunos.filter(aluno => aluno.media >= media);
    }
}


function deletarAluno(index) {
    if (index < 0 || index >= alunos.length) {
        return false;
    }

    alunos.splice(index, 1);
        return true;
}


function atualizarLista(index) {
    if (index < 0 || index >= alunos.length) {
        throw "Aluno não encontrado";
    }
    
    alunos[index].nome = nome;
    alunos[index].media = media;
}


module.exports = { alunos, buscaPorMedia, buscaPorNome, deletarAluno, atualizarLista };