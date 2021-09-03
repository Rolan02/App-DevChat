const db = require('mongoose');


db.Promise = global.Promise;

db.connect('mongodb+srv://user:user1234@cluster0.5cic4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true

});
console.log('[db] conectada con exito' );

function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}
async function getMessages(filterUser){
    let filter = {};
    if(filterUser !== null){
        filter = {user: filterUser };
    }
    const messages = await db.Model.find(filter);
    return messages;
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id: id,
    });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}
module.exports = {
    add: addMessage,
    list: getMessages,
    updateText:updateText
}