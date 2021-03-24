const express = require('express')
const app = express()
const port = 3000
const db = require('./db')

// Additional routers we've defined
const users = require('./users/users')

// These paths will be handled by the specified routers
app.use('/users', users);

app.get('/', (req, res) => {  
  //db.getrecipes()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app
