const express = require('express');
const app = express();
const PORT= 5000; //don't want to hard code the PORT that's why we created a variable

//the below const will be in the data base but for now its here becuz we have not learn DB yet; when its long coding than we use a modules
const recordCollection = require('./modules/record-collection'); //modules- source where the file is always put ./ first

app.use(express.static('server/public')); //this shows everything in the public folder in the localhost5000

app.get('/records', (req, res) => {
    res.send(recordCollection)
})


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})