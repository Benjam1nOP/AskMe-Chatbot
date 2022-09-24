const express = require('express'); //getting the express module
const bodyParser =require('body-parser'); //for parsing the data 
const app = express(); //creating the app

app.use(bodyParser.json()); // for parsing the json data

require('./routes/dialogFlowRoutes')(app); //adding routes to express app
// request and response

const PORT = process.env.PORT || 5000; //dynamic port binding for heroku
app.listen(PORT);