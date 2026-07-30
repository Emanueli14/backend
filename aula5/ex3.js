const express = require('express');
const app = express();

app.get('/status', (req, res) => {
  res.status(200).json({
    online: true,
    message: "Servidor rodando perfeitamente!"
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/status');
});