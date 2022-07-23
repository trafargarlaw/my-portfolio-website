<template>
  <svg viewBox="0 0 609 544" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      id="path"
      d="M58 17.5H57H2V219.5C6.33333 253.833 35.1 324.7 115.5 333.5H477.5C511.167 339.333 581 370.7 591 449.5V519"
      stroke="#05F283"
      stroke-width="4"
    />
    <circle cx="65.5" cy="17.5" r="8.5" fill="#F2F2F2" />
    <circle
      id="circle"
      cx="65.5"
      cy="17.5"
      r="13"
      stroke="#05F283"
      stroke-opacity="0.5"
      stroke-width="9"
    />
    <circle cx="591.5" cy="526.5" r="8.5" fill="#F2F2F2" />
    <circle
      id="circle__delay"
      cx="591.5"
      cy="526.5"
      r="13"
      stroke="#05F283"
      stroke-opacity="0.5"
      stroke-width="9"
    />
  </svg>
</template>

<script script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineComponent({
  name: "AppWireSvg",
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#circle__delay", {
      duration: 0.4,
      strokeWidth: 9,
      opacity: 9,
      scrollTrigger: {
        trigger: "#circle__delay",
        start: "220px center",
        end: "220px center",
        scrub: 1,
      },
    });
    gsap.to("#circle", {
      duration: 0.4,
      strokeWidth: 9,
      opacity: 1,
      scrollTrigger: {
        trigger: "#circle",
        start: "top 200px",
        end: "bottom 200px",
        scrub: 1,
      },
    });
    gsap.to("#path", {
      duration: 1,
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: "#path",
        start: "top 200px",
        end: "bottom 200px",
        scrub: 1,
      },
    });
  },
  methods: {},
});
</script>


<style lang="scss" scoped>
svg {
  margin-top: -85px;
  margin-left: 20px;
  width: 177px;
}
#path {
  stroke-dasharray: 1037px;
  stroke-dashoffset: 1037px;
}
#circle {
  opacity: 0;
  &__delay {
    opacity: 0;
  }
}

@media (min-width: 768px) {
  svg {
    margin-top: -120px;
    width: 477px; // clamp
  }
}
</style>
