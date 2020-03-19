<template>
  <div :class="['store-map',{'store-map--active': activeMap}]">
    <span class="store-map__location"><i class="el-icon-location"></i></span>
    <div id="map" class="store-map__area"></div>
  </div>
</template>

<script>
  import _ from 'lodash';
  import VueScrollTo from 'vue-scrollto';

  export default {
    name: 'StoreMap',

    props: ['stores', 'position', 'activeMap'],

    data() {
      return {
        map: null,
        active: false,
        markerList: [],
        overlayList: []
      };
    },

    watch: {
      position: {
        handler(d) {
          this.map.setCenter(new window.kakao.maps.LatLng(d.lat, d.lng));
        },
        deep: true
      },

      stores: {
        handler() {
          this.removeMarker();
          this.addMarker();
        },
        deep: true
      }
    },

    methods: {
      removeMarker() {
        _.forEach(this.markerList, (marker) => {
          marker.setMap(null);
        });
        _.forEach(this.overlayList, (overlay) => {
          overlay.setMap(null);
        });

        this.markerList = [];
        this.overlayList = [];
      },

      addMarker() {
        _.forEach(this.stores, (storeList) => {
          _.forEach(storeList, (store) => {

            let position = new window.kakao.maps.LatLng(store.lat, store.lng);

            let marker = new window.kakao.maps.Marker({
              map: this.map,
              position: position,
              image: new window.kakao.maps.MarkerImage(`https://demoon84.github.io/mask/dist/${store.remain_stat}.png`, new window.kakao.maps.Size(16, 22))
            });

            marker.code = store.code;
            this.markerList.push(marker);

            window.kakao.maps.event.addListener(marker, 'click', () => {
              this.$emit('updateActiveStore', marker.code);
              this.map.panTo(marker.getPosition());

              this.$nextTick(() => {
                VueScrollTo.scrollTo(`#store-${marker.code}`, {
                  duration: 500,
                  offset: -(window.innerHeight / 2) - 70
                });
              });
            });

            let overlay = new window.kakao.maps.CustomOverlay({
              map: this.map,
              position: position,
              content: `<div style="font-size: 10px; background: rgba(255,255,255,.7);padding: 1px 4px;border-radius: 12px;border: 1px solid #ccc;">${store.name}</div>`,
              yAnchor: 0
            });

            this.overlayList.push(overlay);
          });
        });
      },

      updateCenterPosition: _.debounce(function() {
        let latlng = this.map.getCenter();
        this.$emit('updateStoreMapCenter', {lat: latlng.getLat(), lng: latlng.getLng()});
      }, 250)
    },

    mounted() {
      this.map = new window.kakao.maps.Map(document.getElementById('map'), {
        center: new window.kakao.maps.LatLng(this.position.lat, this.position.lng),
        level: 3
      });

      window.kakao.maps.event.addListener(this.map, 'center_changed', () => {
        this.updateCenterPosition();
      });

      this.addMarker();
    }
  };
</script>

<style lang="scss">
  .store-map {
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 50vh;
    overflow: hidden;
    z-index: 1;

    &--active {
      z-index: 3;
    }
  }

  .store-map__area {
    width: 100%;
    height: 100%;
  }

  .store-map__location {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    margin-top: -10px;
    font-size: 28px;
    transform: translateX(-50%) translateY(-50%);
  }
</style>
