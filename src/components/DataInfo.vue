<template>
  <div class="data-info">
    <div class="data-info__time">업데이트: {{updateTime}}</div>

    <a href="#" v-if="visibleFind" @click.prevent="handleUpdateData" class="data-info__find"><i class="el-icon-location"></i> 지점에서 재검색</a>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'DataInfo',

    props: [
      'time',
      'canFind',
      'activeMap'
    ],

    computed: {
      updateTime() {
        return this.time ? moment(this.time.created_at).calendar() : '';
      },
      visibleFind() {
        return this.canFind && this.activeMap;
      }
    },

    methods: {
      handleUpdateData() {
        this.$emit('updateFindData');
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
    }

    &__find {
      position: fixed;
      top: 6px;
      right: 6px;
      z-index: 3;
      text-decoration: none;
      color: #fff;
      -webkit-tap-highlight-color: transparent;
      background: rgba(103, 194, 58, 0.9);
      display: inline-block;
      padding: 7px 12px;
      font-size: 12px;
      border-radius: 20px;

      i {
        color: #000;
      }
    }
  }
</style>
