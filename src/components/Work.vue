<template>
  <div id="work">
    <div class="wrapper">
      <div class="wrapper-box">
        <div id="box" :style="windowSize">
          <div>Application</div>
          <div>Illustration&Art</div>
          <div>Music</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'work',
  data: function () {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  },
  computed: {
    windowSize() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`
      }
    }
  },
  methods: {
    handleResize: function() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる

      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>


<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
}
.wrapper-box {
  /* max-width: 500px; */
  overflow: auto;
}
#box {
  top: 0;
  border: 1px solid black;
  position: relative;
}
</style>