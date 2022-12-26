<!-- 분기점
  1.  < 572px : nav바 화살표 이동 / 홈 화면 설정 모드
  2.  < 1023x : 현재 작업 중인 모습
  3.  > 1024px : PC 버전 : vs code처럼 측면에 nav 두고 활용
-->
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
      <mobileNav v-if="mobile" @mhomeDis="mobileConvert" />
      <tabletNav v-if="tablet" />
      <div id="nav_desktop" v-if="desktop">desktop mode : {{width}} </div>
    </nav>

    <footer>
      <commonModal v-if="modal" :click="footerClose" />
    </footer>
  </div>
</template>

<script>
import mobileHome from './components/mobile-home-view.vue'
import mobileNav from './components/mobile-nav.vue'
import tabletNav from './components/tablet-nav.vue'
import commonModal from './components/common-modal.vue'

export default {
  data() {
    return {
      width : window.innerWidth,
      mobile : false,
      tablet : false,
      desktop : false,
      modal : false
    }
  },
  components : {
    mobileHome,
    mobileNav,
    tabletNav,
    commonModal
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
            this.modal = !this.modal;
          }
        },
        mobileConvert(boo){
          this.mobile = boo;
        }
    }

</script>

<style>
header div {
  width:100%;
  background-color:var(--color-tomato);
  position:relative;
}
header div h1 {
  display:block;
  text-align:center;
  padding:8px;
  font-size:1.8rem;
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
  width:100%;
  position:fixed;
  bottom:0;
  border-top:1px solid var(--color-white);
  padding-top:4px;
}
</style>