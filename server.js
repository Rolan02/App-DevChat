const express =  require('express'); //trae modulos de cualquier otro sitio
//import expres form 'expres'; // Sintaxis de EMC6
//const bodyParser = require('body-parser')
const router = express.Router(); // Nos permite separar nuestras peticiones 
var app = express();
app.use(express.json());//Solo para expreciones POST Y PUT por que estamos enviando datos 
app.use(express.urlencoded({extended: true})); //Solo para expreciones POST y PUT por que estamos enviando datos 
app.use(router);


router.get('/message',function(req,res){
    console.log(req.headers);
    res.header({
        "custom-header":"Nuesto valor personalizado",
    });
    res.send('Lista de mensajes desde GET con NODEMON')
});

router.delete('/message', function (req,res){
    console.log(req.body);
    console.log(req.query);
    res.send(`Mensaje ${req.body.text} enviado correctamente`);
});
router.put('/message',(req,res) =>
    res.send('Modificado desde PUT')
);
router.post('/message',function(req,res) {
    console.log(req.body);
    console.log(req.query);
  //  res.send('Eliminado desde DELETE con NODEMON')
    res.status(201).send([{error:'',body:'Creado Correctamente'}]);
    
});

app.listen(3001);
console.log('La aplicacion esta escuchando en el puerto Localhost:3001');

