
const express = require('express')
const bookRouter = require('./app/routes/books.routes')

const app = express()

app.use(require('body-parser').json())

app.get('/', (req, res) =>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.end('Welcome')
})

app.use(bookRouter)
app.listen(3005, () => {
  console.log('Listening on 127.0.0.1:3000');
});

