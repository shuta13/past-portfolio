<template>
  <div id='contact'>
    <dot-loader class="loader" :loading="isLoading" :color="color" :size="size"></dot-loader>
    <div class="blind" v-if="motionContinue"></div>
    <div class="modal-appear">
      <div class="light-button button-wrapper">
        <div class="button" @click="handleClickToHome">
          <span>
            Back
          </span>
        </div>	
      </div>
      <Back @close="closeModal" v-if="modal"></Back>
    </div>
    <img @load="loaded" src="https://www.w3schools.com/w3css/img_lights.jpg" style="opacity: 0;">
    <div id="container">
      <p>
        <a class="item01" href="mailto:hollystr13@gmail.com">mail</a>
      </p>
      <p>
        <a class="item02" href="https://www.facebook.com/profile.php?id=100028982675881">facebook</a>
      </p>
    </div>
  </div>
</template>

<script>
import DotLoader from 'vue-spinner/src/DotLoader';
import { setTimeout } from 'timers';

export default {
  name: 'contact',
  components: { DotLoader },
  data: function () {
    return {
      width: window.innerWidth,
      height: window.innerHeight,

      isLoading: true,
      motionContinue: true,
      color: `#000000`,
      size: `200px`
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
    handleClickToHome() {
      this.$router.push({ path: '/' });
    },
    handleResize: function() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる

      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
    // モーダル部分
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    loaded() {
      setTimeout(() => {
        this.isLoading = !this.isLoading;
        this.motionContinue = !this.motionContinue;
      }, 1800)
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
@keyframes vertical {
    0% { transform:translateY(-10px); }
  100% { transform:translateY(  0px); }
}
.modal-appear {
  display: block;
}
#container {
  height: 72vh;
  padding: 6vh;
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 768px) {
  .item01 {
    font-size: 3em;
  }
  .item02 {
    font-size: 3em;
    width: 18ew;
  }
  a:hover {
    color: #000;
  }
  p:hover {
    background: #fff;
  }
  /* ロード時に要素を隠す */
  .blind {
    position: absolute;
    background-color: rgb(255, 255, 255);
    width: 100vw;
    height: 100vh;
    z-index: 200;
  }
  /* 要素の調整 */
  .wrapper,
  .modal-appear {
    position: absolute;
    z-index: 1;
  }
  .wrapper {
    margin-top: 16vh 
  }
  /* ローディングのアニメーション */
  .loader {
    position: absolute;
    margin-left: 24vw;
    margin-top: 36vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 300;
  }
}
@media only screen and (min-width: 767px) {
  .item01,
  .item02 {
    font-size: 5em;
  }
  .item02 {
    width: 20vw;
  }
  a:hover {
    color: #fff;
  }
  p:hover {
    background: #000;
  }
  /* ロード時に要素を隠す */
  .blind {
    position: absolute;
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    z-index: 200;
  }
  /* 要素の調整 */
  .wrapper,
  .modal-appear {
    position: absolute;
    z-index: 1;
  }
  .wrapper {
    margin-top: 16vh 
  }
  /* ローディングのアニメーション */
  .loader {
    position: absolute;
    margin-left: 42vw;
    margin-top: 36vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 300;
  }
}
a {
  text-align: center;
  margin-top: 8vh;
  margin-bottom: 8vh;
  text-decoration: none;
  font-family: 'Marcellus SC';
  color: #000;
}
p {
  text-align: center;
  margin: 2em;
}
p:hover  {
  transition: color 2s;
  transition: background 1.2s;
}
img {
    width: 1px;
    height: 1px; 
  }

/* ボタンのアニメーション */
.button-wrapper {
	display: inline-block;
	padding: 40px;
}
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
@media only screen and (max-width: 767px) {
  span {
    display: block;
    padding: 2vh 4vw;
    background: #fff;
    z-index: 100;
    position: relative;
    transition: all .35s ease-in-out .35s;
    text-align: center;
  }
}

@media only screen and (min-width: 768px) {
  span {
    display: block;
    padding: 2vh 2vw;
    background: #fff;
    z-index: 100;
    position: relative;
    transition: all .35s ease-in-out .35s;
    text-align: center;
  }
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