<template>
  <a :href="link" target="_blank" class="blogpost-btn">
    <div class="blogpost-btn__title-date">
      <span>{{ title }}</span>
      <span class="blogpost-btn__title-date_date">{{ date }}</span>
    </div>
    <svg
      width="63"
      height="49"
      viewBox="0 0 63 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 24.5L62.5 24.5M62.5 24.5C55 24.5 40 20.5 40 0.499983M62.5 24.5C55.1667 24.5 40 29.4 40 49"
        stroke-width="5"
      />
    </svg>
  </a>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  date: String,
  link: String,
});
</script>

<style lang="scss">
.blogpost-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px clamp(2.25rem, 0.6667rem + 7.037vw, 7rem);
  border: 2px solid $light-green;
  stroke: white;
  text-decoration: none;
  color: white;

  & svg {
    width: clamp(1.1875rem, 0.0417rem + 5.0926vw, 4.625rem);
  }

  &__title-date {
    display: flex;
    flex-direction: column;
    font-size: clamp(1.125rem, 0.5833rem + 2.4074vw, 2.75rem);
    font-family: "Code Squared";

    &_date {
      font-size: clamp(1rem, 0.6667rem + 1.4815vw, 2rem);
      font-family: "Calling Code";
    }
  }

  &:hover {
    background: $light-green;
    stroke: black;

    .blogpost-btn__title-date {
      color: black;
    }
  }
}
</style>