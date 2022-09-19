<template>
  <div class="troup" ref="duckbill">
    <div :class="`duckbill-${number} duckbill`">
      <duckbill lookingSide="right" />
    </div>

    <svg
      width="140"
      height="138"
      viewBox="0 0 140 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="troup_top"
    >
      <path d="M0 0H70H140V138C140 104.5 0 104.5 0 138V0Z" fill="#111119" />
    </svg>
    <svg
      width="140"
      height="165"
      viewBox="0 0 140 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="troup_bottom"
    >
      <path d="M0 0C0 33 140 33 140 0V165H70H0V0Z" fill="#111119" />
    </svg>
  </div>
</template>

<script script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineComponent({
  name: "HoleDuckbill",
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(`.duckbill-${this.number}`, {
      duration: 1,
      bottom: 0,
      scrollTrigger: {
        trigger: `.duckbill-${this.number}`,
        start: "top 200px",
        end: "bottom 200px",
        scrub: 1,
      },
    });
    // set bottom to 0 when duckbill is hovered
    this.$refs.duckbill.addEventListener("mouseenter", () => {
      gsap.to(`.duckbill-${this.number}`, {
        duration: 0.5,
        bottom: -20,
      });
    });
    // set bottom to -100 when duckbill is hovered
    this.$refs.duckbill.addEventListener("mouseleave", () => {
      gsap.to(`.duckbill-${this.number}`, {
        duration: 0.5,
        bottom: 80,
      });
    });
  },
});
</script>

<style scoped lang="scss">
.troup {
  position: absolute;
  display: none;
  flex-direction: column;
  background: black;
  width: 140px;
  outline: 4px solid #111119;
  .duckbill {
    display: hidden;
    position: absolute;
    bottom: 80px;
    left: -30px;
  }

  &_bottom {
    z-index: 1;
  }
}

// display flex after 900 px
@media (min-width: 900px) {
  .troup {
    display: flex;
  }
}
</style>
