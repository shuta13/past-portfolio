<template>
  <div id="app">
    <div id="logo" @mousemove="onMouseMoved" @touchmove="onMouseMoved">
      <div class="container" v-bind:style="rotation">
        <img class="bg" src="./assets/back_image.png">
        <img class="name-logo" src="./assets/name.png">
      </div>
    </div>
    <div class="example-modal-window">
      <!-- <button type="checkbox" @click="openModal"></button> -->
      <div class="light-button button-wrapper">
        <div class="button" @click="openModal">
          <span>
            Menu
          </span>
        </div>	
      </div>

      <!-- コンポーネント Modal -->
      <Modal @close="closeModal" v-if="modal">
        <!-- default スロットコンテンツ -->
      </Modal>
    </div>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'app',
  components: { Modal },
  data() {
    return {
      // rotatinoを動的に変化させる
      rotationX: 0.0,
      rotationY: 0.0,

      modal: false,
      message: '',
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
    // モーダル部分
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    doSend() {
      if (this.message.length > 0) {
        alert(this.message)
        this.message = ''
        this.closeModal()
      } else {
        alert('メッセージを入力してください')
      }
    }
  },
}
</script>

<style>
html, body {
  height: 100vh;
}

#logo {
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

.example-modal-window {
  position: absolute;
  top: 0;
  display: block;
  text-align: left;
}
.button-wrapper {
	display: inline-block;
	padding: 40px;
}
/* .dark-button,
.dark-button-2 {
	background: #333;
} */
.button {
  font-size: 2em;
  font-family: 'Marcellus SC';
	background: #fff;
	border: none;
	padding: 2px;
	cursor: pointer;
	display: block;
	position: relative;
	overflow: hidden;
	transition: all .35s ease-in-out .35s;
  margin: 0 auto;
  width: 150px;
  text-align: center;
}
.dark-button .button,
.dark-button .button span {
	background: #333;
	color: #fff;
}
.dark-button .button:after,
.dark-button .button:before,
.dark-button .button:hover span {
	background: #fff;
	color: #444;
} 
.dark-button-2 .button,
.dark-button-2 .button span {
	background: #333;
	color: #fff;
}
.dark-button-2 .button:after,
.dark-button-2 .button:before,
.dark-button-2 .button:hover span {
	background: #fff;
	color: #444;
} 
span {
	display: block;
	padding: 15px 30px;
	background: #fff;
	z-index: 100;
	position: relative;
	transition: all .35s ease-in-out .35s;
}
.button:hover span {
	background: #333;
	color: #fff;
	transition: all .35s ease-in-out .35s;
}
/* 右下のライン */
.button:after {
	bottom: -100%;
	right: -100%;
	content: "";
	width: 100%;
	height: 100%;
	position: absolute;
	background: #333;
	transition: all .35s ease-in-out .5s;
}
.button:hover:after {
	right: 0;
	bottom: 0;
	transition: all ease-in-out .25s;
}
/* 左上のライン */
.button:before {
	top: -100%;
	left: -100%;
	content: "";
	width: 100%;
	height: 100%;
	position: absolute;
	background: #333;
	transition: all .35s ease-in-out .5s;
}
.button:hover:before {
	left: 0;
	top: 0;
	transition: all ease-in-out .35s;
}
</style>
