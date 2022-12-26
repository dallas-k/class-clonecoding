<!-- 분기점
  1.  < 572px : nav바 화살표 이동 / 홈 화면 설정 모드
  2.  < 1023x : 현재 작업 중인 모습
  3.  > 1024px : PC 버전 : vs code처럼 측면에 nav 두고 활용
-->

<!--  mobile version router 설정 -->

<template>
  <div id="app">
    <header>
      <div>
        <h1>부자아빠<i class="fa fa-question-circle" aria-hidden="true" @click="footerOn"></i></h1>
      </div>
    </header>
    <main>
      <mobileHome v-if="mobile"/>
      <router-view/>
    </main>
    <nav>
      <!-- tablet version -->
      <div id="nav_tablet" v-if="tablet">
        <button>
          <router-link to="/stock" class='nav-link'><i id='nav_icon' class="fa fa-bar-chart" aria-hidden="true"></i>주식관리</router-link>
        </button>
        <button>
          <router-link to="/balance" class='nav-link'><i id='nav_icon' class="fa fa-calculator" aria-hidden="true"></i>
          재무제표</router-link>
        </button>
        <button>
          <router-link to="/portfolio" class='nav-link'><i id='nav_icon' class="fa fa-pie-chart" aria-hidden="true"></i>포트폴리오</router-link>
        </button>
        <button>
          <router-link to="/economy" class='nav-link'><i id='nav_icon' class="fa fa-university" aria-hidden="true"></i>경제지표</router-link>
        </button>
      </div>

      <!-- desktop version -->
      <div id="nav_desktop" v-if="desktop">desktop mode : {{width}}</div>
    </nav>

    <footer>
      <div class="modal" id='modalbg' v-if="modal">
        <div class="modal-body">
          <div class="modal-body-title">
            <h2>부자아빠</h2>
            <i id='modalClose' class="fa fa-times" aria-hidden="true" @click="footerClose"></i>
          </div>
          <div class="modal-body-main">
            <div class="modal-sns">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-github" aria-hidden="true"></i>
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </div>
            <p>대표 연락처 : dallas.wty@gmail.com</p>
            <p><i class="fa fa-copyright" aria-hidden="true"></i>2022 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import mobileHome from './components/mobile-home-view.vue'

export default {
  data() {
    return {
      width : window.innerWidth,
      mobile : false,
      tablet : false,
      desktop : false,
      modal : true
    }
  },
  components : {
    mobileHome
  },
  mounted() {
        window.addEventListener('load', this.media);
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('resize', this.media);
	},
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.width = window.innerWidth;
        },
        media() {
          if(this.width < 574){
            this.mobile = true;
            this.tablet = false;
            this.desktop = false;
          } else {
            this.mobile = false;
            if(this.width > 1024){
              this.tablet = false;
              this.desktop = true;
            } else {
              this.tablet = true;
              this.desktop = false;
            }
          }
        },
        footerOn() {
          this.modal = !this.modal;
        },
        footerClose() {
            this.modal = !this.modal
          }
        }
    }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-dark);
  color : var(--color-white);
  height:100%;
  max-width: 1200px;
  min-height:650px;
  margin:auto;
}

header div {
  width:100%;
  background-color:var(--color-tomato);
  position:relative;
}
header div h1 {
  display:block;
  text-align:center;
  padding:8px;
}
header div i {
  position:relative;
  margin-left:1%;
  font-size:110%;
}
header div i:hover{
  font-size:130%;
  cursor:pointer;
}


nav {
  display:hidden;
  width:100%;
}

nav button {
  width:25%;
  padding:10px;
  font-size:24px;
  background-color: var(--color-dark);
}

nav button .nav-link {
  font-weight: bold;
  color: var(--color-white);
}

nav a.router-link-exact-active {
  color: var(--color-tomato);
}

nav button .nav_icon {
  display: block;
  font-size:36px;
  margin-bottom:8px;
}

@media screen and (max-width:573px) {
  nav button {
    width:33%;
    padding:4px;
    font-size:var(--font-medium);
    line-height:4px;
  }
  nav .nav-link:hover {
    color : var(--color-tomato)
  }

  nav a.router-link-exact-active {
    color: var(--color-white)
  }
}

.modal {
  position:absolute;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  background-color:rgba(0, 0, 0, 0.4);
  z-index:1;
}

.modal-body {
  width:50%;
  position:absolute;
  left:25%;
  top:20vh;
  z-index:2;
}

.modal-body-title {
  height:5vh;
  background-color:var(--color-tomato);
  position:relative;
}
.modal-body-title h2 {
  font-size:1.2rem;
  padding:12px;
  text-align:center;
  vertical-align:middle;
}
.modal-body-title i {
  position:absolute;
  top:5px;
  right:10px;
  font-size:20px;
  cursor:pointer;
}

.modal-body-main {
  height:15vh;
  background-color: var(--color-white);
  text-align:center;
}
.modal-body-main .modal-sns {
  width:100%;
  margin:auto;
}
.modal-body-main .modal-sns i {
  margin:16px 0;
  font-size:12px;
  color:var(--color-dark);
  width:15%;
  font-size:24px;
}
.modal-body-main p {
  color:var(--color-dark);
  margin-bottom:5%;
}




</style>
