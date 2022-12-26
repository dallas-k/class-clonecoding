<template>
  <div class="about">
    <commonTitle :sTitle="title" />
  </div>
</template>

<script>
import commonTitle from '@/components/common-title.vue'

export default {
  name: 'EconomyView',
  data() {
    return {
      title : '주요 경제 지표'
    }
  },
  components : {
    commonTitle
  }
}
</script>