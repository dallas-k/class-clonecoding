<template>
    <div class="title">
        <h1>{{ sTitle }}</h1>
    </div>
</template>

<script>
export default {
    name : 'main-title',
    props : {
        sTitle : String
    }
}
</script>

<style>
    .title {
        text-align:center;
        padding:10px;
        font-size:24px;
    }
</style>