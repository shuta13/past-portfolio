<template>
  <div id="work">
    <div class="modal-appear">
      <div class="light-button button-wrapper">
        <div class="button flex" @click="handleClickToHome">
          <span>
            Back
          </span>
        </div>	
      </div>
      <Back @close="closeModal" v-if="modal"></Back>
    </div>
    <dot-loader class="loader" :loading="isLoading" :color="color" :size="size"></dot-loader>
    <div class="wrapper">
      <div class="wrapper-box">
        <div id="box" class=flex :style="windowSize">
          <div class="item">
            <span>coding</span>
            <p>
              Developing and Deployed products
            </p>
            <a href="https://github.com/shuta13">GitHub</a>
            <p>
              Deployed Products
            </p>
            <a href="https://stable-study.herokuapp.com">stable-study</a>
          </div>
          <div class="item">
            <span>art</span>
            <p>
              Creative coding by Processing
              <img src="../assets/frame-0725.jpg">
              <img src="../assets/frame-0006.jpg"><br>
              Logo Design by Abobe Photoshop<br>
              <img class="photo-logo" src="../assets/addict.jpg">
            </p>
          </div>
          <div class="item">
            <span>illustration</span>
            <p>
              Illustration of vocaloid, scene
              <img src="../assets/miku.jpg">
              <img src="../assets/cloud.jpg">
            </p>
            <a href="https://www.pixiv.net/member.php?id=19834475">Pixiv</a>
          </div>
          <div class="item">
            <span>music</span>
            <p>
              EDM, Pops
            </p>
            <iframe @load="loaded" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/607702572&color=%23a0879a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <p></p>
            <a href="https://soundcloud.com/user-858183512">Soundcloud</a><br>
            <p></p>
            <a href="https://piapro.jp/did0es">Piapro</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DotLoader from 'vue-spinner/src/DotLoader';
import { setTimeout } from 'timers';

export default {
  name: 'work',
  components: {
    DotLoader
  },
  data: function () {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      isLoading: true,
      motionEnded: false,
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
    handleResize: function() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる

      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
    handleClickToHome() {
      this.$router.push({ path: '/' });
    },
    loaded() {
      setTimeout(() => {
        this.isLoading = !this.isLoading;
        // this.motionEnded = !this.motionEnded;
      }, 2000)
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
a {
  position: relative;
  font-family: 'Tangerine';
  top: 0;
  text-decoration: none;
  color: #6666cc;
}
.piapro-song {
  color: #66CCCC;
  font-size: 2vw;
}
p {
  position: relative;
  font-family: 'Tangerine';
  color: #aaa;
}
span {
  color: #666;
}
img {
  margin: 4px;
}
.flex{
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
}
@media only screen and (max-width: 767px) {
  .flex {
    display: flex;
    flex-direction: column;
  }
  a {
    font-size: 200%;
  }
  p {
    font-size: 200%;
  }
  .piapro-song {
    font-size: 1vw;
  }
  img {
    width: auto;
    height: 90px;
  }
  .photo-logo {
    width: 120px;
    height: 90px;
  }
  iframe {
    width: 80%;
    height: 40%;
  }
  .item {
    margin: 2vh auto;
    height: 78vh;
    width: 72vw;
    /* overflow: scroll; */
  }
  .item span {
    font-size: 240%; 
  }
}
@media only screen and (min-width: 768px), print {
	.flex{
    display: flex;
  }
  a {
    font-size: 2.4vw;
  }
  p {
    font-size: 2.6vw;
  }
  img {
    width: 40%
  }
  iframe {
    width: 80%;
    height: 30%
  }
  .photo-logo {
    width: 50%;
  }
  .item {
    margin: 2vh auto;
    height: 64vh;
    width: 22vw;
  }
  .item span {
    font-size: 3.2vw; 
  }
  .loader {
    position: absolute;
    margin-left: 42vw;
    margin-top: 28vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.work-item {
  font-family: 'Marcellus SC';
}
.item{
  border-radius: 4px;
  text-align: center;
  padding: 0.5em 1em;
  background: white;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
}
.item span {
  text-align: center;
  font-family: 'Marcellus SC';
  color: #BBB;
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
	overflow: hidden;
	transition: all .35s ease-in-out .35s;
  margin: 0 auto;
  width: 150px;
  position: relative;
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
	transition: all .35s ease-in-out .3s;
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
	transition: all .35s ease-in-out .3s;
}
.button:hover:before {
	left: 0;
	top: 0;
	transition: all ease-in-out .35s;
}
</style>