<template>
  <div id="app" class="app">
    <the-header></the-header>
    <router-view class="ds-container" />
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {
    TheHeader: () => import('./components/TheHeader.vue'),
  },

  data: () => ({
    title: 'Squash Rating',
  }),
};
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.ds-container {
  flex-grow: 1;
}
</style>
