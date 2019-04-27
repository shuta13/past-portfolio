<template>
  <div id="works">
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
    <div class="blind" v-if="motionContinue"></div>
    <img @load="loaded" src="https://www.w3schools.com/w3css/img_lights.jpg" style="opacity: 0; width: 1px; height: 1px;">
    <div class="wrapper">
      <div class="wrapper-box">
        <div class="flex box" :style="windowSize">
          <div class="item01" @mouseover="mouseover01" @mouseleave="mouseleave01">
            <span>coding</span>
            <p>
              Developing & Deployed products
            </p>
            <a href="https://github.com/shuta13">GitHub</a>
            <p>
              Deployed Products
            </p>
            <a href="https://stable-study.herokuapp.com">stable-study</a>
          </div>
          <div class="item02" @mouseover="mouseover02" @mouseleave="mouseleave02">
            <span>art</span>
            <p>
              Creative coding by Processing<br>
            </p>
              <a href="https://twitter.com/i/moments/1122156330385416192?ref_src=twsrc%5Etfw">Moment</a><br>
            <p>
              Logo Design by<br>Abobe Photoshop<br>
              <img class="photo-logo" src="../assets/addict.jpg">
            </p>
          </div>
          <div class="item03" @mouseover="mouseover03" @mouseleave="mouseleave03">
            <span>illustration</span>
            <p>
              Illustration of vocaloid, scene
              <img src="../assets/miku.jpg">
              <img src="../assets/cloud.jpg">
            </p>
            <a href="https://www.pixiv.net/member.php?id=19834475">Pixiv</a>
          </div>
          <div class="item04" @mouseover="mouseover04" @mouseleave="mouseleave04">
            <span>music</span>
            <p>
              EDM, Pops
            </p>
            <iframe scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/607702572&color=%23a0879a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <p></p>
            <a href="https://soundcloud.com/user-858183512">Soundcloud</a><br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TweenMax from 'greensock';
import DotLoader from 'vue-spinner/src/DotLoader';
import { setTimeout } from 'timers';

export default {
  name: 'works',
  components: {
    DotLoader
  },
  data: function () {
    return {
      width: window.innerWidth - (window.innerWidth/22),
      height: window.innerHeight - (window.innerHeight/3),
      isLoading: true,
      motionContinue: true,
      color: `rgba(0, 0, 0, 0.5)`,
      size: `240px`,
      timeHover: 0.2
    }
  },
  computed: {
    windowSize() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
      }
    }
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
    handleClickToHome() {
      this.$router.push({ path: '/' });
    },
    loaded() {
      setTimeout(() => {
        this.isLoading = !this.isLoading;
        TweenMax.to('.blind', 0.4, {opacity: 0});
      }, 3000)
      setTimeout(() => {
        this.motionContinue = !this.motionContinue;
      }, 4600)
    },
    mouseover01() {
      if (window.innerWidth > 767) {
        TweenMax.to('.item01', this.timeHover, {
          boxShadow: "0 6px 10px rgba(0, 0, 0, 0.22)",
          zIndex: 100,
          width: "26%",
          padding: "8px 8px"
        });
      }
    },
    mouseover02() {
      if (window.innerWidth > 767) {
        TweenMax.to('.item02', this.timeHover, {
          boxShadow: "0 6px 10px rgba(0, 0, 0, 0.22)",
          zIndex: 100,
          width: "26.4%",
        });
      }
    },
    mouseover03() {
      if (window.innerWidth > 767) {
        TweenMax.to('.item03', this.timeHover, {
          boxShadow: "0 6px 10px rgba(0, 0, 0, 0.22)",
          zIndex: 100,
          width: "26%",
        });
      }
    },
    mouseover04() {
      if (window.innerWidth > 767) {
        TweenMax.to('.item04', this.timeHover, {
          boxShadow: "0 6px 10px rgba(0, 0, 0, 0.22)",
          zIndex: 100,
          width: "26%",
        });
      }
    },
    mouseleave01() {
      TweenMax.to('.item01', this.timeHover, {
        clearProps: "all"
      });
    },
    mouseleave02() {
      TweenMax.to('.item02', this.timeHover, {
        clearProps: "all"
      });
    },
    mouseleave03() {
      TweenMax.to('.item03', this.timeHover, {
        clearProps: "all"
      });
    },
    mouseleave04() {
      TweenMax.to('.item04', this.timeHover, {
        clearProps: "all"
      });
    },
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
html::-webkit-scrollbar, 
body::-webkit-scrollbar {
  display: none;
}
a {
  position: relative;
  font-family: 'Tangerine';
  top: 0;
  text-decoration: none;
  color: #6666cc;
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
  .item01,
  .item02,
  .item03,
  .item04 {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1vh;
    height: 78vh;
    width: 72vw;
    /* overflow: scroll; */
  }
  .item01 span,
  .item02 span,
  .item03 span,
  .item04 span {
    font-size: 240%; 
  }
  /* ロード時に要素を隠す */
  .blind {
    position: absolute;
    background-color: rgb(255, 255, 255);
    width: 100vw;
    height: 104vh;
    z-index: 200;
  }
  /* 要素の調整 */
  .wrapper,
  .modal-appear {
    position: absolute;
    z-index: 1;
  }
  .wrapper {
    display: block;
    margin-top: 16vh;
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
  .loader::-webkit-scrollbar {
    display: none;
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
  span {
    font-size: 140%;
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
  .item01,
  .item02,
  .item03,
  .item04 {
    z-index: 1;
    margin-right: 4px;
    height: 64vh;
    width: 24vw;
  }
  .item01 span,
  .item02 span,
  .item03 span,
  .item04 span {
    font-size: 3.2vw; 
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
    margin-left: 2vw;
    margin-top: 2vh;
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
    margin-top: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 300;
  }
}
.work-item {
  font-family: 'Marcellus SC';
}

/* ホバー前の状態 */
.item01,
.item02,
.item03,
.item04 {
  position: relative;
  border-radius: 4px;
  text-align: center;
  padding: 0.5vw 1vh;
  background: white;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.12);
  border-width: 1.2px;
  z-index: 1;
  /* box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22); */
}
.item01 span,
.item02 span,
.item03 span,
.item04 span {
  text-align: center;
  font-family: 'Marcellus SC';
  color: #BBB;
}
/* ボタンのアニメーション */
.button-wrapper {
  position: relative;
  z-index: 1;
	display: inline-block;
	/* padding: 20px; */
}
.button {
  font-size: 1.6em;
  font-family: 'Marcellus SC';
	background: #fff;
	border: none;
	padding: 2px;
	cursor: pointer;
	display: block;
	overflow: hidden;
	transition: all .35s ease-in-out .35s;
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
	background: #000;
	color: #fff;
}
.dark-button-2 .button:after,
.dark-button-2 .button:before,
.dark-button-2 .button:hover span {
	background: #fff;
	color: #000;
} 
@media only screen and (max-width: 767px) {
  span {
    display: block;
    padding: 2vh 4vw;
    background: #fff;
    z-index: 100;
    /* position: relative; */
    transition: all .35s ease-in-out .35s;
    text-align: center;
  }
  .button-wrapper {
    /* position: absolute; */
    margin-left: 36vw;
    margin-right: 36vw;
    margin-top: 2vh;
  }
}

@media only screen and (min-width: 768px) {
  span {
    color: #333;
    background: #000;
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
	background: #000;
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
	background: #000;
	transition: all .35s ease-in-out .3s;
}
.button:hover:before {
	left: 0;
	top: 0;
	transition: all ease-in-out .35s;
}
</style>