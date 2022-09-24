const express = require('express'); //getting the express module
const app = express(); //creating the app

// request and response
app.get('/', (req, res) => {    //route handling using express
   res.send({'hello': 'there'}) //route handler for get request for the home page so / 
}); //

const PORT = process.env.PORT || 5000; //dynamic port binding for heroku
app.listen(PORT);