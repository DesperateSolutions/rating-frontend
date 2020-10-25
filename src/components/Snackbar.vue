<template>
  <div class="ui-snackbar-container">
    <div v-show="snack.visible" class="ui-snackbar" transition="ui-snackbar-toggle">
      <div class="ui-snackbar-text">{{ snack.message }} {{ snack.info }}</div>
      <div class="ui-snackbar-action">
        <button @click="CLOSE_SNACKBAR">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Snackbar',
  computed: mapState(['snack']),
  methods: mapMutations(['CLOSE_SNACKBAR']),
};
</script>

<style scoped lang="scss">

$primary = #2196f3;
$accent = #d500f9;

.ui-snackbar-container {
  position: absolute;
  overflow: hidden;

  bottom: 0;
  left: 8px;
}

.ui-snackbar {
  display: inline-flex;
  align-items: center;

  min-width: 288px;
  max-width: 568px;
  min-height: 48px;

  padding: 14px 24px;
  margin: 4px 4px 8px 4px;

  border-radius: 2px;
  background-color: #323232;

  box-shadow: 0 1px 3px alpha(black, 0.12), 0 1px 2px alpha(black, 0.24);
}

.ui-snackbar-text {
  font-size: 14px;
  color: white;
}

.ui-snackbar-action {
  margin-left: auto;
  padding-left: 48px;

  button {
    border: none;
    background: none;
    margin: 0;
    padding: 0;

    font-size: 14px;
    text-transform: uppercase;

    color: #ffeb3b;
  }
}

.ui-snackbar-toggle-transition {
  transition: transform 0.3s ease;

  .ui-snackbar-text,
  .ui-snackbar-action {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
}

.ui-snackbar-toggle-enter,
.ui-snackbar-toggle-leave {
  transform: translateY(60px);

  .ui-snackbar-text,
  .ui-snackbar-action {
    opacity: 0;
  }
}
</style>
