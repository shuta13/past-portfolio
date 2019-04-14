<template>
  <div id='contact'>
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
    <div id="container">
      <a href="mailto:hollystr13@gmail.com">Mail</a>
      <a href="https://twitter.com/did0es">Twitter</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
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
  padding: 6vh;
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 768px) {
  a {
    font-size: 3em;
  }
}
@media only screen and (min-width: 767px) {
  a {
    font-size: 5em;
  }
}
a {
  margin-top: 8vh;
  margin-bottom: 8vh;
  text-decoration: none;
  font-family: 'Marcellus SC';
  color: #000;
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