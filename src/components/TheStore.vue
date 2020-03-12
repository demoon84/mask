<template>
  <div class="store">
    <div class="store__map">
      <div id="map" style="width: 100%; height: 100%"></div>
    </div>

    <div class="store__list">
      <ul>
        <template v-for="store in stores.plenty">
          <li class="store__list-item" :key="store.code">
            <div :class="[store.remain_stat, 'stat']">{{getsStatNumber(store.remain_stat)}}</div>
            <div>{{store.name}} | <span class="store__distance">{{store.distance}}미터</span></div>
            <div>{{store.addr}}</div>

            <div v-if="store.stock_at" class="store__input-time">입고시간: {{store.stock_at}}</div>
            <el-button-group class="store__btn-group">
              <el-button type="warning" size="mini" @click="handleFindLoad(store.name, store.lat, store.lng)">길찾기</el-button>
              <el-button type="success" size="mini" @click="handleViewMap(store.lat, store.lng)">위치보기</el-button>
            </el-button-group>
          </li>
        </template>

        <template v-for="store in stores.some">
          <li class="store__list-item" :key="store.code">
            <div :class="[store.remain_stat, 'stat']">{{getsStatNumber(store.remain_stat)}}</div>
            <div>{{store.name}} | <span class="store__distance">{{store.distance}}미터</span></div>
            <div>{{store.addr}}</div>

            <div v-if="store.stock_at" class="store__input-time">입고시간: {{store.stock_at}}</div>
            <el-button-group class="store__btn-group">
              <el-button type="warning" size="mini" @click="handleFindLoad(store.name, store.lat, store.lng)">길찾기</el-button>
              <el-button type="success" size="mini" @click="handleViewMap(store.lat, store.lng)">위치보기</el-button>
            </el-button-group>
          </li>
        </template>

        <template v-for="store in stores.few">
          <li class="store__list-item" :key="store.code">
            <div :class="[store.remain_stat, 'stat']">{{getsStatNumber(store.remain_stat)}}</div>
            <div>{{store.name}} | <span class="store__distance">{{store.distance}}미터</span></div>
            <div>{{store.addr}}</div>

            <div v-if="store.stock_at" class="store__input-time">입고시간: {{store.stock_at}}</div>
            <el-button-group class="store__btn-group">
              <el-button type="warning" size="mini" @click="handleFindLoad(store.name, store.lat, store.lng)">길찾기</el-button>
              <el-button type="success" size="mini" @click="handleViewMap(store.lat, store.lng)">위치보기</el-button>
            </el-button-group>
          </li>
        </template>

        <template v-for="store in stores.empty">
          <li class="store__list-item sold-out" :key="store.code">
            <div :class="[store.remain_stat, 'stat']">{{getsStatNumber(store.remain_stat)}}</div>
            <div>{{store.name}} | <span class="store__distance">{{store.distance}}미터</span></div>
            <div>{{store.addr}}</div>
            <div v-if="store.stock_at" class="store__input-time">입고시간: {{store.stock_at}}</div>
            <el-button-group class="store__btn-group">
              <el-button type="warning" size="mini" @click="handleFindLoad(store.name, store.lat, store.lng)">길찾기</el-button>
              <el-button type="success" size="mini" @click="handleViewMap(store.lat, store.lng)">위치보기</el-button>
            </el-button-group>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';

  export default {
    name: 'StoreList',

    props: ['stores', 'position'],

    data() {
      return {
        map: null
      };
    },

    methods: {
      handleViewMap(lat, lng) {
        this.map.setCenter(new window.kakao.maps.LatLng(lat, lng));
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
          return '품절';
        }
      }
    },

    mounted() {
      let firstStore;

      this.map = new window.kakao.maps.Map(document.getElementById('map'), {
        center: new window.kakao.maps.LatLng(this.position.lat, this.position.lng),
        level: 3
      });

      _.forEach(this.stores, (storeList) => {

        _.forEach(storeList, (store) => {

          let position = new window.kakao.maps.LatLng(store.lat, store.lng);

          new window.kakao.maps.Marker({
            map: this.map,
            position: position,
            image: new window.kakao.maps.MarkerImage(`https://demoon84.github.io/mask/dist/${store.remain_stat}.png`, new window.kakao.maps.Size(16, 22))
          });
        });
      });

      if (this.stores.plenty[0]) {
        firstStore = this.stores.plenty[0];
      }
      else if (this.stores.some[0]) {
        firstStore = this.stores.some[0];
      }
      else if (this.stores.few[0]) {
        firstStore = this.stores.few[0];
      }

      this.map.setCenter(new window.kakao.maps.LatLng(firstStore.lat, firstStore.lng));
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
      height: 50vh;
      overflow: hidden;
      z-index: 2;
    }

    &__distance {
      font-weight: bold;
      color: #333;
    }

    &__btn-group {
      position: absolute;
      top: 15px;
      right: 15px;
    }

    &__input-time {
      border-top: 1px dotted #c3c3c3;
      margin-top: 5px;
      padding-top: 5px;
    }

    &__list {
      padding: 15px;
      box-sizing: border-box;
      margin-top: 50vh;
      overflow: auto;
    }

    &__list-item {
      font-size: 12px;
      border: 1px solid #ccc;
      position: relative;
      list-style: none;
      margin: 10px 0 0 0;
      padding: 10px;
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

    .sold-out {
      opacity: .5;
    }
  }
</style>
