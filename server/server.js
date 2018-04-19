const express = require('express');
const app = express();
const PORT= 5000; //don't want to hard code the PORT that's why we created a variable

app.use(express.static('server/public')); //this shows everything in the public folder in the localhost5000

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})