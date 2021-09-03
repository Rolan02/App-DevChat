const express =  require('express'); 

const router = require('./network/routes');

var app = express();
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));  

router(app);

app.use('/app',express.static('public'));

app.listen(3001);
console.log('La aplicacion esta escuchando en el puerto Localhost:3001');

