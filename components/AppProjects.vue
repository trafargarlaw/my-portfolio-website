<template>
  <section class="portfolio">
    <div class="portfolio__title">
      &lt;h2&gt;
      <h2>My Portfolio</h2>
      <span> &lt;/h2&gt; </span>
    </div>
    <portfolio-pagination />
  </section>
</template>

<style lang="scss" scoped>
.portfolio {
  &__title {
    font-family: "Calling Code";
    font-size: 14px;
    color: $gray;
    padding: 0 25px;

    & h2 {
      font-family: "Code Squared";
      font-size: 28px;
      padding: 0 1rem;
      text-align: center;
      color: white;
    }

    & span {
      display: block;
      text-align: end;
    }
  }
}

@media (min-width: 768px) {
  .portfolio {
    &__title {
      font-size: 20px;
      padding: 0 260px;

      & h2 {
        font-size: 60px;
      }
    }
  }
}
</style>