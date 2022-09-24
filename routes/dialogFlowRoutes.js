//module is current variable
//export is an object that will be exposed as a module
module.exports = app => {
    app.get('/', (req, res) => {    //route handling using express
   res.send({'hello': 'bsdk'}) //route handler for get request for the home page so / 
}); 

app.post('/api/df_text_query', (req, res) => {    //route handling using express
   res.send({'do': 'text query'}) // requesting text from the bot
}); 

app.post('/api/df_event_query', (req, res) => {    //setting up route
   res.send({'do': 'event query'}) //requesting event from the bot
}); 
}