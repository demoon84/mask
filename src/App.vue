<template>
  <div id="app">
    <Store :stores="stores" />
  </div>
</template>

<script>
  import axios from 'axios';
  import Store from './components/TheStore';

  export default {
    name: 'App',

    components: {
      Store
    },
    data() {
      return {
        stores: []
      };
    },

    beforeMount() {
      navigator.geolocation.getCurrentPosition((position) => {
        axios.get('https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json', {
               params: {
                 lat: position.coords.latitude,
                 lng: position.coords.longitude,
                 m: 1000
               }
             })
             .then((response) => {
               this.stores = response.data.stores;
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
