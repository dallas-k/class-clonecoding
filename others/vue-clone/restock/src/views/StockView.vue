<template>
  <div class="home">
    <mainTitle />
    <stockHeader />
    <stockList />
  </div>
</template>

<script>
// @ is an alias to /src
import mainTitle from '@/components/main-title.vue'
import stockHeader from '@/components/stock-header.vue'
import stockList from '@/components/stock-list.vue'

export default {
  name: 'StockView',
  components: {
    mainTitle,
    stockHeader,
    stockList
  }
}
</script>
