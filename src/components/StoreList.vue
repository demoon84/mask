<template>
  <div class="store-list">
    <ul>
      <template v-for="store in stores">
        <li :key="store.code">
          <div :class="[store.remain_stat, 'stat']">{{getsStatNumber(store.remain_stat)}}</div>
          <div>{{store.name}}</div>
          <div>{{store.addr}}</div>
          <div v-if="getKoTime(store.stock_at)">{{getKoTime(store.stock_at)}}</div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'StoreList',

    props: [
      'stores'
    ],

    methods: {
      getsStatNumber(stat) {
        if (stat == 'plenty') {
          return '100개 이상';
        }
        if (stat == 'some') {
          return '30개 ~ 100개';
        }
        if (stat == 'few') {
          return '2개 ~ 30개';
        }
        if (stat == 'empty') {
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

<style lang="scss" scoped>
  .store-list {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      font-size: 12px;
      border: 1px solid #ccc;
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
