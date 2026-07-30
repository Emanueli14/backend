const express = require('express');
const app = express();

const produtos = [
  { id: 1, nome: 'bolacha', preco: 4.50 },
  { id: 2, nome: 'arroz', preco: 20.00 },
  { id: 3, nome: 'feijão', preco: 8.00 },
  { id: 4, nome: 'suco de uva aurora', preco: 12.00 },
];

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/status');
});