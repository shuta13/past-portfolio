<template>
  <div id="app">
    <div id="hoge" @mousemove="onMouseMoved" @touchmove="onMouseMoved">
      <div class="container" v-bind:style="rotation">
        <img class="bg" src="./assets/back_image.png">
        <img class="name-logo" src="./assets/name.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      // rotatinoを動的に変化させる
      rotationX: 0.0,
      rotationY: 0.0,
    }
  },
  computed: {
    // これをhtmlに埋め込むとカーソル追跡
    rotation() {
      return {
        // transformは奥行き、rotateでx,y方向にカーソル追跡
        transform: `perspective(800px) rotateY(${this.rotationX}deg) rotateX(${this.rotationY}deg)`
      }
    }
  },
  methods: {
    // カーソルの位置を受け取って
    onMouseMoved(e) {
      // 最大の回転の角度
      const maxRotation = 20.0;
      // pageX,Yでカーソルの座標eから取得
      // document.body.client~でクライアントの画面サイズを取得
      const x = (e.pageX / document.body.clientWidth) * 2 - 1;
      const y = (e.pageY / document.body.clientHeight) * 2 - 1;
      this.rotationX = maxRotation * x;
      this.rotationY = -maxRotation * y;
    },
  }
}
</script>

<style>
html, body {
  height: 100vh;
}

#hoge {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.container {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  transform-origin: 50%;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100%;
  /* 直で埋め込んだ */
  /* transform: perspective(800px); */
}

.bg {
  position: absolute;
  width: 1000px;
  transform: translateZ(-200px);
}

.name-logo {
  position: absolute;
  opacity: 1;
  width: 750px;
  transform: translateZ(100px);
}

@keyframes vertical {
    0% { transform:translateY(-10px); }
  100% { transform:translateY(  0px); }
}

.footer {
  position: fixed;
  bottom: 0;
  padding: 3px;
}
</style>
