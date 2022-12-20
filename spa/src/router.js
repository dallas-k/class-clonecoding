import Vue from 'vue'
import Router from 'vue-router'

import main_page from './main_page.vue';
import sub_page from './sub_page.vue';

Vue.use(Router)

export default new Router({
    mode : 'history',  // 브라우저의 주소 경로로 '#'이 표시되었던 것이 사라짐.
    base : process.env.BASE_URL, // 초기값 설정
    routes : [
        {path: '/main', component:main_page},
        {path: '/sub', component:sub_page}
    ]
})