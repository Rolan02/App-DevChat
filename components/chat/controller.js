const store =  require('./store');

function addChat(users){
    if(!users || !Array.isArray(users)){
        return Promise.reject('Invalid user List');
    }
    
    const user = {
        name,
    };
    return store.add(user);
}
function listChats(userId){
    return store.list(userId);
}

module.exports = {
    addChat,
    listChats,
}