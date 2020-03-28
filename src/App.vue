<template>
  <div id="app">
    <StoreMap v-if="ready"
              :stores="stores"
              :position="position"
              :activeMap="activeMap"
              @updateActiveStore="handleUpdateActiveStore"
              @updateZoomMap="handleUpdateZoomMap"
              @updateStoreMapCenter="handleUpdateStoreMapCenter" />

    <div v-show="enableCover" class="store-map-cover"></div>

    <DataInfo :time="time"
              :canFind="canFind"
              :activeMap="activeMap"
              @updateFindData="handleUpdateFindData" />

    <div v-if="noData" :class='["store-no-data", {"store-no-data--active-map": noData && activeMap}]'>
      검색 주변 1Km 내에 구매 가능한 곳이 없습니다.
      <br>
      <el-button
        v-if="!this.activeMap"
        type="danger"
        icon="el-icon-map-location"
        class="store-map-open"
        size="mini"
        @click="handleOpenMap">지도에서 이동하여 검색
      </el-button>
    </div>

    <StoreList
      v-if="!noData"
      :stores="stores"
      :activeMap="activeMap"
      :activeStore="activeStore"
      @updateCenterPosition="handleUpdateCenterPosition" />

    <el-button v-if="activeMap"
               type="danger"
               icon="el-icon-close"
               circle
               class="store-map-close"
               @click="handleCloseMap"></el-button>
  </div>
</template>

<script>
  import {Loading} from 'element-ui';
  import _ from 'lodash';
  import moment from 'moment';
  import store from './store';
  import VueScrollTo from 'vue-scrollto';

  import DataInfo from './components/DataInfo';
  import StoreMap from './components/StoreMap';
  import StoreList from './components/StoreList';

  export default {
    name: 'App',

    components: {
      StoreMap,
      DataInfo,
      StoreList
    },

    data() {
      return {
        loading: null,

        ready: false,

        activeStore: '',

        canFind: false,

        storesDataLength: 0,

        activeMap: false,

        stores: {
          plenty: [],
          some: [],
          few: [],
          empty: [],
          break: []
        },

        position: {
          lat: 0,
          lng: 0
        },

        mapCenter: {
          lat: 0,
          lng: 0
        }
      };
    },

    computed: {
      time() {
        if (this.stores.plenty[0]) {
          return this.stores.plenty[0];
        }

        if (this.stores.some[0]) {
          return this.stores.some[0];
        }

        if (this.stores.few[0]) {
          return this.stores.few[0];
        }

        if (this.stores.empty[0]) {
          return this.stores.empty[0];
        }

        if (this.stores.break[0]) {
          return this.stores.break[0];
        }

        return false;
      },

      enableCover() {
        return (this.loading && !this.activeMap) || !this.activeMap;
      },

      noData() {
        return (this.storesDataLength === 0) && !this.loading;
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
      },

      handleOpenMap() {
        this.activeMap = true;
      },

      handleCloseMap() {
        this.activeMap = false;
        this.activeStore = false;
      },

      handleUpdateZoomMap() {
        this.position = this.mapCenter;
      },

      handleUpdateFindData() {
        this.loading = Loading.service({
          fullscreen: true,
          background: 'rgb(255, 255, 255, 0.95)'
        });
        this.getStoreList(this.mapCenter.lat, this.mapCenter.lng);
      },

      handleUpdateCenterPosition(store) {
        this.position = {
          lat: store.lat,
          lng: store.lng
        };

        this.mapCenter = this.position;
        this.activeMap = true;
        this.activeStore = store.code;

        this.$nextTick(() => {
          VueScrollTo.scrollTo(`#store-${store.code}`, {
            duration: 500,
            offset: -(window.innerHeight / 2) - 70
          });
        });
      },

      handleUpdateActiveStore(storeCode) {
        this.activeStore = storeCode;
      },

      handleUpdateStoreMapCenter(position) {
        this.mapCenter = position;
        this.canFind = true;
      },

      async getStoreList(lat, lng) {
        this.canFind = false;

        this.stores = {
          plenty: [],
          some: [],
          few: [],
          empty: [],
          break: []
        };

        let data = (await store(lat, lng)).data.stores;

        // this.storesDataLength = 0;
        this.storesDataLength = data.length;

        _.forEach(data, (d) => {
          d.distance = Math.floor(this.distance(d.lat, d.lng, lat, lng, 'K') * 1000);
        });

        let sortData = _.sortBy(data, [function(o) { return o.distance; }]);

        _.forEach(sortData, (d) => {
          if (d.remain_stat) {
            d.stock_at = moment(d.stock_at).format('LLLL');
            this.stores[d.remain_stat].push(d);
          }
        });

        this.ready = true;

        setTimeout(() => {
          this.loading.close();
          this.loading = false;
        }, 500);
      }
    },

    created() {
      this.loading = Loading.service({
        fullscreen: true,
        background: 'rgba(255, 255, 255, 0.95)'
      });

      navigator.geolocation.getCurrentPosition((position) => {
        this.position = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        this.mapCenter = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        this.getStoreList(position.coords.latitude, position.coords.longitude);
      });
    }
  };
</script>

<style lang="scss">
  html {
    -webkit-text-size-adjust: 100%;
  }

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

  .store-map-close {
    position: fixed;
    top: 50vh;
    left: 50%;
    transform: translateX(-50%) translateY(-55px);
    z-index: 3;
    opacity: 0.9;
    -webkit-tap-highlight-color: transparent;
  }

  .store-map-open {
    margin-top: 20px !important;
  }

  .store-map-cover {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 2;
  }

  .store-no-data {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100vw;
    background: #fff;
    transform: translateX(-50%) translateY(-50%);
    z-index: 2;
    text-align: center;
    font-size: 12px;

    &--active-map {
      margin-top: 25vh;
    }
  }
</style>
