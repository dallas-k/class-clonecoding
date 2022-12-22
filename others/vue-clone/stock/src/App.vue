<template>
  <div id="app">
    첫 화면
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      name : 'App'
    }
  }
}
</script>

<style>
  h1, h2, h3, table, td, th, tr, li, ol, ul, form, input, button {box-sizing:border-box;}
  h1, h2, p, div, span {padding:0; margin:0;}
  li, ul, ol {list-style: none; margin:0; padding:0;}
  a {text-decoration: none; color:black;}
  html {height:100%; font-size:62.5%;}
  body, #app {height:100%;}
  .hidden {
    display:none;
    text-indent:-9999px;
  }
</style>
