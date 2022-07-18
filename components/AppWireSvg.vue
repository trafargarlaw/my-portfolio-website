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


<style lang="scss" scoped>
#path {
  stroke-dasharray: 1037px;
  stroke-dashoffset: 1037px;
  animation: dash 1.5s ease-in-out forwards;
  animation-delay: 600ms;
}
#circle {
  opacity: 0;
  animation: pulse 600ms ease-out forwards;

  &__delay {
    opacity: 0;
    animation: pulse 600ms ease-out forwards;
    animation-delay: 2.1s;
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: 0px;
  }
}
@keyframes pulse {
  to {
    opacity: 1;
    stroke-width: 9px;
  }
}
</style>
  