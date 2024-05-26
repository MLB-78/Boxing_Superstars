const mongoose = require('mongoose');
const itemModel = require('./models/item.js');
const connectDB = require('./db.js');

const seedData = async () => {
  await connectDB();


  try {
    await itemModel.insertMany(fighters);
    console.log("Data successfully seeded!");
    process.exit();
  } catch (error) {
    console.error("Error seeding data: ", error);
    process.exit(1);
  }
};

seedData();