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
    <div class="wrapper">
      <div class="wrapper-box">
        <div id="box" class=flex :style="windowSize">
          <div class="item">
            <span>application</span>
            <p>
              <ul>Developing and Deployed products</ul>
            </p>
            <a href="https://github.com/shuta13">GitHub</a>
            <p>
              <ul>Deployed Products</ul>
            </p>
            <a href="https://stable-study.herokuapp.com">stable-study</a>
          </div>
          <div class="item">
            <span>art</span>
            <p>
              <ul>Creative coding<br>by Processing</ul>
              <img src="../assets/frame-0725.png">
              <img src="../assets/frame-0006.png">
            </p>
          </div>
          <div class="item">
            <span>illustration</span>
            <p>
              <ul>painting<br>vocaloid, scene</ul>
              <img src="../assets/miku.jpg">
              <img src="../assets/cloud.jpg">
            </p>
            <a href="https://www.pixiv.net/member.php?id=19834475">Pixiv</a>
          </div>
          <div class="item">
            <span>music</span>
            <p>
              <ul>EDM, Pops</ul>
            </p>
            <iframe width="360" height="240" src="https://www.youtube.com/embed/3iXUMObwmCU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <a href="https://soundcloud.com/user-858183512">Soundcloud</a><br>
            <a href="https://piapro.jp/did0es">Piapro</a>
          </div>
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
    },
    handleClickToHome() {
      this.$router.push({ path: '/' });
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
a {
  position: relative;
  font-family: 'NotoSans';
  top: 0;
  text-decoration: none;
  color: #aaa;
}
p {
  position: relative;
  font-family: 'NotoSans';
  color: #ccc;
}
span {
  color: #666;
}
img {
  margin: 2px;
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
  p {
    font-size: 1em;
  }
  img {
    width: 100px;
    height: 100px;
  }
  iframe {
    width: 200px;
    height: 120px;
  }
  .item {
    margin: 2vh auto;
    height: 56vh;
    width: 68vw;
  }
  .item span {
    font-size: 1.8em; 
  }
}
@media only screen and (min-width: 768px), print {
	.flex{
    display: flex;
  }
  a {
    font-size: 2em;
  }
  p {
    font-size: 2em;
  }
  img {
    width: 160px;
    height: 160px;
  }
  .item {
    margin: 2vh auto;
    height: 64vh;
    width: 22vw;
  }
  .item span {
    font-size: 3.2em; 
  }
}

#box {
  top: 0;
  position: relative;
  text-align: center;
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