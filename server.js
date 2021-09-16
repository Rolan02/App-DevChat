const express =  require('express'); 
const app = express();
const server = require('http').Server(app)

const cors =  require('cors')
const socket = require('./socket')
const db =  require('./db')
const router = require('./network/routes');

db('mongodb+srv://user:user1234@cluster0.5cic4.mongodb.net/telegrim?retryWrites=true&w=majority')

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));  

socket.connect(server);
router(app);

app.use('/app',express.static('public'));

server.listen(3001, function(){
    console.log('La aplicacion esta escuchando en el puerto localhost:3001');
});


