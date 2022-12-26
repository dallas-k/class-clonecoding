<template>
  <div class="about">
    <commonTitle :sTitle="title" />
  </div>
</template>

<script>
import commonTitle from '@/components/common-title.vue'

export default {
  name: 'BalanceView',
  data() {
    return {
      title : '재무제표 관리'
    }
  },
  components : {
    commonTitle
  }
}
</script>