<template>
  <transition name="modal" appear>
    <div id="modal" class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="light-button button-wrapper">
          <div class="modal-content">
            <div id="link">
              <div id="link-item">
                <p @click="handleClickToWork" @mouseover:style="hoverEffect">work</p>
                <p @click="handleClickToContact">contact</p>
              </div>
            </div>
          </div>
          <div @click="$emit('close')" class="button">
            <span>
              Close
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  methods: {
    handleClickToWork() {
      this.$router.push({ path: '/work' });
    },
    handleClickToContact() {
      this.$router.push({ path: './contact' });
    }
  },
  computed: {
    hoverEffect() {
      return {
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
html::-webkit-scrollbar, 
body::-webkit-scrollbar {
  display: none;
}
// モーダル
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  // ざっくりレスポンシブ対応
  @media only screen and (max-width: 767px) {
    &-content {
      padding: 12vh 6vw;
    }
    &-window {
      background: #000;
      overflow: hidden;
    }
  }
  @media only screen and (min-width: 768px), print {
    &-content {
      padding: 14vh 36vw;
    }
    &-window {
      background: #fff;
      overflow: hidden;
    }
  }
}
// オーバーレイのトランジション
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;
  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}
// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
  .modal-window {
    opacity: 0;
    transform: translateY(-60px);
  }
}

// モーダル(ベース)
@media only screen and (max-width: 767px) {
  p {
    width: 64vw; 
    text-decoration: none;
    outline: none;
    color: #fff;
    font-size: 4em;
    font-family: 'Marcellus SC';
    background: #000;
  }
  p:hover {
    color: #000;
    background: #fff;
  }
  .button {
    vertical-align: middle;
    margin-left: auto;
    margin-right: auto;
  }
  .button-wrapper {
    position relative
    display: inline-block;
    padding: 8vw;
  }
}
@media only screen and (min-width: 768px), print { 
  p {
    width: 24vw;
    text-decoration: none;
    outline: none;
    color: #000;
    font-size: 6vw;
    font-family: 'Marcellus SC';
    background: #fff;
  }
  p:hover {
    color: #fff;
    background: #000;
  }
  .button {
    margin: 2vh auto;
  }
  .button-wrapper {
    display: block;
  }
}
p {
  text-align: center;
}
p:hover  {
  transition: color 2s;
  transition: background 1.2s;
}
.link-item {
  vertical-align: middle;
}

// ボタン
.button-wrapper {
  // ここいじるとmenuのレイアウトずれる
  padding: 3.2vh 1.8vw;
}
.button {
  font-family: 'Marcellus SC';
  font-size: 2em;
	background: #fff;
	border: none;
	padding: 2px;
	cursor: pointer;
	display: block;
	position: relative;
	overflow: hidden;
	transition: all .35s ease-in-out .35s;
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
// ボタンの中の文字の位置
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
// ボタンのアニメーション
.button:hover span {
	background: #333;
	color: #fff;
	transition: all .35s ease-in-out .35s;
}
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