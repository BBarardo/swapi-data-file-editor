fs = require('fs');
const SERVER_URL = 'STRING_TO_REPLACE';

const data = require('./data');

// console.log(data);

for (var resource in data) {
  if (Object.prototype.hasOwnProperty.call(data, resource)) {
    console.log('-----------------------');
    console.log('Doing -> ', resource);
    console.log('-----------------------');

    let newResource = [];

    data[resource][resource].forEach(element => {
      if (!resource.includes('films')) {
        console.log(element?.name);

        element.imageURL = `${SERVER_URL}/images/${resource}/${element?.name}.png`;
        console.log(element);
        newResource.push(element);
      } else {
        console.log(element?.title);

        element.imageURL = `${SERVER_URL}/images/${resource}/${element?.title}.png`;
        console.log(element);
        newResource.push(element);
      }
    });

    fs.writeFile(
      `${resource}.json`,
      JSON.stringify(newResource),
      function (err) {
        if (err) return console.log(err);
        console.log(`${resource} > ${resource}.json`);
      }
    );
  }
}

// fs.writeFile('helloworld.txt', JSON.stringify(data), function (err) {
//   if (err) return console.log(err);
//   console.log('Hello World > helloworld.txt');
// });
