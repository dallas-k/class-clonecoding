<template>
    <div id="app">
      <mainHeader></mainHeader>
      <main>body</main>
      <mainFooter></mainFooter>
    </div>
  </template>
  
  <script>
  import mainHeader from './components/mainHeader.vue'
  import mainFooter from './components/mainFooter.vue'
  
  export default {
    name: 'app',
    data () {
      return {
  
      }
    },
    components : {
      mainHeader,
      mainFooter
    },
  }
  </script>
  
  <style scoped>  
    header {height:5%; margin:0;}
    main {height:85%; margin:0;}
    footer {height:10%; margin:0;}
  </style>
  