<template>
  <nav class="ds-navbar">
    <div class="ds-navbar__brand">
      <router-link :to="{ name: 'root' }" class="ds-btn ds-btn--ter ds-btn--neg ds-no-underline">
        Squash Rating
      </router-link>
    </div>

    <button class="ds-navbar__toggle ds-btn ds-btn--sec" @click="toggleNavbarMenu" @keyup.esc="exitNavbarMenu">
      <span class="ds-icon fas fa-bars" />
      <span class="sr-only">Meny</span>
    </button>

    <div class="ds-navbar__content" :class="{ open: navbarMenuIsOpen }" @keyup.esc="exitNavbarMenu">
      <ul class="ds-navbar__nav">
        <li class="ds-navbar__navitem">
          <router-link :to="{ name: 'leagues' }" class="ds-btn ds-btn--neg ds-btn--ter ds-no-underline">
            Leagues
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',

  data: () => ({
    navbarMenuIsOpen: false,
  }),

  methods: {
    toggleNavbarMenu() {
      this.navbarMenuIsOpen = !this.navbarMenuIsOpen;
    },
    exitNavbarMenu() {
      this.navbarMenuIsOpen = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/style/variables/_colors.scss';
@import '@/style/variables/_breakpoints.scss';
@import '@/style/variables/_mixins.scss';

$backgroundColor: $ds-blue-dark;

.ds-navbar {
  display: flex;
  align-items: center;
  background: $backgroundColor;
  min-height: 60px;
  margin-bottom: 1rem;

  &__brand {
    margin-right: auto;
  }

  &__toggle {
    padding: 1.05rem;
    color: white;
    font-size: 20px;
    background: transparent;

    &:hover {
      color: rgba(white, 0.9);
    }

    @include desktop-and-up {
      display: none;
    }
  }

  &__content {
    $width: calc(100vw - 3rem);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    display: none;
    width: $width;
    max-width: 30rem;
    height: 100vh;
    padding-right: 1rem;
    background: $backgroundColor;
    border-right: 3px solid #0071bb;
    box-shadow: 0.25rem 0 0.5rem darken($backgroundColor, 20%);
    transform: translateX(-100vw);
    transition: transform 0.5s ease-in-out;

    &.open {
      display: block;
      transform: translateX(0);
      transition: transform 0.5s ease-in-out;
    }

    @include desktop-and-up {
      position: relative;
      display: block;
      width: auto;
      max-width: none;
      height: auto;
      background: none;
      border-right: none;
      box-shadow: none;
      transform: none;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 1rem !important;
    @include desktop-and-up {
      flex-direction: row;
      align-items: center;
      padding: 0 !important;
    }
  }
}
.ds-logo {
  @include ds-logo();
  width: 7.6rem;
  margin-left: 0.75rem;
}
</style>
