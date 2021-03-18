require('dotenv').config()
const admin = require('firebase-admin');
const serviceAccount = require(process.env.APP_CREDS);


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

const db = admin.firestore();

const getrecipes = async ()=>{const snapshot = await db.collection('Recipes').get();
    console.log(snapshot)
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });}    


module.exports = {
    getrecipes: getrecipes
    };