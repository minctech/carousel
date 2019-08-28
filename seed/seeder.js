var listing = require('../model/index.js');

mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/carousel');

var faker = require('faker');

let randomData = [];
// let typeList = ['ENTIRE APARTMENT', 'ENTIRE LOFT', 'PRIVATE ROOM', 'ENTIRE FLOOR', 'VERIFIED - ENTIRE APARTMENT', 'ENTIRE HOUSE', 'ENTIRE SERVICED APARTMENT'];

for (let i = 1; i < 101; i++) {
  let listingItem = new listing({
  id: i,
  name: faker.name.findName(),
  location: faker.address.city(),
  price: faker.commerce.price(),
  reviewCount: faker.random.number(),
  image: `https://listingcarousel.s3-us-west-1.amazonaws.com/media/${i}.jpg`,
  // listingType: typeList[Math.floor(Math.random() * Math.floor(6))],
  description: faker.lorem.sentence()
  })
  randomData.push(listingItem);
}

let done = 0;
for (let i = 0; i < randomData.length; i++) {
  randomData[i].save(function(err, result) {
    done++;
    if (done === randomData.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}