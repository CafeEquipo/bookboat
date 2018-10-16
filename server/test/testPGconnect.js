
var pg = require('pg');

//var conString = "postgres://pgadmin:pgadmin@192.168.2.103:5432/bookboat";

var conString = {
  user: 'postgres',
  host: 'postgres',
  database: 'bookboat',
  password: 'postgres',
  port: 5432,
  }

var client = new pg.Client(conString);

client.connect((err) => {
  console.log("hallo1");
  if (err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function (err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    client.end();
  });
});