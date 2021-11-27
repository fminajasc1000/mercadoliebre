const express = require('express');
const app = express();
const path = require('path');

let port = process.env.PORT || 3030;

app.listen(port, () => console.log('Servidor Arriba'));

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'views/home.html'));
});
