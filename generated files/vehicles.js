export const vehicles = [
  {
    name: 'Sand Crawler',
    model: 'Digger Crawler',
    manufacturer: 'Corellia Mining Corporation',
    cost_in_credits: '150000',
    length: '36.8 ',
    max_atmosphering_speed: '30',
    crew: '46',
    passengers: '30',
    cargo_capacity: '50000',
    consumables: '2 months',
    vehicle_class: 'wheeled',
    pilots: [],
    films: [`${SERVER_URL}/api/films/1/`, `${SERVER_URL}/api/films/5/`],
    created: '2014-12-10T15:36:25.724000Z',
    edited: '2014-12-20T21:30:21.661000Z',
    url: `${SERVER_URL}/api/vehicles/4/`,
    imageURL: `${SERVER_URL}/images/vehicles/Sand Crawler.png`,
  },
  {
    name: 'T-16 skyhopper',
    model: 'T-16 skyhopper',
    manufacturer: 'Incom Corporation',
    cost_in_credits: '14500',
    length: '10.4 ',
    max_atmosphering_speed: '1200',
    crew: '1',
    passengers: '1',
    cargo_capacity: '50',
    consumables: '0',
    vehicle_class: 'repulsorcraft',
    pilots: [],
    films: [`${SERVER_URL}/api/films/1/`],
    created: '2014-12-10T16:01:52.434000Z',
    edited: '2014-12-20T21:30:21.665000Z',
    url: `${SERVER_URL}/api/vehicles/6/`,
    imageURL: `${SERVER_URL}/images/vehicles/T-16 skyhopper.png`,
  },
  {
    name: 'X-34 landspeeder',
    model: 'X-34 landspeeder',
    manufacturer: 'SoroSuub Corporation',
    cost_in_credits: '10550',
    length: '3.4 ',
    max_atmosphering_speed: '250',
    crew: '1',
    passengers: '1',
    cargo_capacity: '5',
    consumables: 'unknown',
    vehicle_class: 'repulsorcraft',
    pilots: [],
    films: [`${SERVER_URL}/api/films/1/`],
    created: '2014-12-10T16:13:52.586000Z',
    edited: '2014-12-20T21:30:21.668000Z',
    url: `${SERVER_URL}/api/vehicles/7/`,
    imageURL: `${SERVER_URL}/images/vehicles/X-34 landspeeder.png`,
  },
  {
    name: 'TIE/LN starfighter',
    model: 'Twin Ion Engine/Ln Starfighter',
    manufacturer: 'Sienar Fleet Systems',
    cost_in_credits: 'unknown',
    length: '6.4',
    max_atmosphering_speed: '1200',
    crew: '1',
    passengers: '0',
    cargo_capacity: '65',
    consumables: '2 days',
    vehicle_class: 'starfighter',
    pilots: [],
    films: [
      `${SERVER_URL}/api/films/1/`,
      `${SERVER_URL}/api/films/2/`,
      `${SERVER_URL}/api/films/3/`,
    ],
    created: '2014-12-10T16:33:52.860000Z',
    edited: '2014-12-20T21:30:21.670000Z',
    url: `${SERVER_URL}/api/vehicles/8/`,
    imageURL: `${SERVER_URL}/images/vehicles/TIE_LN starfighter.png`,
  },
  {
    name: 'Snowspeeder',
    model: 't-47 airspeeder',
    manufacturer: 'Incom corporation',
    cost_in_credits: 'unknown',
    length: '4.5',
    max_atmosphering_speed: '650',
    crew: '2',
    passengers: '0',
    cargo_capacity: '10',
    consumables: 'none',
    vehicle_class: 'airspeeder',
    pilots: [`${SERVER_URL}/api/people/1/`, `${SERVER_URL}/api/people/18/`],
    films: [`${SERVER_URL}/api/films/2/`],
    created: '2014-12-15T12:22:12Z',
    edited: '2014-12-20T21:30:21.672000Z',
    url: `${SERVER_URL}/api/vehicles/14/`,
    imageURL: `${SERVER_URL}/images/vehicles/Snowspeeder.png`,
  },
  {
    name: 'TIE bomber',
    model: 'TIE/sa bomber',
    manufacturer: 'Sienar Fleet Systems',
    cost_in_credits: 'unknown',
    length: '7.8',
    max_atmosphering_speed: '850',
    crew: '1',
    passengers: '0',
    cargo_capacity: 'none',
    consumables: '2 days',
    vehicle_class: 'space/planetary bomber',
    pilots: [],
    films: [`${SERVER_URL}/api/films/2/`, `${SERVER_URL}/api/films/3/`],
    created: '2014-12-15T12:33:15.838000Z',
    edited: '2014-12-20T21:30:21.675000Z',
    url: `${SERVER_URL}/api/vehicles/16/`,
    imageURL: `${SERVER_URL}/images/vehicles/TIE_sa bomber.png`,
  },
  {
    name: 'AT-AT',
    model: 'All Terrain Armored Transport',
    manufacturer: 'Kuat Drive Yards, Imperial Department of Military Research',
    cost_in_credits: 'unknown',
    length: '20',
    max_atmosphering_speed: '60',
    crew: '5',
    passengers: '40',
    cargo_capacity: '1000',
    consumables: 'unknown',
    vehicle_class: 'assault walker',
    pilots: [],
    films: [`${SERVER_URL}/api/films/2/`, `${SERVER_URL}/api/films/3/`],
    created: '2014-12-15T12:38:25.937000Z',
    edited: '2014-12-20T21:30:21.677000Z',
    url: `${SERVER_URL}/api/vehicles/18/`,
    imageURL: `${SERVER_URL}/images/vehicles/All Terrain Armored Transport.png`,
  },
  {
    name: 'AT-ST',
    model: 'All Terrain Scout Transport',
    manufacturer: 'Kuat Drive Yards, Imperial Department of Military Research',
    cost_in_credits: 'unknown',
    length: '2',
    max_atmosphering_speed: '90',
    crew: '2',
    passengers: '0',
    cargo_capacity: '200',
    consumables: 'none',
    vehicle_class: 'walker',
    pilots: [`${SERVER_URL}/api/people/13/`],
    films: [`${SERVER_URL}/api/films/2/`, `${SERVER_URL}/api/films/3/`],
    created: '2014-12-15T12:46:42.384000Z',
    edited: '2014-12-20T21:30:21.679000Z',
    url: `${SERVER_URL}/api/vehicles/19/`,
    imageURL: `${SERVER_URL}/images/vehicles/AT-ST.png`,
  },
  {
    name: 'Storm IV Twin-Pod cloud car',
    model: 'Storm IV Twin-Pod',
    manufacturer: 'Bespin Motors',
    cost_in_credits: '75000',
    length: '7',
    max_atmosphering_speed: '1500',
    crew: '2',
    passengers: '0',
    cargo_capacity: '10',
    consumables: '1 day',
    vehicle_class: 'repulsorcraft',
    pilots: [],
    films: [`${SERVER_URL}/api/films/2/`],
    created: '2014-12-15T12:58:50.530000Z',
    edited: '2014-12-20T21:30:21.681000Z',
    url: `${SERVER_URL}/api/vehicles/20/`,
    imageURL: `${SERVER_URL}/images/vehicles/Storm IV Twin-Pod cloud car.png`,
  },
  {
    name: 'Sail barge',
    model: 'Modified Luxury Sail Barge',
    manufacturer: 'Ubrikkian Industries Custom Vehicle Division',
    cost_in_credits: '285000',
    length: '30',
    max_atmosphering_speed: '100',
    crew: '26',
    passengers: '500',
    cargo_capacity: '2000000',
    consumables: 'Live food tanks',
    vehicle_class: 'sail barge',
    pilots: [],
    films: [`${SERVER_URL}/api/films/3/`],
    created: '2014-12-18T10:44:14.217000Z',
    edited: '2014-12-20T21:30:21.684000Z',
    url: `${SERVER_URL}/api/vehicles/24/`,
    imageURL: `${SERVER_URL}/images/vehicles/Sail barge.png`,
  },
  {
    name: 'Bantha-II cargo skiff',
    model: 'Bantha-II',
    manufacturer: 'Ubrikkian Industries',
    cost_in_credits: '8000',
    length: '9.5',
    max_atmosphering_speed: '250',
    crew: '5',
    passengers: '16',
    cargo_capacity: '135000',
    consumables: '1 day',
    vehicle_class: 'repulsorcraft cargo skiff',
    pilots: [],
    films: [`${SERVER_URL}/api/films/3/`],
    created: '2014-12-18T10:48:03.208000Z',
    edited: '2014-12-20T21:30:21.688000Z',
    url: `${SERVER_URL}/api/vehicles/25/`,
    imageURL: `${SERVER_URL}/images/vehicles/Bantha-II cargo skiff.png`,
  },
  {
    name: 'TIE/IN interceptor',
    model: 'Twin Ion Engine Interceptor',
    manufacturer: 'Sienar Fleet Systems',
    cost_in_credits: 'unknown',
    length: '9.6',
    max_atmosphering_speed: '1250',
    crew: '1',
    passengers: '0',
    cargo_capacity: '75',
    consumables: '2 days',
    vehicle_class: 'starfighter',
    pilots: [],
    films: [`${SERVER_URL}/api/films/3/`],
    created: '2014-12-18T10:50:28.225000Z',
    edited: '2014-12-20T21:30:21.691000Z',
    url: `${SERVER_URL}/api/vehicles/26/`,
    imageURL: `${SERVER_URL}/images/vehicles/TIE_IN interceptor.png`,
  },
  {
    name: 'Imperial Speeder Bike',
    model: '74-Z speeder bike',
    manufacturer: 'Aratech Repulsor Company',
    cost_in_credits: '8000',
    length: '3',
    max_atmosphering_speed: '360',
    crew: '1',
    passengers: '1',
    cargo_capacity: '4',
    consumables: '1 day',
    vehicle_class: 'speeder',
    pilots: [`${SERVER_URL}/api/people/1/`, `${SERVER_URL}/api/people/5/`],
    films: [`${SERVER_URL}/api/films/3/`],
    created: '2014-12-18T11:20:04.625000Z',
    edited: '2014-12-20T21:30:21.693000Z',
    url: `${SERVER_URL}/api/vehicles/30/`,
    imageURL: `${SERVER_URL}/images/vehicles/Imperial Speeder Bike.png`,
  },
  {
    name: 'Vulture Droid',
    model: 'Vulture-class droid starfighter',
    manufacturer: 'Haor Chall Engineering, Baktoid Armor Workshop',
    cost_in_credits: 'unknown',
    length: '3.5',
    max_atmosphering_speed: '1200',
    crew: '0',
    passengers: '0',
    cargo_capacity: '0',
    consumables: 'none',
    vehicle_class: 'starfighter',
    pilots: [],
    films: [`${SERVER_URL}/api/films/4/`, `${SERVER_URL}/api/films/6/`],
    created: '2014-12-19T17:09:53.584000Z',
    edited: '2014-12-20T21:30:21.697000Z',
    url: `${SERVER_URL}/api/vehicles/33/`,
    imageURL: `${SERVER_URL}/images/vehicles/Vulture Droid.png`,
  },
  {
    name: 'Multi-Troop Transport',
    model: 'Multi-Troop Transport',
    manufacturer: 'Baktoid Armor Workshop',
    cost_in_credits: '138000',
    length: '31',
    max_atmosphering_speed: '35',
    crew: '4',
    passengers: '112',
    cargo_capacity: '12000',
    consumables: 'unknown',
    vehicle_class: 'repulsorcraft',
    pilots: [],
    films: [`${SERVER_URL}/api/films/4/`],
    created: '2014-12-19T17:12:04.400000Z',
    edited: '2014-12-20T21:30:21.700000Z',
    url: `${SERVER_URL}/api/vehicles/34/`,
    imageURL: `${SERVER_URL}/images/vehicles/Multi-Troop Transport.png`,
  },
  {
    name: 'Armored Assault Tank',
    model: 'Armoured Assault Tank',
    manufacturer: 'Baktoid Armor Workshop',
    cost_in_credits: 'unknown',
    length: '9.75',
    max_atmosphering_speed: '55',
    crew: '4',
    passengers: '6',
    cargo_capacity: 'unknown',
    consumables: 'unknown',
    vehicle_class: 'repulsorcraft',
    pilots: [],
    films: [`${SERVER_URL}/api/films/4/`],
    created: '2014-12-19T17:13:29.799000Z',
    edited: '2014-12-20T21:30:21.703000Z',
    url: `${SERVER_URL}/api/vehicles/35/`,
    imageURL: `${SERVER_URL}/images/vehicles/Armored Assault Tank.png`,
  },
  {
    name: 'Single Trooper Aerial Platform',
    model: 'Single Trooper Aerial Platform',
    manufacturer: 'Baktoid Armor Workshop',
    cost_in_credits: '2500',
    length: '2',
    max_atmosphering_speed: '400',
    crew: '1',
    passengers: '0',
    cargo_capacity: 'none',
    consumables: 'none',
    vehicle_class: 'repulsorcraft',
    pilots: [],
    films: [`${SERVER_URL}/api/films/4/`],
    created: '2014-12-19T17:15:09.511000Z',
    edited: '2014-12-20T21:30:21.705000Z',
    url: `${SERVER_URL}/api/vehicles/36/`,
    imageURL: `${SERVER_URL}/images/vehicles/Single Trooper Aerial Platform.png`,
  },
  {
    name: 'C-9979 landing craft',
    model: 'C-9979 landing craft',
    manufacturer: 'Haor Chall Engineering',
    cost_in_credits: '200000',
    length: '210',
    max_atmosphering_speed: '587',
    crew: '140',
    passengers: '284',
    cargo_capacity: '1800000',
    consumables: '1 day',
    vehicle_class: 'landing craft',
    pilots: [],
    films: [`${SERVER_URL}/api/films/4/`],
    created: '2014-12-19T17:20:36.373000Z',
    edited: '2014-12-20T21:30:21.707000Z',
    url: `${SERVER_URL}/api/vehicles/37/`,
    imageURL: `${SERVER_URL}/images/vehicles/C-9979 landing craft.png`,
  },
  {
    name: 'Tribubble bongo',
    model: 'Tribubble bongo',
    manufacturer: 'Otoh Gunga Bongameken Cooperative',
    cost_in_credits: 'unknown',
    length: '15',
    max_atmosphering_speed: '85',
    crew: '1',
    passengers: '2',
    cargo_capacity: '1600',
    consumables: 'unknown',
    vehicle_class: 'submarine',
    pilots: [`${SERVER_URL}/api/people/10/`, `${SERVER_URL}/api/people/32/`],
    films: [`${SERVER_URL}/api/films/4/`],
    created: '2014-12-19T17:37:37.924000Z',
    edited: '2014-12-20T21:30:21.710000Z',
    url: `${SERVER_URL}/api/vehicles/38/`,
    imageURL: `${SERVER_URL}/images/vehicles/Tribubble bongo.png`,
  },
  {
    name: 'Sith speeder',
    model: 'FC-20 speeder bike',
    manufacturer: 'Razalon',
    cost_in_credits: '4000',
    length: '1.5',
    max_atmosphering_speed: '180',
    crew: '1',
    passengers: '0',
    cargo_capacity: '2',
    consumables: 'unknown',
    vehicle_class: 'speeder',
    pilots: [`${SERVER_URL}/api/people/44/`],
    films: [`${SERVER_URL}/api/films/4/`],
    created: '2014-12-20T10:09:56.095000Z',
    edited: '2014-12-20T21:30:21.712000Z',
    url: `${SERVER_URL}/api/vehicles/42/`,
    imageURL: `${SERVER_URL}/images/vehicles/Sith speeder.png`,
  },
  {
    name: 'Zephyr-G swoop bike',
    model: 'Zephyr-G swoop bike',
    manufacturer: 'Mobquet Swoops and Speeders',
    cost_in_credits: '5750',
    length: '3.68',
    max_atmosphering_speed: '350',
    crew: '1',
    passengers: '1',
    cargo_capacity: '200',
    consumables: 'none',
    vehicle_class: 'repulsorcraft',
    pilots: [`${SERVER_URL}/api/people/11/`],
    films: [`${SERVER_URL}/api/films/5/`],
    created: '2014-12-20T16:24:16.026000Z',
    edited: '2014-12-20T21:30:21.714000Z',
    url: `${SERVER_URL}/api/vehicles/44/`,
    imageURL: `${SERVER_URL}/images/vehicles/Zephyr-G swoop.png`,
  },
  {
    name: 'Koro-2 Exodrive airspeeder',
    model: 'Koro-2 Exodrive airspeeder',
    manufacturer: 'Desler Gizh Outworld Mobility Corporation',
    cost_in_credits: 'unknown',
    length: '6.6',
    max_atmosphering_speed: '800',
    crew: '1',
    passengers: '1',
    cargo_capacity: '80',
    consumables: 'unknown',
    vehicle_class: 'airspeeder',
    pilots: [`${SERVER_URL}/api/people/70/`],
    films: [`${SERVER_URL}/api/films/5/`],
    created: '2014-12-20T17:17:33.526000Z',
    edited: '2014-12-20T21:30:21.716000Z',
    url: `${SERVER_URL}/api/vehicles/45/`,
    imageURL: `${SERVER_URL}/images/vehicles/Koro-2 all-environment exodrive airspeeder.png`,
  },
  {
    name: 'XJ-6 airspeeder',
    model: 'XJ-6 airspeeder',
    manufacturer: 'Narglatch AirTech prefabricated kit',
    cost_in_credits: 'unknown',
    length: '6.23',
    max_atmosphering_speed: '720',
    crew: '1',
    passengers: '1',
    cargo_capacity: 'unknown',
    consumables: 'unknown',
    vehicle_class: 'airspeeder',
    pilots: [`${SERVER_URL}/api/people/11/`],
    films: [`${SERVER_URL}/api/films/5/`],
    created: '2014-12-20T17:19:19.991000Z',
    edited: '2014-12-20T21:30:21.719000Z',
    url: `${SERVER_URL}/api/vehicles/46/`,
    imageURL: `${SERVER_URL}/images/vehicles/XJ-6 airspeeder.png`,
  },
  {
    name: 'LAAT/i',
    model: 'Low Altitude Assault Transport/infrantry',
    manufacturer: 'Rothana Heavy Engineering',
    cost_in_credits: 'unknown',
    length: '17.4',
    max_atmosphering_speed: '620',
    crew: '6',
    passengers: '30',
    cargo_capacity: '170',
    consumables: 'unknown',
    vehicle_class: 'gunship',
    pilots: [],
    films: [`${SERVER_URL}/api/films/5/`, `${SERVER_URL}/api/films/6/`],
    created: '2014-12-20T18:01:21.014000Z',
    edited: '2014-12-20T21:30:21.723000Z',
    url: `${SERVER_URL}/api/vehicles/50/`,
    imageURL: `${SERVER_URL}/images/vehicles/LAAT_i.png`,
  },
  {
    name: 'LAAT/c',
    model: 'Low Altitude Assault Transport/carrier',
    manufacturer: 'Rothana Heavy Engineering',
    cost_in_credits: 'unknown',
    length: '28.82',
    max_atmosphering_speed: '620',
    crew: '1',
    passengers: '0',
    cargo_capacity: '40000',
    consumables: 'unknown',
    vehicle_class: 'gunship',
    pilots: [],
    films: [`${SERVER_URL}/api/films/5/`],
    created: '2014-12-20T18:02:46.802000Z',
    edited: '2014-12-20T21:30:21.725000Z',
    url: `${SERVER_URL}/api/vehicles/51/`,
    imageURL: `${SERVER_URL}/images/vehicles/LAAT_c.png`,
  },
  {
    name: 'AT-TE',
    model: 'All Terrain Tactical Enforcer',
    manufacturer: 'Rothana Heavy Engineering, Kuat Drive Yards',
    cost_in_credits: 'unknown',
    length: '13.2',
    max_atmosphering_speed: '60',
    crew: '6',
    passengers: '36',
    cargo_capacity: '10000',
    consumables: '21 days',
    vehicle_class: 'walker',
    pilots: [],
    films: [`${SERVER_URL}/api/films/5/`, `${SERVER_URL}/api/films/6/`],
    created: '2014-12-20T18:10:07.560000Z',
    edited: '2014-12-20T21:30:21.728000Z',
    url: `${SERVER_URL}/api/vehicles/53/`,
    imageURL: `${SERVER_URL}/images/vehicles/AT-TE.png`,
  },
  {
    name: 'SPHA',
    model: 'Self-Propelled Heavy Artillery',
    manufacturer: 'Rothana Heavy Engineering',
    cost_in_credits: 'unknown',
    length: '140',
    max_atmosphering_speed: '35',
    crew: '25',
    passengers: '30',
    cargo_capacity: '500',
    consumables: '7 days',
    vehicle_class: 'walker',
    pilots: [],
    films: [`${SERVER_URL}/api/films/5/`],
    created: '2014-12-20T18:12:32.315000Z',
    edited: '2014-12-20T21:30:21.731000Z',
    url: `${SERVER_URL}/api/vehicles/54/`,
    imageURL: `${SERVER_URL}/images/vehicles/Self-Propelled Heavy Artillery.png`,
  },
  {
    name: 'Flitknot speeder',
    model: 'Flitknot speeder',
    manufacturer: 'Huppla Pasa Tisc Shipwrights Collective',
    cost_in_credits: '8000',
    length: '2',
    max_atmosphering_speed: '634',
    crew: '1',
    passengers: '0',
    cargo_capacity: 'unknown',
    consumables: 'unknown',
    vehicle_class: 'speeder',
    pilots: [`${SERVER_URL}/api/people/67/`],
    films: [`${SERVER_URL}/api/films/5/`],
    created: '2014-12-20T18:15:20.312000Z',
    edited: '2014-12-20T21:30:21.735000Z',
    url: `${SERVER_URL}/api/vehicles/55/`,
    imageURL: `${SERVER_URL}/images/vehicles/Flitknot speeder.png`,
  },
  {
    name: 'Neimoidian shuttle',
    model: 'Sheathipede-class transport shuttle',
    manufacturer: 'Haor Chall Engineering',
    cost_in_credits: 'unknown',
    length: '20',
    max_atmosphering_speed: '880',
    crew: '2',
    passengers: '6',
    cargo_capacity: '1000',
    consumables: '7 days',
    vehicle_class: 'transport',
    pilots: [],
    films: [`${SERVER_URL}/api/films/5/`, `${SERVER_URL}/api/films/6/`],
    created: '2014-12-20T18:25:44.912000Z',
    edited: '2014-12-20T21:30:21.739000Z',
    url: `${SERVER_URL}/api/vehicles/56/`,
    imageURL: `${SERVER_URL}/images/vehicles/Neimoidian shuttle.png`,
  },
  {
    name: 'Geonosian starfighter',
    model: 'Nantex-class territorial defense',
    manufacturer: 'Huppla Pasa Tisc Shipwrights Collective',
    cost_in_credits: 'unknown',
    length: '9.8',
    max_atmosphering_speed: '20000',
    crew: '1',
    passengers: '0',
    cargo_capacity: 'unknown',
    consumables: 'unknown',
    vehicle_class: 'starfighter',
    pilots: [],
    films: [`${SERVER_URL}/api/films/5/`],
    created: '2014-12-20T18:34:12.541000Z',
    edited: '2014-12-20T21:30:21.742000Z',
    url: `${SERVER_URL}/api/vehicles/57/`,
    imageURL: `${SERVER_URL}/images/vehicles/Geonosian starfighter.png`,
  },
  {
    name: 'Tsmeu-6 personal wheel bike',
    model: 'Tsmeu-6 personal wheel bike',
    manufacturer: 'Z-Gomot Ternbuell Guppat Corporation',
    cost_in_credits: '15000',
    length: '3.5',
    max_atmosphering_speed: '330',
    crew: '1',
    passengers: '1',
    cargo_capacity: '10',
    consumables: 'none',
    vehicle_class: 'wheeled walker',
    pilots: [`${SERVER_URL}/api/people/79/`],
    films: [`${SERVER_URL}/api/films/6/`],
    created: '2014-12-20T19:43:54.870000Z',
    edited: '2014-12-20T21:30:21.745000Z',
    url: `${SERVER_URL}/api/vehicles/60/`,
    imageURL: `${SERVER_URL}/images/vehicles/Tsmeu-6 personal wheel bike.png`,
  },
  {
    name: 'Emergency Firespeeder',
    model: 'Fire suppression speeder',
    manufacturer: 'unknown',
    cost_in_credits: 'unknown',
    length: 'unknown',
    max_atmosphering_speed: 'unknown',
    crew: '2',
    passengers: 'unknown',
    cargo_capacity: 'unknown',
    consumables: 'unknown',
    vehicle_class: 'fire suppression ship',
    pilots: [],
    films: [`${SERVER_URL}/api/films/6/`],
    created: '2014-12-20T19:50:58.559000Z',
    edited: '2014-12-20T21:30:21.749000Z',
    url: `${SERVER_URL}/api/vehicles/62/`,
    imageURL: `${SERVER_URL}/images/vehicles/Emergency Firespeeder.png`,
  },
  {
    name: 'Droid tri-fighter',
    model: 'tri-fighter',
    manufacturer: 'Colla Designs, Phlac-Arphocc Automata Industries',
    cost_in_credits: '20000',
    length: '5.4',
    max_atmosphering_speed: '1180',
    crew: '1',
    passengers: '0',
    cargo_capacity: '0',
    consumables: 'none',
    vehicle_class: 'droid starfighter',
    pilots: [],
    films: [`${SERVER_URL}/api/films/6/`],
    created: '2014-12-20T20:05:19.992000Z',
    edited: '2014-12-20T21:30:21.752000Z',
    url: `${SERVER_URL}/api/vehicles/67/`,
    imageURL: `${SERVER_URL}/images/vehicles/Droid tri-fighter.png`,
  },
  {
    name: 'Oevvaor jet catamaran',
    model: 'Oevvaor jet catamaran',
    manufacturer: 'Appazanna Engineering Works',
    cost_in_credits: '12125',
    length: '15.1',
    max_atmosphering_speed: '420',
    crew: '2',
    passengers: '2',
    cargo_capacity: '50',
    consumables: '3 days',
    vehicle_class: 'airspeeder',
    pilots: [],
    films: [`${SERVER_URL}/api/films/6/`],
    created: '2014-12-20T20:20:53.931000Z',
    edited: '2014-12-20T21:30:21.756000Z',
    url: `${SERVER_URL}/api/vehicles/69/`,
    imageURL: `${SERVER_URL}/images/vehicles/Oevvaor jet catamaran.png`,
  },
  {
    name: 'Raddaugh Gnasp fluttercraft',
    model: 'Raddaugh Gnasp fluttercraft',
    manufacturer: 'Appazanna Engineering Works',
    cost_in_credits: '14750',
    length: '7',
    max_atmosphering_speed: '310',
    crew: '2',
    passengers: '0',
    cargo_capacity: '20',
    consumables: 'none',
    vehicle_class: 'air speeder',
    pilots: [],
    films: [`${SERVER_URL}/api/films/6/`],
    created: '2014-12-20T20:21:55.648000Z',
    edited: '2014-12-20T21:30:21.759000Z',
    url: `${SERVER_URL}/api/vehicles/70/`,
    imageURL: `${SERVER_URL}/images/vehicles/Raddaugh Gnasp fluttercraft.png`,
  },
  {
    name: 'Clone turbo tank',
    model: 'HAVw A6 Juggernaut',
    manufacturer: 'Kuat Drive Yards',
    cost_in_credits: '350000',
    length: '49.4',
    max_atmosphering_speed: '160',
    crew: '20',
    passengers: '300',
    cargo_capacity: '30000',
    consumables: '20 days',
    vehicle_class: 'wheeled walker',
    pilots: [],
    films: [`${SERVER_URL}/api/films/6/`],
    created: '2014-12-20T20:24:45.587000Z',
    edited: '2014-12-20T21:30:21.762000Z',
    url: `${SERVER_URL}/api/vehicles/71/`,
    imageURL: `${SERVER_URL}/images/vehicles/Clone turbo tank.png`,
  },
  {
    name: 'Corporate Alliance tank droid',
    model: 'NR-N99 Persuader-class droid enforcer',
    manufacturer: 'Techno Union',
    cost_in_credits: '49000',
    length: '10.96',
    max_atmosphering_speed: '100',
    crew: '0',
    passengers: '4',
    cargo_capacity: 'none',
    consumables: 'none',
    vehicle_class: 'droid tank',
    pilots: [],
    films: [`${SERVER_URL}/api/films/6/`],
    created: '2014-12-20T20:26:55.522000Z',
    edited: '2014-12-20T21:30:21.765000Z',
    url: `${SERVER_URL}/api/vehicles/72/`,
    imageURL: `${SERVER_URL}/images/vehicles/Corporate Alliance tank droid.png`,
  },
  {
    name: 'Droid gunship',
    model: 'HMP droid gunship',
    manufacturer: 'Baktoid Fleet Ordnance, Haor Chall Engineering',
    cost_in_credits: '60000',
    length: '12.3',
    max_atmosphering_speed: '820',
    crew: '0',
    passengers: '0',
    cargo_capacity: '0',
    consumables: 'none',
    vehicle_class: 'airspeeder',
    pilots: [],
    films: [`${SERVER_URL}/api/films/6/`],
    created: '2014-12-20T20:32:05.687000Z',
    edited: '2014-12-20T21:30:21.768000Z',
    url: `${SERVER_URL}/api/vehicles/73/`,
    imageURL: `${SERVER_URL}/images/vehicles/Droid gunship.png`,
  },
  {
    name: 'AT-RT',
    model: 'All Terrain Recon Transport',
    manufacturer: 'Kuat Drive Yards',
    cost_in_credits: '40000',
    length: '3.2',
    max_atmosphering_speed: '90',
    crew: '1',
    passengers: '0',
    cargo_capacity: '20',
    consumables: '1 day',
    vehicle_class: 'walker',
    pilots: [],
    films: [`${SERVER_URL}/api/films/6/`],
    created: '2014-12-20T20:47:49.189000Z',
    edited: '2014-12-20T21:30:21.772000Z',
    url: `${SERVER_URL}/api/vehicles/76/`,
    imageURL: `${SERVER_URL}/images/vehicles/All Terrain Reconnaissance Transport.png`,
  },
];
