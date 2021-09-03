const express =  require('express'); //trae modulos de cualquier otro sitio
const response = require('./network/response');
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
    response.success(req,res,'Lista de mensajes')
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

    console.log(req.query);
    if(req.query.error == 'ok'){
        response.error(req,res, 'Error Simulado',400);

    }else{
        response.success(req,res,'Creado Exitosamente',201);
    }
    
    
});
app.use('/app',express.static('public'));

app.listen(3001);
console.log('La aplicacion esta escuchando en el puerto Localhost:3001');

