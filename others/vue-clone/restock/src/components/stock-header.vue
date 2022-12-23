<template>
    <div class="category">
        <button>전체</button>
        <button>한국주식</button>
        <button>미국주식</button>
        <button>실물ETF</button>
        <button>외화</button>
    </div>
</template>

<script>
export default {
    name : 'stock-header'
}
</script>

<style scoped>
    button {
        border:none;
        width:20%;
    }
</style>