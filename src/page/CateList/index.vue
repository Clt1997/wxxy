<template>
    <div id="cateList">
        <div class="top">
            <div class="search">
                <span class="icon"></span>
                <span class="text">搜索商品, 共21768款好物</span>
            </div>
        </div>
        <div class="scrollList">
            <div class="core-container-left">
                <div class="scroll-wrapper" ref="leftScroll">
                    <div class="scroll-content">
                        <div class="scroll-item" v-for="(item, index) in cateListData" :key="index" :class="{scrollItemActive: currentIndex===index}" @click="clickHandler(item,index)" >
                            {{item.name}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="core-container-right">
                <div class="scroll-wrapper" ref="rightScroll">
                    <div class="scroll-content">
                        <img class="banimg" :src="this.listItem.bannerUrl" alt="">
                        <div class="scroll-item" v-for="(item, index) in listItem.subCateList" :key="index"  @click="console.log(item[index])" >
                            <img class="img" :src="item.wapBannerUrl" alt="item.frontName">
                            <span>{{item.name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterGuide/>

    </div>

</template>

<script>
    import cateListData from '../data/categoryList.json'

    import FooterGuide from '../../components/FooterGuide/index'

    import BScroll from '@better-scroll/core'
    export default {
        components: {
            FooterGuide
        },
        data(){
            return{
                cateListData,
                listItem:cateListData[0],
                currentIndex:0
            }
        },
        mounted() {
            this.$nextTick(()=>{
                    this.init()
            })
        },
        beforeDestroy() {
            this.ls.destroy()
            this.rs.destroy()
        },
        watch:{
            listItem(){
                this.$nextTick(()=>{
                    this.rs.refresh()
                })
            }
        },
        methods: {
            init() {
                this.ls = new BScroll(this.$refs.leftScroll, {
                    scrollY: true,
                    click: true,
                    probeType: 1 // listening scroll hook
                })
                this.rs = new BScroll(this.$refs.rightScroll, {
                    scrollY: true,
                    click: true,
                    probeType: 1 // listening scroll hook
                })
            },
            clickHandler (item,index) {
                this.currentIndex = index
                this.listItem = item
                this.rs.refresh()
            },

        }

    }
</script>

<style lang="stylus">
    #cateList
        width 750px
        background-color #fff
        height 100%
        .top
            height: 88px
            padding: 0 30px
            background: #fff;
            display: flex
            align-items: center
            border-bottom: 2px solid #eee
            z-index: 9;
            .search
                width: 100%
                height: 56px
                float: left
                background: #ededed
                border-radius: 10px
                display: flex
                justify-content: center
                align-items: center
                .icon
                    width: 28px
                    height: 28px
                    background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
                    background-size: 100%
                    display: inline-block
                    margin-right: 10px
                .text
                    font-size: 28px
                    line-height: 40px
                    vertical-align: baseline
                    height: 40px
                    color: #666
    .scrollList
        height: 1142px
        .core-container-left
            width: 162px
            height: 1062px
            padding: 40px 0;
            float: left
            .scroll-wrapper
                width: 162px
                height: 100%
                overflow: hidden
                .scroll-content
                    min-height: 101%
                    .scroll-item
                        height 50px
                        line-height 50px
                        font-size 28px
                        border-left 6px solid #fff
                        text-align center
                        margin-top: 50px
                        width: 162px
                        color: #333;
                        &:first-child
                            margin-top: 0px
                    .scrollItemActive
                        height 50px
                        border-left 6px solid #ab2b2b
                        color: #ab2b2b;
        .core-container-right
            margin-left: 162px
            height: 100%
            padding: 30px 30px 21px;
            overflow hidden
            .scroll-wrapper
                height: 1091px
                width 528px
                .scroll-content
                    width: 100%
                    min-height: 1113px
                    .banimg
                        width: 100%
                        margin-bottom: 35px;
                    .scroll-item
                        font-size 24px
                        font-weight bold
                        text-align center
                        display: inline-block;
                        margin-right: 32px;
                        width: 144px
                        height: 216px;
                        .img
                            width: 144px
                            display: block
                        span
                            height: 72px;
                            width: 144px
                            display: block

</style>