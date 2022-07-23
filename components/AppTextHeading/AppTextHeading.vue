<template>
  <div class="heading">
    <h1
      :data-before-content="wrappingTag"
      :data-after-content="wrappingTag.replace('<', '</')"
    >
      {{ title }}
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  wrappingTag: String,
  size: String,
});
</script>

<style lang="scss">
.heading {
  font-size: 14px;
  color: white;
  padding: 4rem 25px;

  & h1 {
    font-family: "Code Squared";
    font-size: 28px;
    padding: 0 1rem;
    text-align: center;
    color: white;
    position: relative;

    &::before {
      content: attr(data-before-content);
      font-family: "Calling Code";
      position: absolute;
      top: -8px;
      margin-left: -42px;
      font-size: 14px;
      color: $gray;
    }

    &::after {
      content: attr(data-after-content);
      font-family: "Calling Code";
      position: absolute;
      font-size: 14px;
      margin-left: 6px;
      bottom: -8px;
      color: $gray;
    }
  }
}

@media (min-width: 768px) {
  .heading {
    font-size: 20px;
    padding: 4rem 0px;

    & h1 {
      font-size: 60px;

      &::before {
        font-size: 20px;
        margin-left: -56px;
      }

      &::after {
        font-size: 20px;
      }
    }
  }
}
</style>