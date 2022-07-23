<template>
  <footer class="footer" id="contact">
    <app-text-heading title="Connect with me" wrapping-tag="<h3>" />

    <div class="footer__grid">
      <app-footer-contact-button
        social="Instagram"
        link="https://www.instagram.com/houdaifa_com/"
      />
      <app-footer-contact-button
        social="Linkedin"
        link="https://www.linkedin.com/in/houdaifa-chergaoui-48a863244/"
      />
      <app-footer-contact-button
        social="Gmail"
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
  margin-top: 100px;
  padding: 26px;

  &__grid {
    display: grid;
    padding: 4rem 0;
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