var mongoose = require("mongoose");

//SCHEMA SETUP
var restaurantSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,
  lat: Number, //add
  lng: Number, //add
  description: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment" //Embed the reference of the comment
  }]
}, {
  usePushEach: true
});

module.exports = mongoose.model("restaurant", restaurantSchema); //make model, compiling
