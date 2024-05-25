const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    nom : String,
    age : Number,
    description : String,
    style : String,
    image : String,
    flag : String,
    video : String

})

const itemModel = mongoose.model("Item", itemSchema);
module.exports = itemModel;