<template>
  <div id="app">
    <Store v-if="ready" :stores="stores" :position="position" />

    <div class="last-update-time">데이터 업데이트: {{lastUpdateTime}}</div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Store from './components/TheStore';
  import {Loading} from 'element-ui';
  import _ from 'lodash';
  import moment from 'moment';

  export default {
    name: 'App',

    components: {
      Store
    },

    data() {
      return {
        stores: {
          plenty: [],
          some: [],
          few: [],
          empty: []
        },
        loading: null,
        position: null,
        ready: false
      };
    },

    computed: {
      lastUpdateTime() {
        if (this.stores.plenty[0]) {
          return moment(this.stores.plenty[0].created_at).format('LLL');
        }

        if (this.stores.empty[0]) {
          return moment(this.stores.empty[0].created_at).format('LLL');
        }

        return '';
      }
    },

    methods: {
      distance(lat1, lon1, lat2, lon2, unit) {
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
    },

    created() {
      this.loading = Loading.service({fullscreen: true});

      moment.locale('ko');
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
                 m: 1500
               }
             })
             .then((response) => {
               let data = response.data.stores;
               _.forEach(data, (d) => {
                 d.distance = Math.floor(this.distance(d.lat, d.lng, position.coords.latitude, position.coords.longitude, 'K') * 1000);
               });

               let sortData = _.sortBy(data, [function(o) { return o.distance; }]);

               _.forEach(sortData, (d) => {
                 if (d.remain_stat) {
                   this.stores[d.remain_stat].push(d);
                   d.stock_at = moment(d.stock_at).format('LLLL');
                 }
               });
               this.ready = true;
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

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #app {
    font-family: sans-serif;
  }

  .last-update-time {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 12px;
    background: rgba(255, 255, 255, 0.85);
    padding: 10px;
    z-index: 10;
    color: #000;
  }
</style>
