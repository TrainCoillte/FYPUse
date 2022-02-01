const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
var mysql = require('mysql');
var arrayOfScribes = [];
app.use(bodyParser.json());
app.use(cors());
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'atlasnagaeilgema_NathanFYP',
  password : 'Han2019Nat!',
  database : 'atlasnagaeilgema_atlas'
});


const port = 3000 || 3306;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});


app.get("/scribes", function(req, res) {
  connection.query("SELECT * FROM Scribe", function (err,result,fields){
    if(err) throw err;
    for(var i =0; i<result.length;i++)
    {
      arrayOfScribes[i] = result[i];
    }
  })
  res.status(200).json({ arrayOfScribes});
 });
connection.connect(function(err){
  if(err) throw err;
})




