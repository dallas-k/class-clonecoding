<template>
    <div class="stock">
        <div class="stock-list" v-for="(data,idx) in datas" :key="idx">
            <div class="stock-list-meta list1">
                <span>{{data.date}}</span>
                <span>{{data.category}}</span>
            </div>
            <span class="list2">{{data.name}}</span>
            <span class="list3">{{data.price}}</span>
            <span class="list4">{{data.count}}주</span>
            <span class="list5">{{intOrFloat(data.currency, data.price, data.count)}}</span>
            <span class="list6"><button @click="editStock(idx)">수정</button></span>
        </div>
    </div>
</template>

<script>
import stockList from '../data/stock.json'

export default {
    data(){
        return {
            datas : stockList
        }
    },
    methods : {
        intOrFloat(currency, price, count){
            if(currency === "원"){
                return (price * count).toLocaleString('ko-KR')
            } else {
                return (price * count).toFixed(2).toLowerCase("en-US")
            }
        },
        editStock(idx){
            alert(idx);
        }
    }
}
</script>

<style scoped>
.stock-list {
    display:flex;
    align-items: center;
    border:1px solid var(--color-grey)
}
.stock-list span {
    text-align:center;
    padding:4px;
}
.stock-list-meta span{
    display:block;
}
.list1 {width:15%; font-size:var(--font-small);}
.list2 {width:25%}
.list3 {width:15%}
.list4 {width:15%}
.list5 {width:20%}
.list6 {width:10%}
.list6 button {font-size:var(--font-small)}

@media screen and (max-width:573px) {
    .list1 {font-size:var(--font-xsmall)}
    .list2 {font-size:var(--font-small)}
    .list3 {font-size:var(--font-small)}
    .list4 {font-size:var(--font-small)}
    .list5 {font-size:var(--font-small)}
    .list6 button{font-size:var(--font-xsmall)}
  }
</style>