const App = require('./app');
require('http').globalAgent.maxSockets = 5;

const port = 3000;
const HOST = '0.0.0.0';

const app = new App().app;

app.listen(port,HOST,(err) => {  
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
})