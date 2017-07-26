// require necessary imports
const express = require('express');
const parser = require('body-parser');
//instantiate express
const app = express();

//middleware
//chunking all your data so it can be put into a json file and sent forward
app.use(parser.urlencoded({extended: true}));
// have express instance listen in on a PORT

const PORT = 3000;

app.listen(PORT, err => {
  if (err) {
    console.log(`Could not connect to server at port ${PORT}`);
  } else {
    console.log(`Successfully connected to PORT ${PORT}`);
  }
})