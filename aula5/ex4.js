const express = require('express');
const app = express();

const produtos = [
  { id: 1, nome: 'Mouse Gamer', preco: 80 },
  { id: 2, nome: 'Teclado gamer', preco: 250 },
  { id: 3, nome: 'fone gamer', preco: 800 },
  { id: 4, nome: 'Mouse', preco: 30 }
];

app.get('/produtos/caros', (req, res) => {
  const produtosCaros = produtos.filter(produto => produto.preco > 100);

  res.status(200).json(produtosCaros);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/produtos/caros');
});