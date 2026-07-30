const express = require('express')
const app = express()
app.use(express.json())

 app.get ('/', (req , res) => {
 res.json({aluno: "emanueli", diciplina: "backandI", ano: 2026})
 })
app.listen(3000, () => {
console.log("Servidor rodando em http://localhost:3000/");
});