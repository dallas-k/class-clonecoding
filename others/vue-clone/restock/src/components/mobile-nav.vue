<template>
    <div id="nav_mobile">
        <button><router-link class="nav-link" :to="menus[home]" @click.native="movePrev"><i id='nav_icon' class="fa fa-arrow-left" aria-hidden="true"></i></router-link></button>
        <button><router-link class="nav-link" to="/" @click.native="moveHome"><i id='nav_icon' class="fa fa-home" aria-hidden="true"></i></router-link></button>
        <button><router-link class="nav-link" :to="menus[home]" @click.native="moveNext"><i id='nav_icon' class="fa fa-arrow-right" aria-hidden="true"></i></router-link></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            home : 0,
            menus : ['/stock','/portfolio','/balance','/economy']
        }
    },
    methods : {
        moveNext() {
            this.$emit('mhomeDis', false);
            if(this.home < 3){
                this.home += 1;
            } else {
                this.home = 0;
            }
        },
        movePrev() {
            this.$emit('mhomeDis', false);
            if(this.home > 0){
                this.home -= 1;
            } else {
                this.home = 3;
            }
        },
        moveHome() {
            this.$emit('mhomeDis', true);
        }
    }
}
</script>

<style scoped>
#nav_mobile button {
    width:33%;
    padding:8px;
    line-height:4px;
    background-color: var(--color-dark);
}

#nav_mobile button .nav-link {
display:block;
font-weight: bold;
color: var(--color-white);
font-size:32px;
}

#nav_mobile button .nav-link:hover{
color:var(--color-tomato);
}

#nav_mobile button .nav_icon {
display: block;
font-size:32px;
margin-bottom:8px;
}
</style>