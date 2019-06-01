<template>
  <div id="work">
    <div class="modal-appear">
      <div class="light-button button-wrapper">
        <div class="button" @click="handleClickToHome">
          <span>
            back
          </span>
        </div>	
      </div>
      <Back @close="closeModal" v-if="modal"></Back>
    </div>
    <div class="wrapper">
      <div class="wrapper-box">
        <div id="box">
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
              Creative coding by Processing<br>
              <img src="../assets/frame-0725.jpg">
              <img src="../assets/frame-0006.jpg"><br>
              Logo Design by Abobe Photoshop<br>
              <img class="photo-logo" src="../assets/addict.jpg">
            </p>
          </div>
          <div class="item">
            <span>illustration</span>
            <p>
              Illustration of vocaloid, scene<br>
              <img src="../assets/miku.jpg">
              <img src="../assets/cloud.jpg">
            </p>
            <a href="https://www.pixiv.net/member.php?id=19834475">Pixiv</a>
          </div>
          <div class="item">
            <span>music</span>
            <p>
              EDM Pops
            </p>
            <iframe scrolling="no" frameborder="no" allow="autoplay" 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/568506840&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe><br>
            <a href="https://soundcloud.com/user-858183512">Soundcloud</a><br>
            <a class="piapro-song" href="https://piapro.jp/t/IA0R">Supernova<br>(Applied Magical Mirai 2019)</a><br>
            <a href="https://piapro.jp/did0es">Piapro</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax } from 'greensock'

export default {
  name: 'work',
  methods: {
    handleClickToHome() {
      this.$router.push({ path: '/' });
    },
  },
  created: function() {
    TweenMax.set("body", {overflowY:'scroll'});
    var scrollSpeed = 0.2;
    var scrollHeight = 10000;
    TweenMax.set("body", {height:scrollHeight, overflowY:'scroll'});
    document.addEventListener("scroll", function () {
      const pixels = document.documentElement.scrollTop || document.body.scrollTop;
      TweenMax.to(".item",1,{x:-3.5 * pixels})
      console.log(pixels);
    }, false);
  }
}
</script>


<style scoped>
html, body {
  width: 100%;
  display: none;
}
.item::-webkit-scrollbar {
  display: none;
}
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
  top: 0;
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
    font-size: 360%;
  }
  p {
    margin-left: auto;
    margin-right: auto;
    font-size: 360%;
  }
  .piapro-song {
    font-size: 240%;
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
    overflow: scroll;
    margin: 2vh auto;
    height: 56vh;
    width: 72vw;
  }
  .item span {
    font-size: 300%; 
  }
  span {
    display: block;
    padding: 2vh 4vw;
    background: #fff;
    z-index: 100;
    position: relative;
    transition: all .35s ease-in-out .35s;
    text-align: center;
  }
  .button {
    vertical-align: middle;
    position: relative;
  }
}
@media only screen and (min-width: 768px), print {
  a {
    font-size: 420%;
  }
  p {
    font-size: 400%;
  }
  img {
    width: 40%
  }
  iframe {
    top: 0;
    width: 80%;
    height: 40%
  }
  .photo-logo {
    width: 40%;
  }
  .item {
    vertical-align: middle;
    display: inline-block;
    overflow: scroll;
    height: 240%;
    width: 42vw;
    margin-left: 1.2%;
    margin-right: 1.2%;
  }
  .item span {
    font-size: 400%;
  }
  /* #box {
  /* overflow-x: auto;
    width: 5000px;
    height: 300px;
    left: 5000px;
  } */
  span {
    display: block;
    padding: 2vh 1.8vw;
    background: #fff;
    z-index: 100;
    position: relative;
    transition: all .35s ease-in-out .35s;
    text-align: center;
    font-size: 140%;
  }
  .button {
    position: relative;
  }
  .modal-appear {
    /* height: 0; */
  }
  .wrapper-box {
    position:fixed;
    height:300px;
    top:60px;
    left:-5000px;
    margin-top:10vh;
  }
  #box {
    position: absolute;
    width: 4000px;
    height: 300px;
    left: 5000px;
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
  color: #888;
}

/* ボタンのアニメーション */
.button-wrapper {
	display: inline-block;
	/* padding: 40px; */
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