<template>
  <div id="app">
    <Store :stores="stores" :position="position" />
  </div>
</template>

<script>
  import axios from 'axios';
  import Store from './components/TheStore';
  import {Loading} from 'element-ui';

  export default {
    name: 'App',

    components: {
      Store
    },
    data() {
      return {
        stores: [],
        loading: null,
        position: {}
      };
    },

    created() {
      this.loading = Loading.service({fullscreen: true});

    },

    beforeMount() {
      navigator.geolocation.getCurrentPosition((position) => {

        this.position = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        axios.get('https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json', {
               params: {
                 lat: position.coords.latitude,
                 lng: position.coords.longitude,
                 m: 1000
               }
             })
             .then((response) => {
               let data = response.data.stores;

               function distance(lat1, lon1, lat2, lon2, unit) {
                 if ((lat1 === lat2) && (lon1 === lon2)) {
                   return 0;
                 }
                 else {
                   let radlat1 = Math.PI * lat1 / 180;
                   let radlat2 = Math.PI * lat2 / 180;
                   let theta = lon1 - lon2;
                   let radtheta = Math.PI * theta / 180;
                   let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

                   if (dist > 1) {
                     dist = 1;
                   }

                   dist = Math.acos(dist);
                   dist = dist * 180 / Math.PI;
                   dist = dist * 60 * 1.1515;
                   if (unit === 'K') { dist = dist * 1.609344; }
                   if (unit === 'N') { dist = dist * 0.8684; }
                   return dist;
                 }
               }

               data.forEach((d) => {
                 d.distance = Math.floor(distance(d.lat, d.lng, this.position.lat, this.position.lng, 'K') * 1000);
               });

               this.stores = data;
               this.loading.close();
             });
      }, () => {}, {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
      });
    }
  };
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    padding: 15px;
    font-family: sans-serif;
  }
</style>
