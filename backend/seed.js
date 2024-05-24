const mongoose = require('mongoose');
const Fighter = require('./models/Fighter'); // Ajustez le chemin si nécessaire

mongoose.connect('mongodb://localhost:27017/bs', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fighters = [
  {
    nom: 'John Doe',
    âge: 28,
    description: 'Un combattant talentueux.'
  },
  {
    nom: 'Jane Smith',
    âge: 25,
    description: 'Une combattante féroce.'
  }
  // Ajoutez plus de combattants ici
];

const seedDB = async () => {
  await Fighter.deleteMany({});
  await Fighter.insertMany(fighters);
  console.log('Database seeded!');
};

seedDB().then(() => {
  mongoose.connection.close();
});
