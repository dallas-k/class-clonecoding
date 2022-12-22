<template>
    <footer>
        <div class="row">
            <ul class="footer_menu bg-warning">
                <li><a href=""><div class="mb-2"><i class="bi bi-bell"></i></div>알림</a></li>
                <li><a href=""><div class="mb-2"><i class="bi bi-building"></i></div>My자산</a></li>
                <li><a href=""><div class="mb-2"><i class="bi bi-piggy-bank"></i></div>복리 계산기</a></li>
                <li><a href=""><div class="mb-2"><i class="bi bi-calculator"></i></div>대출 계산기</a></li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.row {
    height:100%;
}
.footer_menu {
    display: flex;
    padding:0px;
}
.footer_menu li {
    width:25%;
    text-align:center;
}
.footer_menu a{
    display:block;
    text-align:center;
    font-size:1.8rem;
}
.footer_menu li:hover{
    background-color:#999;
}
.footer_menu a:hover{
    color:white;
}
.footer_menu a i{
    font-size:3rem;
}
</style>