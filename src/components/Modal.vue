<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="light-button button-wrapper">
          <div class="modal-content">
            <div id="link">
              <div id="link-item">
                <p>
                  <a>work</a>
                </p>
              </div>
              <!-- <div id="link-item">
                <p>
                  <a>gallery</a>
                </p>
              </div> -->
              <div id="link-item">
                <p>
                  <a>contact</a>
                </p>
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

<style lang="stylus" scoped>
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

  &-window {
    background: #fff;
    overflow: hidden;
  }
  @media only screen and (max-width: 767px) {
    &-content {
      padding: 8vh 6vw;
    }
  }

  @media only screen and (min-width: 768px), print {
    &-content {
      padding: 18vh 40vw;
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
    transform: translateY(-20px);
  }
}

// モーダル
p {
  font-size: 5em;
  font-family: 'Marcellus SC';
  
}
a {
	text-decoration: none;
	outline: none;
}
.link-item {
  vertical-align: middle;
}

.button-wrapper {
	display: block;
  position: relative;
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
span {
	display: block;
	padding: 15px 30px;
	background: #fff;
	z-index: 100;
	position: relative;
	transition: all .35s ease-in-out .35s;
}

// アニメーション
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