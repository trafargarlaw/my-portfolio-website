<template>
  <nav class="navbar">
    <a class="portfolio" href="#portfolio">{{"//01. <Portfolio />"}}</a>
    <span class="logo text-head">HC</span>
    <a class="contact" href="#contact">{{"//02. <Contact />"}}</a>
  </nav>
</template>
<style lang="scss" scoped>
.navbar {
  padding: 24px 18px;
  margin-bottom: 49px;
  display: grid;
  row-gap: 12px;
  grid-template-columns: 1fr 0.2fr 1fr;
  grid-template-rows: 1fr;

  & .logo {
    text-align: right;
    margin-top: -0.5rem;
  }

  & .home {
    margin-left: 11px;
  }
  & .press {
    justify-self: end;
  }
  & .contact {
    grid-column: 3;
    justify-self: end;
  }

  & a {
    text-decoration: none;
    color: white;
    font-family: "Calling Code";
    font-size: 14px;
  }
}

@media (min-width: 768px) {
  .navbar {
    padding: 37px 113px;

    & .logo {
      font-size: 2rem;
    }

    & a {
      font-size: 20px;
    }
  }
}
</style>
