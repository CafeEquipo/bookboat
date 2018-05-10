const App = require('./app');
require('http').globalAgent.maxSockets = 5;

const port = 3000;

const app = new App().app;

app.listen(port,'localhost',(err) => {  
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
})