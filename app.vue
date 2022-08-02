<template>
  <div class="app">
    <app-navbar />
    <app-hero />
    <app-projects />
    <app-blog-posts />
    <app-footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Houdaifa Chergaoui",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  charset: "utf-8",
  meta: [{ name: "description", content: "Houdaifa Chergaoui's Portfolio" }],
  link: [{ rel: "icon", type: "image/ico", href: "/images/favicon.ico" }],
});
</script>


<style lang="scss" >
.app {
  color: white;
  background: $primary-bg;
}
</style>
