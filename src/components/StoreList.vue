<template>
  <div :class="['store-list',{'store-list--active-map':activeMap}]">
    <ul>
      <StoreListItem v-for="store in stores.plenty"
                     @updateViewMap="handleUpdateViewMap"
                     :store="store"
                     :isActive="activeStore ===store.code"
                     :key="store.code" />

      <StoreListItem v-for="store in stores.some"
                     @updateViewMap="handleUpdateViewMap"
                     :store="store"
                     :isActive="activeStore ===store.code"
                     :key="store.code" />

      <StoreListItem v-for="store in stores.few"
                     @updateViewMap="handleUpdateViewMap"
                     :store="store"
                     :isActive="activeStore ===store.code"
                     :key="store.code" />

      <StoreListItem v-for="store in stores.break"
                     @updateViewMap="handleUpdateViewMap"
                     :store="store"
                     :isActive="activeStore ===store.code"
                     :key="store.code" />

      <StoreListItem v-for="store in stores.empty"
                     @updateViewMap="handleUpdateViewMap"
                     :store="store"
                     :isActive="activeStore ===store.code"
                     :key="store.code" />
    </ul>
  </div>
</template>

<script>
  import StoreListItem from './StoreListItem';

  export default {
    name: 'StoreList',

    props: ['stores', 'activeMap', 'activeStore'],

    components: {
      StoreListItem
    },

    data() {
      return {};
    },

    methods: {
      handleUpdateViewMap(store) {
        this.$emit('updateCenterPosition', store);
      }
    }
  };
</script>

<style lang="scss">
  .store-list {
    height: 100%;
    padding: 40px 15px 15px 15px;
    box-sizing: border-box;
    overflow: auto;
    position: relative;
    z-index: 2;
    background: #fff;

    &--active-map {
      margin-top: 50vh;
      padding: 15px;
    }
  }
</style>
