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
  // add hotjar script hjid:3228213 hjsv:6
  script: [
    {
      hid: "hotjar",
      children: `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3228213,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `,
    },
  ],
});
</script>

<style lang="scss">
.app {
  color: white;
  background: $primary-bg;
}
</style>
