import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

const DB_QUERO_VER = "./quero-ver.json";

function lerQueroVer() {
  if (!fs.existsSync(DB_QUERO_VER)) return [];
  return JSON.parse(fs.readFileSync(DB_QUERO_VER, "utf-8"));
}

function salvarQueroVer(lista) {
  fs.writeFileSync(DB_QUERO_VER, JSON.stringify(lista, null, 2));
}

// GET - lista os filmes da watchlist
app.get("/quero-ver", (req, res) => {
  res.json(lerQueroVer());
});

// POST - adiciona um filme na watchlist
app.post("/quero-ver", (req, res) => {
  const { id, titulo, poster_path, prioridade } = req.body;

  if (!id || !titulo) {
    return res.status(400).json({ erro: "id e titulo são obrigatórios" });
  }

  const lista = lerQueroVer();

  const jaExiste = lista.some((f) => f.id === id);
  if (jaExiste) {
    return res.status(409).json({ erro: "Filme já está na lista" });
  }

  const novoItem = {
    id,
    titulo,
    poster_path,
    prioridade: prioridade || "média",
    dataAdicionado: new Date().toISOString(),
  };

  lista.push(novoItem);
  salvarQueroVer(lista);

  res.status(201).json(novoItem);
});

// DELETE - remove um filme da watchlist
app.delete("/quero-ver/:id", (req, res) => {
  const lista = lerQueroVer();
  const novaLista = lista.filter((f) => f.id !== Number(req.params.id));
  salvarQueroVer(novaLista);
  res.status(200).json({ mensagem: "Removido com sucesso" });
});

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));
