const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carousel', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log("We're connected")
});

let listingSchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number,
  reviewCount: Number,
  image: String,
  listingType: String,
  id: Number
})

const listing = mongoose.model('Listing', listingSchema);

module.exports = listing

