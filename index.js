const express = require ('express');
const app = express ();
const porta = 3333;
app.listen (porta, () => {
    console.log ('Servidor iniciado na porta' + porta);
    //console.log (`servidor iniciado na porta ${porta}`);

});