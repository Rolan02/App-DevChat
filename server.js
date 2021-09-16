const express =  require('express'); 
const db =  require('./db')

const router = require('./network/routes');

db('mongodb+srv://user:user1234@cluster0.5cic4.mongodb.net/telegrim?retryWrites=true&w=majority')

var app = express();
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));  

router(app);

app.use('/app',express.static('public'));

app.listen(3001);
console.log('La aplicacion esta escuchando en el puerto Localhost:3001');

