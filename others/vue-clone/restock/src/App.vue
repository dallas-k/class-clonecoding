<template>
  <div id="app">
    <router-view/>
    <nav>
      <button><router-link to="/stock" class='footer-link'>주식관리</router-link></button>
      <button><router-link to="/balance" class='footer-link'>재무제표</router-link></button>
      <button><router-link to="/portfolio" class='footer-link'>포트폴리오</router-link></button>
      <button><router-link to="/economy" class='footer-link'>경제지표</router-link></button>
    </nav>
  </div>
</template>

<style>
:root {
  --color-dark : #0A2647;
  --color-white : #FAF8F1;
  --color-tomato : #EB455F;
  --color-grey : #DADADA;
  --font-xlarge : 18px;
  --font-large : 16px;
  --font-medium : 14px;
  --font-small : 12px;
  --font-xsmall : 10px;
}

html, body, p, div, section, span {margin:0; padding:0;}
* {box-sizing: border-box;}
ul {list-style: none;}
a {text-decoration: none;}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-dark);
  color : var(--color-white);
}

nav {
  width:100%;
}

nav button {
  border:none;
  width:25%;
  background-color: var(--color-dark);
}

nav button .footer-link {
  font-weight: bold;
  color: var(--color-white);
}

nav a.router-link-exact-active {
  color: var(--color-tomato);
}
</style>
