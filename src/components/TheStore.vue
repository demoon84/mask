<template>
  <div :class="['store', {'store--map-view':viewMap}]">
    <div :class="['store__map', {'store__map--active':viewMap}]">
      <div id="map" style="width: 100%; height: 100%"></div>
      <el-button class="store__btn-map-close" icon="el-icon-close" type="danger" circle @click="handleCloseMap"></el-button>
    </div>

    <ul :class="['store__list', {'store__list--active':viewMap}]">
      <template v-for="store in stores">
        <li :key="store.code">
          <div :class="[store.remain_stat, 'stat']">{{getsStatNumber(store.remain_stat)}}</div>
          <div>{{store.name}} <span class="store__distance">({{store.distance}}미터)</span></div>
          <div>{{store.addr}}</div>
          <div v-if="getKoTime(store.stock_at)">{{getKoTime(store.stock_at)}}</div>
          <el-button-group class="store__btn-group">
            <el-button type="warning" size="mini" @click="handleFindLoad(store.name, store.lat, store.lng)">길찾기</el-button>
            <el-button type="success" size="mini" @click="handleViewMap(store.name, store.lat, store.lng)">위치보기</el-button>
          </el-button-group>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'StoreList',

    props: ['stores', 'position'],

    data() {
      return {
        viewMap: false
      };
    },

    methods: {
      handleViewMap(name, lat, lng) {
        this.viewMap = true;

        let mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
              center: new window.kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
              level: 3 // 지도의 확대 레벨
            };

        let map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        let markerPosition = new window.kakao.maps.LatLng(lat, lng);

        let marker = new window.kakao.maps.Marker({
          position: markerPosition
        });

        marker.setMap(map);

        window.kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
          console.log(mouseEvent.latLng);

        });
      },

      handleCloseMap() {
        this.viewMap = false;
      },

      handleFindLoad(name, lat, lng) {
        location.href = `https://map.kakao.com/link/to/${name},${lat},${lng}`;
      },

      getsStatNumber(stat) {
        if (stat === 'plenty') {
          return '100개 이상';
        }
        if (stat === 'some') {
          return '30개~100개';
        }
        if (stat === 'few') {
          return '2개~30개';
        }
        if (stat === 'empty') {
          return '1개 이하';
        }
        return '없음';
      },

      getKoTime(time) {
        if (!time) {
          return false;
        }

        return moment(time).format('LLLL');
      }
    },

    mounted() {
      moment.locale('ko');
    }
  };
</script>

<style lang="scss">
  .store {
    &__map {
      top: 0;
      left: 0;
      right: 0;
      position: fixed;
      height: 300px;
      overflow: hidden;
      z-index: 1;
      opacity: 0;

      &--active {
        opacity: 1;
      }
    }

    &__distance {
      font-weight: bold;
    }

    &__btn-group {
      position: absolute;
      top: 15px;
      right: 15px;
    }

    &__btn-map-close {
      position: fixed;
      top: 250px;
      right: 15px;
      z-index: 2;
    }

    &__list {
      position: relative;
      z-index: 2;
      list-style: none;
      margin: 0;
      padding: 0;

      &--active {
        margin-top: 300px;
        z-index: 0;
      }
    }

    li {
      font-size: 12px;
      border: 1px solid #ccc;
      position: relative;
      list-style: none;
      margin: 15px 0 0 0;
      padding: 15px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      color: #909399;
      line-height: 1.5;

      &:first-child {
        margin-top: 0;
      }
    }

    .stat {
      color: #c3c3c3;
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 16px;
    }

    .plenty {
      color: #67C23A;
    }

    .some {
      color: #E6A23C;
    }

    .few {
      color: #F56C6C;
    }

    .empty {
      color: #909399;
    }
  }
</style>
