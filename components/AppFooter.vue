<template>
  <footer class="footer">
    <div class="footer__title text-body">
      &lt;h3&gt;
      <h3 class="text-head">Connect with me</h3>
      <span> &lt;/h3&gt; </span>
    </div>
    <div class="footer__grid">
      <contact-button social="Instagram" />
      <contact-button social="Linkedin" />
      <contact-button social="Gmail" />
      <contact-button social="Twitter" />
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  margin-top: 100px;
  padding: 26px;

  &__title {
    font-size: 14px;
    margin: 1rem 0;
    color: $gray;

    & h3 {
      font-size: 1.5rem;
      padding: 0 1rem;
      text-align: center;
      color: white;
    }

    & span {
      display: block;
      text-align: end;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    justify-items: center;
  }
}

@media (min-width: 768px) {
  .footer {
    margin-top: 200px;
    padding: 32px;

    &__grid {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }

    &__title {
      font-size: 20px;
      padding: 0 220px;

      & h3 {
        font-size: 60px;
      }
    }
  }
}

@media (min-width: 1024px) {
  .footer {
    &__grid {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>