import axios from 'axios';

const store = (lat, lng) => {
  return axios.get('https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json', {
    params: {
      lat: lat,
      lng: lng,
      m: 1000
    }
  });
};

export default store;
