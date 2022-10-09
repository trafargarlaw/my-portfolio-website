<template>
  <div class="container" v-if="error.statusCode === 404 || '404'">
    <h1>404</h1>
    <img src="/images/duckbill.png" alt="duck" height="300px" />
    <h2>Page not found</h2>
  </div>
</template>

<script setup>
// default props available on error.vue
const props = defineProps({
  error: Object,
});

// customise 404 message from script section
const error = useError();
if (error.value.statusCode === 404 || "404") {
  error.value.message = "[script]: Oops! Page not found 😔";
}

// clear error and redirect to home page
const handleError = () => clearError({ redirect: "/" });
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: $primary-bg;
  font-family: "Calling Code";
}

h1 {
  font-size: 10rem;
  color: $light-green;
}

h2 {
  font-size: 2rem;
  color: $dark-green;
}
</style>
