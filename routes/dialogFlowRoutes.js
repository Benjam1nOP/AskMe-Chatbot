'use strict';

const chatbot = require('../chatbot/chatbot');
//module is current variable
//export is an object that will be exposed as a module
module.exports = app => {
    app.get('/', (req, res) => {    //route handling using express
        res.send({'hello': 'bsdk'}) //route handler for get request for the home page so / 
}); 

app.post('/api/df_text_query', async (req, res) => {    //route handling using express
    
    let responses = await chatbot.textQuery(req.body.text, req.body.parameters);
    res.send(responses[0].queryResult); // requesting text from the bot
}); 
app.post('/api/df_event_query', async (req, res) => {   //setting up route
        let responses = await chatbot.eventQuery(req.body.event, req.body.parameters);
        res.send(responses[0].queryResult); //requesting event from the bot
}); 
}