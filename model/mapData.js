const Images = [
  {image: require('../assets/banners/locate-banner1.jpg')},
  {image: require('../assets/banners/locate-banner2.jpg')},
  {image: require('../assets/banners/locate-banner3.jpg')},
  {image: require('../assets/banners/locate-banner4.jpg')},
];


const UserPhoto = [
  {image: 'https://source.unsplash.com/random/100x100?sig=1'},
  {image: 'https://source.unsplash.com/random/100x100?sig=2'},
  {image: 'https://source.unsplash.com/random/100x100?sig=3'},
  {image: 'https://source.unsplash.com/random/100x100?sig=4'},
];

export const markers = [
  {
    coordinate: {
      latitude: -7.1464992,
      longitude: -34.7997549,
    },
    title: 'Ladeira do cabo branco',
    description: 'Lugar com vista incrivel.',
    image: Images[0].image,
    rating: 4,
    reviews: 99,
    avatar: UserPhoto[0].image,
  },
  {
    coordinate: {
      latitude: -7.1484892,
      longitude: -34.7962103,
    },
    title: 'Barreira do canbo branco',
    description: 'Lugar de fácio acesso, vista para o mar',
    image: Images[1].image,
    rating: 5,
    reviews: 102,
     avatar: UserPhoto[1].image,
  },
  {
    coordinate: {
      latitude: -7.1656467,
      longitude: -34.797326,
    },
    title: 'Igreja da penha',
    description: 'Uma das mais antigas igrejas da cidade.',
    image: Images[2].image,
    rating: 3,
    reviews: 220,
     avatar: UserPhoto[2].image,
  },
  {
    coordinate: {
      latitude: -7.1612875,
      longitude: -34.7954539,
    },
    title: 'Praia do seixas',
    description: 'This is the fourth best food place',
    image: Images[3].image,
    rating: 4,
    reviews: 48,
     avatar: UserPhoto[3].image,
  },
];

export const mapDarkStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];

export const mapStandardStyle = [
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];
