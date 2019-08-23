var listing = require('../model/index.js');

mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/carousel');

var faker = require('faker');

let randomData = []


for (let i = 1; i < 101; i++) {
   let listingItem = new listing({
    id: i,
    name: faker.name.findName(),
    location: faker.address.city(),
    price: faker.commerce.price(),
    reviewCount: faker.random.number(),
    image: `https://console.aws.amazon.com/s3/object/listingcarousel/media/${i}.jpg?region=us-east-2&tab=overview`,
    listingType: faker.lorem.word(),
    description: faker.lorem.sentence()
  })
  randomData.push(listingItem);
}
console.log(randomData);
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