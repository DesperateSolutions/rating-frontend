<template>
  <nav class="flex items-center justify-between bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <router-link :to="{ name: 'root' }" class="font-semibold text-xl tracking-tight hover">
        Squash Rating
      </router-link>
    </div>
    <div class="w-full flex-grow flex items-start justify-end">
      <div class="text-sm">
        <router-link :to="{ name: 'leagues' }" class="block mt-0 text-teal-200 inline-block hover:text-white mr-4">
          Leagues
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped></style>
