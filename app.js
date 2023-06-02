//constantes globales
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 8888;

// generacion del view
app.set('view engine', 'ejs');

//renderizar el URL encoded
app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

//definir el URl
app.get('/', (req, res) => {
    res.render('game');
});

app.get('welcome', (req, res) =>{
    text1 = 'Bien';
});

app.post('/play', (req,res) =>{
    const secretNumber = Math.floor(Math.random()*10)
    const playerGuess = parseInt(req.body.guess);
    let result;

    //se le pide al server que analice la respuesta
    if (playerGuess == secretNumber) {
        result = `El numero ${playerGuess} es correcto`;
    } else if (playerGuess != secretNumber) {
        result = `El numero ${playerGuess} no es correcto, intenta de nuevo`;
    } else {
        result = "Debes ingresar un numero";
    }

    res.render('result', {result});
});

app.listen(port, () =>{
    console.log("listening server on port" + port);
});
