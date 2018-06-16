import { App } from './app'
require('http').globalAgent.maxSockets = 5;

const port = process.env.PORT;

const HOST ='0.0.0.0'

const app = new App().app;

app.listen(Number(port),HOST,(err:any) => {  
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
})