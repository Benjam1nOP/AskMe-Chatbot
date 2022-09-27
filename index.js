const express = require('express'); //getting the express module
const bodyParser =require('body-parser'); //for parsing the data 
const app = express(); //creating the app

const config = require('./config/keys');
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

require('./models/Registration');
require('./models/Demand');
require('./models/Coupons');

app.use(bodyParser.json()); // for parsing the json data it  //waits for request data and then constructs req.body
require('./routes/dialogFlowRoutes')(app); //adding routes to express app
// request and response
require('./routes/fulfillmentRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // js and css files
    app.use(express.static('client/build'));

    // index.html for all page routes
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000; //dynamic port binding for heroku
app.listen(PORT);