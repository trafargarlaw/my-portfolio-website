<template>
  <div class="wire-3">
    <svg
      width="34"
      height="231"
      viewBox="0 0 34 231"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path id="path3" d="M17 24V207" stroke="#05F283" stroke-width="4" />
      <circle cx="16.9991" cy="214.001" r="7.99905" fill="#F2F2F2" />
      <circle
        id="circle3__delay"
        cx="16.9991"
        cy="214.001"
        r="12.4991"
        stroke="#05F283"
        stroke-opacity="0.5"
        stroke-width="9"
      />
      <circle cx="16.9991" cy="17.001" r="7.99905" fill="#F2F2F2" />
      <circle
        id="circle3"
        cx="16.9991"
        cy="17.001"
        r="12.4991"
        stroke="#05F283"
        stroke-opacity="0.5"
        stroke-width="9"
      />
    </svg>
  </div>
</template>

<script script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineComponent({
  name: "AppWireSvg3",
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#circle3", {
      duration: 0.4,
      strokeWidth: 9,
      opacity: 9,
      scrollTrigger: {
        trigger: "#circle3",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
    gsap.to("#circle3__delay", {
      duration: 0.4,
      strokeWidth: 9,
      opacity: 1,
      scrollTrigger: {
        trigger: "#circle3__delay",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
    gsap.to("#path3", {
      duration: 1,
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: "#path3",
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
.wire-3 {
  display: flex;
  justify-content: center;
  width: 100%;
}

svg {
  pointer-events: none;
  display: flex;
  justify-content: center;
  width: 16px;
  height: fit-content;
  margin: 2rem 0;
}

#path3 {
  stroke-dasharray: 183px;
  stroke-dashoffset: 183px;
  animation: dash 1.5s ease-in-out forwards;
  animation-delay: 600ms;
}
#circle3 {
  opacity: 0;

  &__delay {
    opacity: 0;
  }
}

@media (min-width: 768px) {
  svg {
    width: 50px;
  }
}
</style>
  