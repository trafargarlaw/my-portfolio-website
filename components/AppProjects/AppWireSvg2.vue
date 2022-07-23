<template>
  <svg viewBox="0 0 541 546" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="17.5" cy="528.5" r="8.5" fill="#F2F2F2" />
    <circle
      id="circle2"
      cx="17.5"
      cy="528.5"
      r="13"
      stroke="#05F283"
      stroke-opacity="0.5"
      stroke-width="9"
    />
    <circle cx="153.5" cy="17.5" r="8.5" fill="#F2F2F2" />
    <circle
      id="circle2__delay"
      cx="153.5"
      cy="17.5"
      r="13"
      stroke="#05F283"
      stroke-opacity="0.5"
      stroke-width="9"
    />
    <path
      id="path2"
      d="M154 26.5C155.5 42.8333 168.6 76.1 211 82.5H539V250C533.667 291.333 498.1 376.5 398.5 386.5H150C109.333 389.5 26.1 420.2 18.5 519"
      stroke="#05F283"
      stroke-width="4"
    />
  </svg>
</template>

<script script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineComponent({
  name: "AppWireSvg2",
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#circle2__delay", {
      duration: 0.4,
      strokeWidth: 9,
      opacity: 9,
      scrollTrigger: {
        trigger: "#circle2__delay",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
    gsap.to("#circle2", {
      duration: 0.4,
      strokeWidth: 9,
      opacity: 1,
      scrollTrigger: {
        trigger: "#circle2",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
    gsap.to("#path2", {
      duration: 1,
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: "#path2",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
svg {
  position: absolute;
  width: 200px;
  right: 15px;
  margin-top: -50px;
  pointer-events: none;
}

#path2 {
  stroke-dasharray: 1247px;
  stroke-dashoffset: 1247px;
  animation: dash 1.5s ease-in-out forwards;
  animation-delay: 600ms;
}
#circle2 {
  opacity: 0;
  animation: pulse 600ms ease-out forwards;

  &__delay {
    opacity: 0;
    animation: pulse 600ms ease-out forwards;
    animation-delay: 2.1s;
  }
}

@media (min-width: 768px) {
  svg {
    width: 450px; // clamp
    margin-top: -110px;
  }
}
</style>
  