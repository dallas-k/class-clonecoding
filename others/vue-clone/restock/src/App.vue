<!-- 분기점
  1.  < 572px : nav바 화살표 이동 / 홈 화면 설정 모드
  2.  < 1023x : 현재 작업 중인 모습
  3.  > 1024px : PC 버전 : vs code처럼 측면에 nav 두고 활용
-->

<!--  mobile version router 설정 -->

<template>
  <div id="app">
    <header>
      <h1>부자아빠</h1>
      
    </header>
    <main>
      <mobileHome v-if="mobile"/>
      <router-view/>
    </main>
    <footer>
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
      menus : {
        "main" : '부자아빠',
        'stock' : "주식관리",
        'balance' : "재무제표",
        'portfolio' : "포트폴리오",
        'economy' : "주요 경제 지표"
      }
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
}

footer {
  display:hidden;
  width:100%;
}

footer button {
  width:25%;
  padding:10px;
  font-size:24px;
  background-color: var(--color-dark);
}

footer button .nav-link {
  font-weight: bold;
  color: var(--color-white);
}

footer a.router-link-exact-active {
  color: var(--color-tomato);
}

footer button .nav_icon {
  display: block;
  font-size:36px;
  margin-bottom:8px;
}

@media screen and (max-width:573px) {
  footer button {
    width:33%;
    padding:4px;
    font-size:var(--font-medium);
    line-height:4px;
  }
  footer .nav-link:hover {
    color : var(--color-tomato)
  }

  footer a.router-link-exact-active {
    color: var(--color-white)
  }
}
</style>
