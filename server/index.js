const express = require('express');
const db = require('../model/index.js')

const bodyParser = require('body-parser');


let app = express();


app.use(bodyParser());
app.use(express.static('client/dist'));

let port = 3000;

app.get('/api/listings', (req, res) => {
  db.getAll((err, data) => {
    if (err){
      console.log(err);
      return;
    } else {
      res.send(data)
    }
  })
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
