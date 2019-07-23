<template>
    <nav class="footer">
        <a class="item" @click="goto('/home')" :class="{on:$route.path === '/home'}">
            <i class="icon"></i>
            <span>首页</span>
        </a>
        <a class="item" @click="goto('/catelist')" :class="{on:$route.path === '/catelist'}">
            <i class="icon"></i>
            <span>分类</span>
        </a>
        <a class="item" @click="goto('/topic')" :class="{on:$route.path === '/topic'}"> 
            <i class="icon"></i>
            <span>识物</span>
        </a>
        <a class="item" @click="goto('/cart')" :class="{on:$route.path === '/cart'}">
            <i class="icon"></i>
            <span>购物车</span>
        </a>
        <a class="item" @click="goto('/usecenter')" :class="{on:$route.path === '/usecenter'}">
            <i class="icon"></i>
            <span>个人</span>
        </a>
    </nav>
</template>

<script>
export default {
    name:'FooterGuide',
    methods:{
        goto(path){
            this.$router.replace(path)            
        }
    }
}
</script>

<style lang="stylus">
    .footer
        position fixed
        bottom 0
        left 0
        width 750px
        height 98px        
        border-bottom 2px solid #d9d9d9
        border-top 2px solid #d9d9d9
        background #fff
        display flex
        align-items center
        justify-content space-around
        z-index 8

        .item
            span
                margin-top 7px
                font-size 24px
                display block
            .icon 
                height 40px
                width 40px
                display block
                background-repeat: no-repeat;
                background-size 40px 
                margin 0 auto
                background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png)
                
            &.on 
                span
                    color #b4282d

            &:nth-child(1)
                i
                    background-position-y  -250px 
                &.on > i
                    background-position-y  -200px
            &:nth-child(2)
                i
                    background-position-y  -150px
                &.on > i
                    background-position-y  -100px

            &:nth-child(3)
                i
                    background-position-y  -350px
                &.on > i
                    background-position-y  -300px
            
            &:nth-child(4)
                i
                    background-position-y  -50px
                &.on > i
                    background-position-y  0px

            &:nth-child(5) 
                i
                    background-position-y  -450px
                &.on > i
                    background-position-y  -400px

</style>