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
      if (resource.includes('films')) {
        // console.log(element?.title);

        element.imageURL = `${SERVER_URL}/images/${resource}/${element?.title}.png`;
        element.edited = new Date();
        //         console.log(element);
        newResource.push(element);
      } else if (resource.includes('people')) {
        // console.log(element?.name);
        let name = '';

        if (element?.name.includes('Ackbar')) {
          name = 'Gial Ackbar';
        } else {
          name = element?.name;
        }
        element.imageURL = `${SERVER_URL}/images/${resource}/${name}.png`;
        element.edited = new Date();
        //         console.log(element);
        newResource.push(element);
      } else if (resource.includes('planets')) {
        console.log(element?.name);
        let name = '';

        if (
          element?.name.includes('Stewjon') ||
          element?.name.includes('Tholoth') ||
          element?.name.includes('Kalee')
        ) {
          console.log('NULINHO');
          name = null;
          element.imageURL = name;
          element.edited = new Date();
        } else {
          name = element?.name;
          element.imageURL = `${SERVER_URL}/images/${resource}/${name}.png`;
          element.edited = new Date();
        }
        //         console.log(element);
        newResource.push(element);
      } else if (resource.includes('vehicles')) {
        // console.log(element?.name);

        let name = '';

        if (element?.name.includes('TIE bomber')) {
          name = 'TIE/sa bomber';
        } else if (element?.name.includes('AT-AT')) {
          name = 'All Terrain Armored Transport';
        } else if (element?.name.includes('Zephyr-G swoop bike')) {
          name = 'Zephyr-G swoop';
        } else if (element?.name.includes('Koro-2 Exodrive airspeeder')) {
          name = 'Koro-2 all-environment exodrive airspeeder';
        } else if (element?.name.includes('SPHA')) {
          name = 'Self-Propelled Heavy Artillery';
        } else if (element?.name.includes('AT-RT')) {
          name = 'All Terrain Reconnaissance Transport';
        } else {
          name = element?.name;
        }

        element.imageURL = `${SERVER_URL}/images/${resource}/${name.replace(
          '/',
          '_'
        )}.png`;
        element.edited = new Date();
        //         console.log(element);
        newResource.push(element);
      } else if (
        !resource.includes('films') &&
        !resource.includes('vehicles')
      ) {
        // console.log(element?.name);

        element.imageURL = `${SERVER_URL}/images/${resource}/${element?.name}.png`;
        element.edited = new Date();
        //         console.log(element);
        newResource.push(element);
      }
    });

    fs.writeFile(`${resource}.js`, JSON.stringify(newResource), function (err) {
      if (err) return console.log(err);
    });
    console.log(`FINISH`);
  }
}

console.log(new Date());
