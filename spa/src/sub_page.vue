<template lang="html">
    <div>
        <h2>Sub Page</h2>
        <button @click="fnSubPage">Sub Page (Router)</button>
    </div>
</template>

<script>
export default {
    methods : {
        // 라우터 함수로 이동할 때는 $router
        fnSubPage(){
        this.$router.push('/sub')
        }
    }
}
</script>