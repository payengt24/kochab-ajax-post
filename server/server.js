const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //by default it know to look at the module
const PORT = 5000; //don't want to hard code the PORT that's why we created a variable

//the below const will be in the data base but for now its here becuz we have not learn DB yet; when its long coding than we use a modules
const recordCollection = require('./modules/record-collection'); //modules- source where the file is always put ./ first

app.use(express.static('server/public')); //this shows everything in the public folder in the localhost5000

app.use(bodyParser.urlencoded( { extended: true } ));

app.get('/records', (req, res) => {
    res.send(recordCollection);
})

app.post('/add-record', (req, res) => {
    console.log(req.body);
    recordCollection.push(req.body);
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})