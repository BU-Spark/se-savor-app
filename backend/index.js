const express = require('express')
const app = express()
const port = 3000
const db=require('./db')

app.get('/', (req, res) => {  
  db.getrecipes()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})