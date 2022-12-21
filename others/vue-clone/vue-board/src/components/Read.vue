<template>
    <div>
        <table>
            <tr>
                <td>글쓴이</td>
                <td>제목</td>
                <td>내용</td>
            </tr>
            <tr v-for="(item,idx) in data" :key="idx" @click="detail(idx)">
                <td>{{item.writer}}</td>
                <td>{{item.title}}</td>
                <td>{{item.content}}</td>
            </tr>
        </table>
        <button @click="write">글쓰기</button>
    </div>
</template>
<script>
import data from '@/data/index.js'

export default {
    name : 'Read',
    data() {
        return {
            data : data
        }
    },
    methods : {
        write() {
            this.$router.push({
                path: 'create'
            })
        },
        detail(idx) {
            this.$router.push({
                name : 'Detail',
                params : {
                    contentId : idx
                }
            })
        }
    }
}
</script>