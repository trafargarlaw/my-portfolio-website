<template>
  <section class="hero">
    <div>
      <div class="hero__Ptag">
        <span> &lt;p&gt; </span>
        <p>This is</p>
        <span> &lt;/p&gt; </span>
      </div>
      <div class="hero__name">
        &lt;h1&gt;
        <h1>
          Houdaifa <br />
          Chergaoui
        </h1>
        &lt;/h1&gt;
      </div>
      <div class="hero__Ptag">
        &lt;p&gt;
        <p>Web developer</p>
        &lt;/p&gt;
      </div>
    </div>
    <div class="hero__btn_container">
      <app-hero-download-button />
    </div>
  </section>
  <app-hero-wire />
</template>
<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;

  &__Ptag {
    display: flex;
    column-gap: 4px;
    color: $gray;
    font-family: "Calling Code";
    font-size: 14px;
    margin-left: 48px;

    & p {
      color: $light-green;
    }
  }

  &__name {
    font-family: "Calling Code";
    font-size: 14px;
    color: $gray;
    padding: 0 0 0 59px;
    margin: 0.5rem 0;

    & h1 {
      font-family: "Code Squared";
      font-size: 2rem;
      padding: 0 0 0 1rem;
      color: white;
    }
  }

  &__btn_container {
    flex: 1;
    display: flex;
    justify-content: center;
    background: url("/images/close-tag.svg") no-repeat;
    background-size: 148px;
    background-position: center;
    height: fit-content;
    align-self: center;
  }
}

@media (min-width: 768px) {
  .hero {
    &__Ptag {
      font-size: 20px;
      margin-left: 113px;

      & p {
        color: $light-green;
      }
    }

    &__name {
      font-size: 20px;
      padding: 0 0 0 140px;
      margin: 2rem 0;

      & h1 {
        font-size: 80px;
        color: white;
      }
    }

    &__btn_container {
      background-size: 248px;
    }
  }
}
</style>