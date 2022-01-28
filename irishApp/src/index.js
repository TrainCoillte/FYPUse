var express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mysql = require('mysql');
var arrayOfScribes = [];
app.use(bodyParser.json());
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'atlasnagaeilgema_NathanFYP',
  password : 'Han2019Nat!',
  database : 'atlasnagaeilgema_atlas'
});


const port = process.env.PORT || 3306;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

connection.connect(function(err){
  if(err) throw err;
  trial();
})

export function trial(){
  connection.query("SELECT * FROM Scribe", function (err,result,fields){
    if(err) throw err;
    for(var i =0; i<result.length;i++)
    {
      arrayOfScribes[i] = result[i];
    }
    console.log(arrayOfScribes[4].Ainm);
  })
}



