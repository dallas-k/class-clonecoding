<template>
    <header>
        <div class="row">
                <div class="header_menu bg-warning">
                    <i id='menu_tab_btn' class="bi bi-list fs-4" @click="openMenu = !openMenu"></i>
                    <p>S&P 1555 (+0.00) 0.0%</p>
                    <p>달러 1322 (+0.00) 0.0%</p>
                </div>
                <div class="menu_tab bg-secondary" v-if="openMenu">
                    <ul>
                        <li><a>홈</a></li>
                        <li><a>주식 관리</a></li>
                        <li><a>포트폴리오</a></li>
                        <li><a>재무제표</a></li>
                        <li><a>주요경제 지표</a></li>
                    </ul>
                </div>
        </div>
    </header>
  </template>

  <script>
  export default {
    data() {
        return {
            openMenu : false
        }
    }
  }
</script>

<style scoped>
.row{
    margin-top:0;
    height:100%;
}
.header_menu {
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.header_menu p {
    font-size:1.2rem;
}
#menu_tab_btn {
    cursor: pointer;
}

.menu_tab {
    position:fixed;
    top:5%;
    height:50%;
    width:30%;
    z-index: 1;
}
.menu_tab ul {
    margin-top:10%;
}
.menu_tab li {
    width:100%;
    height:10%;
    text-align:center;
    padding:5% 0;
}
.menu_tab li a {
    font-size:1.5rem;
    color:white;
}
#menu_tab_btn {
    cursor:pointer;
}
</style>