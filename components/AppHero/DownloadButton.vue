<template>
  <div class="container">
    <button class="btn_downloadcv">
      <span> &lt;Download CV /&gt; </span>
      <div class="btn_downloadcv__around">
        <div class="btn_downloadcv__around_1">
          <img
            src="/images/decoration.svg"
            class="btn_downloadcv__img1"
            alt="around"
          />
          <img
            src="/images/decoration.svg"
            class="btn_downloadcv__img2"
            alt="around"
          />
        </div>
        <div class="btn_downloadcv__around_2">
          <img
            src="/images/decoration_large.svg"
            class="btn_downloadcv__img3"
            alt="around"
          />
        </div>
      </div>
    </button>
  </div>
</template>
<style lang="scss" scoped>
.container {
  overflow: hidden;
  padding: 10px;
}
.btn_downloadcv {
  font-family: "Calling Code";
  background: transparent;
  color: $light-green;
  border: 2px solid $gray;
  border-radius: 50%;
  font-size: 14px;
  height: 145px;
  width: 145px;
  position: relative;
  margin: 2rem;

  &__around {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;

    &_1 {
      height: 100%;
      width: 100%;
      transition: transform 300ms ease-in-out;
    }

    &_2 {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 300ms ease-in-out;
    }
    &:hover {
      cursor: pointer;

      & .btn_downloadcv__around_1 {
        transform: rotate(-120deg);
      }
      & .btn_downloadcv__around_2 {
        transform: rotate(60deg);
      }
    }
  }

  &__img1 {
    height: 100px;
    position: absolute;
    top: -20px;
    left: -22px;
  }

  &__img2 {
    height: 100px;
    position: absolute;
    bottom: -20px;
    right: -22px;
    transform: rotate(180deg);
  }

  &__img3 {
    height: 230px;
    position: absolute;
    right: -110px;
    top: -70px;
  }
}
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
  .btn_downloadcv {
    height: 225px;
    width: 225px;
    font-size: 20px;

    &__img1 {
      height: 150px;
      position: absolute;
      top: -24px;
      left: -28px;
    }

    &__img2 {
      height: 150px;
      position: absolute;
      bottom: -24px;
      right: -28px;
      transform: rotate(180deg);
    }

    &__img3 {
      height: 300px;
      position: absolute;
      right: -140px;
      top: -78px;
    }
  }
}
</style>
