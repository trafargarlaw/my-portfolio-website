<template>
  <div class="wire-container" ref="wire">
    <app-wire-svg v-if="showWire" />
  </div>
</template>

<script script lang="ts">
export default defineComponent({
  name: "AppWire",
  data() {
    return {
      showWire: false,
    };
  },
  mounted() {
    this.observeWire();
  },
  methods: {
    observeWire() {
      const observer = new IntersectionObserver(
        async (entries) => {
          if (entries[0].isIntersecting) {
            this.showWire = true;
          }
        },
        { threshold: 0.7 }
      );
      observer.observe(this.$refs["wire"] as HTMLDivElement);
    },
  },
});
</script>

<style lang="scss" scoped>
.wire-container {
  width: 100%;
  min-height: 93px;

  & svg {
    margin-top: -80px;
    margin-left: 20px;
    width: 177px;
  }
}

@media (min-width: 768px) {
  .wire-container {
    & svg {
      margin-top: -160px;
      margin-left: 50px;
      width: 450px;
    }
  }
}
</style>
