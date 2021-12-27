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
      if (!resource.includes('films') && !resource.includes('vehicles')) {
        console.log(element?.name);

        element.imageURL = `${SERVER_URL}/images/${resource}/${element?.name}.png`;
        console.log(element);
        newResource.push(element);
      } else if (resource.includes('vehicles')) {
        console.log(element?.name);

        element.imageURL = `${SERVER_URL}/images/${resource}/${element?.name.replace(
          '/',
          '_'
        )}.png`;
        console.log(element);
        newResource.push(element);
      } else {
        console.log(element?.title);

        element.imageURL = `${SERVER_URL}/images/${resource}/${element?.title}.png`;
        console.log(element);
        newResource.push(element);
      }
    });

    fs.writeFile(`${resource}.js`, JSON.stringify(newResource), function (err) {
      if (err) return console.log(err);
    });
    console.log(`FINISH`);
  }
}
