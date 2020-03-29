<template>
  <div class="data-info">
    <div class="data-info__time">데이터 업데이트: {{updateTime}}</div>
    <a href="#" v-if="visiblePointFind" @click.prevent="handleUpdatePinPositionData" class="data-info__find data-info__find--pin"><span><i class="el-icon-location"></i>지점에서</span> 재검색</a>
    <a href="#" @click.prevent="handleUpdateCurrentPositionData" class="data-info__find data-info__find--current">나의 위치에서 재검색</a>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'DataInfo',

    props: [
      'time',
      'activeMap'
    ],

    computed: {
      updateTime() {
        return this.time ? moment(this.time.created_at).calendar() : '';
      },
      visiblePointFind() {
        return this.activeMap;
      }
    },

    methods: {
      handleUpdatePinPositionData() {
        this.$emit('updateFindPinData');
      },
      handleUpdateCurrentPositionData() {
        this.$emit('updateFindCurrentData');
      }
    }
  };
</script>

<style lang="scss">
  .data-info {
    &__time {
      display: inline-block;
      background: rgba(255, 255, 255, 0.9);
      padding: 7px 12px;
      font-size: 12px;
      position: fixed;
      border-radius: 20px;
      top: 6px;
      left: 6px;
      z-index: 3;
      cursor: pointer;
    }

    &__find {
      position: fixed;
      z-index: 3;
      text-decoration: none;
      color: #fff;
      -webkit-tap-highlight-color: transparent;
      background: rgba(230, 162, 60, 0.9);
      display: inline-block;
      padding: 7px 12px;
      font-size: 12px;
      border-radius: 20px;

      i {
        color: #fff;
      }

      &--pin {
        top: 40px;
        right: 14px;
      }


      &--current {
        top: 6px;
        right: 14px;
      }
    }
  }
</style>
