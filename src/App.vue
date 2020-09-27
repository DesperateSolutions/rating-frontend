<template>
  <div>
    <the-header></the-header>
    <router-view />
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
