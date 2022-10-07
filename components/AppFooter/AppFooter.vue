<template>
  <footer class="footer" id="contact">
    <app-text-heading title="Connect with me" wrapping-tag="<h3>" />

    <div class="footer__grid">
      <app-footer-contact-button
        social="Upwork"
        link="https://www.upwork.com/freelancers/~0132b914fbb3c956a4?viewMode=1"
      />
      <app-footer-contact-button
        social="Linkedin"
        link="https://www.linkedin.com/in/houdaifa-chergaoui-48a863244/"
      />
      <app-footer-contact-button
        social="Email Me"
        link="mailto:chergaoui@houdaifa.com"
      />
      <app-footer-contact-button
        social="Twitter"
        link="https://twitter.com/houdaifa_com"
      />
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  padding: 26px;

  &__grid {
    display: grid;
    padding: 2rem 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    justify-items: center;
  }
}

@media (min-width: 768px) {
  .footer {
    padding: 0 32px;

    &__grid {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
}

@media (min-width: 1024px) {
  .footer {
    &__grid {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
    }
  }
}
</style>
