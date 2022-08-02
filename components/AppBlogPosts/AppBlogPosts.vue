<template>
  <section class="press" id="Press">
    <app-text-heading title="Press" wrapping-tag="<h3>" />
    <app-blog-posts-post
      title="My first portfolio"
      date="March 10, 2022"
      link="https://medium.com/@chergaoui_27872/how-i-made-my-first-portfolio-website-2f24a9c777d9"
    />
  </section>
  <app-wire-svg-3 />
</template>
<style lang="scss" scoped>
.press {
  margin-top: 4rem;
}

@media (min-width: 768px) {
  .press {
    margin-top: 12rem;
  }
}
</style>
