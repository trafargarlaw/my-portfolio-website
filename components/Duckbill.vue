<template>
  <div class="duckbill-container" ref="duckbill-container">
    <img class="duckbill" src="/images/duckbill.png" alt="duckbill" />
    <div class="righteye-container eye-container" ref="righteye-container">
      <img src="/images/left-eye.png" class="righteye" alt="left eye" />
    </div>
    <div class="lefteye-container eye-container" ref="lefteye-container">
      <img src="/images/right-eye.png" class="lefteye" alt="left eye" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.duckbill {
  height: 200px;

  top: 0;
  left: 0;

  &-container {
    position: relative;
    width: fit-content;
  }
}
.lefteye {
  height: 10px;
  position: absolute;
  left: 9px;
  top: 6.4px;

  &-container {
    background: white;
    position: absolute;
    top: 56px;
    left: 87px;
    border-radius: 50%;
    width: 21px;
    height: 20px;
  }
}

.eye-container {
  rotate: 0;
}
.righteye {
  height: 9px;
  position: absolute;
  left: 8px;
  top: 6.4px;

  &-container {
    background: white;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    position: absolute;
    top: 54px;
    left: 121px;
  }
}
</style>

<script>
export default {
  name: "Duckbill",
  props: {
    lookingSide: String,
  },
  mounted() {
    // log props

    let lookingSide = this.lookingSide;
    window.addEventListener("mousemove", MoveEyes);
    // also on mousewheel
    window.addEventListener("wheel", MoveEyes);

    if (this.lookingSide === "left") {
      this.$refs["duckbill-container"].style.transform = "rotateY(180deg)";
    }
    let eyes = [
      this.$refs["lefteye-container"],
      this.$refs["righteye-container"],
    ];
    // calculate rotation degree for left eye and right eye between 0 and 360 based on mouse position
    function MoveEyes(event) {
      eyes.forEach((eye) => {
        const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        const radian = Math.atan2(event.pageX - x, event.pageY - y);
        const rotation = radian * (180 / Math.PI) * -1 + 80;
        if (lookingSide === "right") {
          eye.style.transform = `rotate(${rotation}deg)`;
        } else if (lookingSide === "left") {
          eye.style.transform = `rotate(-${rotation}deg)`;
        }
      });
    }
  },
};
</script>
