<template>
  <div class="home">
    <commonTitle :sTitle="title" />
    <stockHeader />
    <stockList />
  </div>
</template>

<script>
// @ is an alias to /src
import commonTitle from '@/components/common-title.vue'
import stockHeader from '@/components/stock-header.vue'
import stockList from '@/components/stock-list.vue'

export default {
  name: 'StockView',
  data() {
    return {
      title : '보유 주식 관리'
    }
  },
  components: {
    commonTitle,
    stockHeader,
    stockList
  }
}
</script>
