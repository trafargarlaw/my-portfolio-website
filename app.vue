<template>
  <div class="app">
    <app-navbar />
    <app-hero />
    <app-projects />
    <app-footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Houdaifa Chergaoui",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My portfolio" }],
});
</script>


<style lang="scss" scoped>
@import "/assets/css/main.scss";
.app {
  color: white;
  background: $primary-bg;
}
</style>
