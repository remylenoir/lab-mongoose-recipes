const mongoose = require("mongoose");
const Recipe = require("./models/Recipe"); // Import of the model Recipe from './models/Recipe'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect("mongodb://localhost/recipeApp", { useNewUrlParser: true });
// .then(() => {
//   console.log("Connected to Mongo!");
// })
// .catch(err => {
//   console.error("Error connecting to mongo", err);
// });

// Iteration 2
// Recipe.create({
//   title: "Tacos",
//   level: "Amateur Chef",
//   ingredients: ["Corn", "Salsa", "...etc"],
//   cuisine: "Whatever",
//   dishType: "Dish",
//   duration: 120,
//   creator: "Me"
// })
//   .then(recipe => {
//     console.log(recipe.title);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Iteration 3
// Recipe.insertMany(data)
//   .then(recipes =>
//     recipes.forEach(recipe => {
//       console.log(recipe.title);
//     })
//   )
//   .catch(err => {
//     console.error(err);
//   });

// Iteration 4
// Recipe.findByIdAndUpdate("5caf9f84f074e55b21236bbb", { duration: 100 })
// Recipe.updateOne({ title: "Rigatoni alla Genovese" }, { duration: 100 })
//   .then(update => {
//     console.log("Update: success!");
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Iteration 5
// Recipe.findByIdAndRemove("5caf97eef46aab578d24484b")
// Recipe.deleteOne({ title: "Carrot Cake" })
//   .then(remove => {
//     console.log("Delete: success!");
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Iteration 6
