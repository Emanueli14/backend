const express = require ('express')
const app = express();
app.use (express.json());

let preodmerc = [
    {id: 1 , nome: "café", preco: 20},
    {id: 2 , nome: "suco", preco: 1},
    {id: 3 , nome: "arroz", preco: 19},
]
let proxid = 4;




app.get ('/status', (req, res) =>{
res.json(preodmerc);
});




app.get('/produto/:id', (req, res) => {
const id = Number(req.params.id);
const produto =  preodmerc.find( p => p .id === id  ) ;
if (!produto) {/produtor/
return res.status(404).json ({erro: "produto não encontrado"}) ;
}
res.json (produto) ;
});




app.post ('/produtonovo' , (req , res ) => {
   console.log (req.body.nome );
   const novoProduto = {
    id: proxid, 
    nome: req.body.nome,
    preco: req.body.preco
   };
   prodcor.push(novoProduto);
   proxid++;
   res.status(201).json (novoProduto)
});




app.put ('/atualizar/:id', (req, res) => {
  const id = Number (req.params.id);
  const produto = preodmerc.find (a => a.id === id);
  if (!produto){
    return res.status(404).json ({ erro: "produto nao encontrado "});  
  }
  produto.nome = req.body.nome;
  produto.preco = req.body.preco;
  res.json(produto);
});





app.delete ('/excluir/:id', (req, res) => {
const id = Number (req.params.id);
const pod = preodmerc.find( a => a.id === id);
if(!pod){
return res.status(404).json ({erro: "produto nao encontrada"})
}
preodmerc = preodmerc.filter(a => a.id !== id);
res.json({mensagem: "produto removida com sucesso"});  
});














app.listen(3000, () => {
console.log(" servidor rodando em http://localhost:3000");
})