<template>
  <a :href="link" class="contact-button" target="_blank">
    <span>&lt;&gt;</span>
    {{ social }}
    <span>&lt;/&gt;</span>
  </a>
</template>

<script lang="ts" setup>
defineProps({
  social: String,
  link: String,
});
</script>

<style lang="scss" scoped>
.contact-button {
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px solid $light-green;
  cursor: pointer;
  border-radius: 50%;
  padding: 2rem;
  text-align: center;
  background: transparent;
  color: white;
  font-family: "Calling Code";
  aspect-ratio: 1/1;
  text-decoration: none;

  & span {
    display: block;
  }
}

@media (min-width: 768px) {
  .contact-button {
    padding: 3rem;
    font-size: 26px;
  }
}
</style>