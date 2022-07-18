<template>
  <button class="contact-button">
    <span>&lt;&gt;</span>
    {{ social }}
    <span>&lt;/&gt;</span>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  social: String,
});
</script>

<style lang="scss" scoped>
.contact-button {
  border: 2px solid $light-green;
  cursor: pointer;
  border-radius: 50%;
  padding: 2rem;
  text-align: center;
  background: transparent;
  color: white;
  font-family: "Calling Code";
  aspect-ratio: 1/1;

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