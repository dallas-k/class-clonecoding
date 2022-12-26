<template>
  <div id="homeview" v-if="show" @click="mClick">
    <button>
      <router-link to="/stock" class='home-link'><i class="nav_icon fa fa-bar-chart" aria-hidden="true"></i>주식관리</router-link>
    </button>
    <button>
      <router-link to="/balance" class='home-link'><i class="nav_icon fa fa-calculator" aria-hidden="true"></i>
      재무제표</router-link>
    </button>
    <button>
      <router-link to="/portfolio" class='home-link'><i class="nav_icon fa fa-pie-chart" aria-hidden="true"></i>포트폴리오</router-link>
    </button>
    <button>
      <router-link to="/economy" class='home-link'><i class="nav_icon fa fa-university" aria-hidden="true"></i>경제지표</router-link>
    </button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            show : true
        }
    },
    methods : {
        mClick() {
            this.show = !this.show
        }
    }
}
</script>

<style scoped>
#homeview {
    width : 100%;
    position:relative;
    top:30%;
  }
  #homeview button {
    display:block;
    width:50%;
    font-size:3rem;
    background-color:var(--color-tomato);
    margin:0 auto 32px;
    padding: 12px;
  }
  #homeview button a {
    display: block;
    width:100%;
    height:100%;
    color:var(--color-white);
  }
  .home-link .nav_icon {
    font-size:3rem;
  }
</style>