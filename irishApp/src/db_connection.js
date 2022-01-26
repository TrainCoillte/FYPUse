var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "atlasnagaeilgema ",
  password: "bT){4etV*?c} ",
  databasr: "atlasnagaeilgema_atlas"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 
});