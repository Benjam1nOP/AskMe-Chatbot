'use strict';
const dialogflow = require('dialogflow');   //including required files
const structjson = require('./structjson.js');
const config = require('../config/keys');

const projectId = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;

const credentials = {
    client_email: config.googleClientEmail,
    private_key: 
    config.googlePrivateKey,
};

const sessionClient = new dialogflow.SessionsClient({projectId, credentials}); //initializing session client
const sessionPath = sessionClient.sessionPath(projectId, sessionId); //creating session path


module.exports = {
    textQuery: async function(text, parameters = {}) {
        let self = module.exports; //accessing another module export method // basically calling the handle action function
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: text,
                    languageCode: languageCode, //importing from keys
                },
            },
            queryParams: { //sending parameters along with the text query
                payload: {
                    data: parameters //object received from the client
                }
            }
        };
 // code inside then is executed after we get an response
  // whereas the code after it is executed asynchronously
        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;

    },

    eventQuery: async function(event, parameters = {}) {
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                event: {
                    name: event,
                    parameters: structjson.jsonToStructProto(parameters), //Dialogflow's v2 API uses gRPC. You'll need a jsonToStructProto method to convert your JavaScript object to a proto struct.
                    languageCode: languageCode,
                },
            }
        };
        //parameters will be passed in the event object so no query params 
        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses); //calling the method
        return responses;

    },



    handleAction: function(responses){
        return responses;
    },


}