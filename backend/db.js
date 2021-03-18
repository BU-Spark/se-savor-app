require('dotenv').config()
const admin = require('firebase-admin');
const serviceAccount = require(process.env.APP_CREDS);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

const db = admin.firestore();

//Creating data object to store firebase collections
const data = {};

//Adds recipe documents and fields to our own data db (data.recipes)
const getrecipes = async ()=>{const snapshot = await db.collection('Recipes').get();
    //console.log(snapshot)
    let recipeData = {};
    data.recipes = recipeData;
    snapshot.forEach((doc) => {
      let id = doc.id;
      recipeData[id]=doc.data()
      //console.log(doc.id, '=>', doc.data());
      //console.log(temp.costPerIngredients);
    });
    console.log(data.recipes);
    //console.log(typeof data.recipes);
}   

getrecipes();

//data.recipes.forEach((doc) => {
    //let temp = doc.data();
    //console.log(temp.costPerIngredients);
//})

//Pull recipe data and send it to console log
 

//Export functions for other .js files, such as Index.js
module.exports = {
    getrecipes: getrecipes
    };