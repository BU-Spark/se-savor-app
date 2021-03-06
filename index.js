const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()

const admin = require('firebase-admin');
const serviceAccount = require(process.env.APP_CREDS);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

const db = admin.firestore();

app.get('/', async (req, res) => {
    const snapshot = await db.collection('Recipes').get();
    console.log(snapshot)
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });    
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})