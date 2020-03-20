<template>
  <li :class="['store-list-item', {'store-list-item--active': isActive}]"
      :id="`store-${store.code}`"
      @click="handleViewMap(store.lat, store.lng, store.code)">
    <div :class="[store.remain_stat, 'stat']">{{status}}</div>

    <div>{{store.name}} | <span class="store-list-item__distance">{{store.distance}}미터</span></div>

    <div>{{store.addr}}</div>

    <div v-if="store.stock_at" class="store-list-item__input-time">입고시간: {{store.stock_at}}</div>
  </li>
</template>

<script>
  export default {
    name: 'StoreListItem',

    props: ['store', 'isActive'],

    computed: {
      status() {
        if (this.store.remain_stat === 'plenty') {
          return '100개 이상';
        }
        if (this.store.remain_stat === 'some') {
          return '100개 미만';
        }
        if (this.store.remain_stat === 'few') {
          return '30개 미만';
        }
        if (this.store.remain_stat === 'empty') {
          return '품절';
        }
        if (this.store.remain_stat === 'break') {
          return '판매중지';
        }
        return '';
      }
    },

    methods: {
      handleViewMap() {
        this.$emit('updateViewMap', this.store);
      },

      handleFindLoad(name, lat, lng) {
        location.href = `https://map.kakao.com/link/to/${name},${lat},${lng}`;
      }

    }
  };
</script>

<style lang="scss">
  .store-list-item {
    font-size: 12px;
    border: 1px solid #ccc;
    position: relative;
    list-style: none;
    margin: 10px 0 0 0;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    color: #606266;
    line-height: 1.3;

    &:first-child {
      margin-top: 0;
    }

    &--active {
      border: 1px solid #333;
    }

    &__distance {
      font-weight: bold;
      color: #333;
    }

    &__input-time {
      border-top: 1px dotted #c3c3c3;
      margin-top: 5px;
      padding-top: 5px;
    }

    &__icon {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 16px;
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

    .break {
      color: #909399;
    }

    .sold-out {
      opacity: .8;
    }
  }
</style>
