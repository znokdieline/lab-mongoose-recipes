const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'

const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

Recipe.create({
  title: "Impecable Salmon",
  level: "Amateur Chef",
  ingredients: [
    "1/2 cup light brown sugar",
    "1 large egg",
    "2 tablespoons milk",
    "1 1/4 teaspoons vanilla extract",
    "2 cups semisweet chocolate chips"
  ],
  cuisine: "French",
  dishType: "Dish",
  image: "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
  duration: 60,
  creator: "Horace Lee" 
}).then(recipe => {
  console.log('se ha creado una nueva receta')
}).catch(err => {
  console.log('se produjo un error y no se ha creado la receta ', err)
});

Recipe.insertMany(data)
.then(recipe => {
  console.log('Creadas nuevas recetas');
}).catch(err => {
  console.log('un error ha ucurrido y no se han creado nuevas recetas', err);
});

Recipe.updateOne({ title:  'Rigatoni alla Genovese' }, { duration: 100 })
.then(recipe => {
  console.log('la receta se ha actualizado');
}).catch(err => {
  console.log('se ha producido un error y no se ha actualizado la receta', err);
});

Recipe.deleteOne({ title: 'Carrot Cake' })
.then(recipe => {
  console.log('se ha borrado exitosamente');
}).catch(err => {
  console.log('se ha producido un error y no se ha borrado la receta', err);
});

//mongoose.connection.close();