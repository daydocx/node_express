
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const { alunos, buscarPorNome, buscarPorMedia, deletarAluno} = require("./alunos");

app.use(bodyParser.json());


app.get("/alunos", (req, res) => {
    let listaAlunos = alunos;

    if (req.query.nome) {
        listaAlunos = buscarPorNome(listaAlunos, req.query.nome);
    }

    if (req.query.media) {
        listaAlunos = buscarPorMedia(listaAlunos, parseFloat(req.query.media));
    }

    res.json(listaAlunos);
});



app.post("/alunos/novo", (req, res) => {
    const { nome, matricula, media } = req.query;

    const novoAluno = { nome: nome, media: media, matricula: matricula };
    alunos.push(novoAluno);

    if (novoAluno) {
        res.status(201).json({ message: "Usuário foi adicionado" });
    } else {
        res.status(400).json({ message: "Aluno não foi encontrado" });
    }
});



app.post("/alunos/deletar/:index", (req, res) => {
    const index = parseInt(req.params.index);

    try {
        deletarAluno(index);
        res.json({ message: "Aluno foi removido com sucesso" });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});



app.post("/alunos/atualizar/:index", (req, res) => {
    const index = req.params.index;
  const { nome, media } = req.query;

  console.log(req.query); 

    if (!alunos[index]) {
        res.status(404).json({ error: 'Aluno não foi encontrado' });
        return;
    }
    
      alunos[index].nome = nome; 
      alunos[index].media = Number(media); 
    
    res.json(alunos);
})




app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});