<template>
    <div id="topic">
        <div class="header">
            <div class="left"></div>
            <div class="mid">
                <span :class="isRed?'red':'nom'" @click="isRed = true">发现</span>
                <span :class="!isRed?'red':'nom'" @click="isRed = false">甄选家</span>

            </div>
            <div class="right">
                <div class="r-right"></div>
                <div class="r-left"></div>
            </div>
        </div>

            <div class="navbar" v-if="isRed">
                <div class="horizontal-container">
                    <div class="scroll-wrapper" ref="topnav">
                        <ul class="scroll-content">
                            <li class="scroll-item" v-for="(item, index) in topicdata"
                                :class="{current: currentIndex===index}" @click="clickItem(item,index)" :key="index">
                                {{item.name}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="maincontent">

                <ul class="scroll-content">
                    <li class="contentbox" v-for="(item, index) in topicList.subCateList"
                        :class="{current: currentIndex===index}" @click="clickItem(index)" :key="index">
                        <img :src="item.wapBannerUrl" alt="">
                    </li>
                </ul>

            </div>

        <FooterGuide/>

    </div>

</template>

<script>
    import topicdata from '../data/categoryList.json'

    import FooterGuide from '../../components/FooterGuide/index'
    import BScroll from '@better-scroll/core';

    export default {

        components: {
            FooterGuide
        },
        data(){
            return{
                isRed:true,
                topicdata,
                topicList:topicdata[0],
                currentIndex:0
            }
        },
        methods:{
            clickItem(item,index){
                this.currentIndex = index
                this.topicList = item[index]
            }
        },
        beforeDestroy() {
            this.topnav.destroy()
        },
        mounted() {
            this.$nextTick(()=>{
                this.topnav = new BScroll(this.$refs.topnav, {
                    startX:0,
                    scrollX: true,
                    probeType: 1, // listening scroll hook
                    click: true,
                    bounce: {
                        left: false,
                        right: false
                    }
                })
            })
        }

    }
</script>

<style lang="stylus">
    #topic
        .header
            width 700px
            background-color #fff
            height 100px
            padding: 0 26px 0 24px;
            border-bottom: 1px solid #d9d9d9
            .left
                width: 46px
                height: 100px
                background-image: url('../../assets/home.png');
                background-position: 50% 50%
                background-repeat: no-repeat
                background-size: 46px 46px
                float: left
            .right
                width: 140px
                height: 100px
                float: right
                margin-right: 1px
                .r-right
                    width: 62px
                    height: 100px
                    float: left
                    background-image: url('../../assets/fdj.png');
                    background-position: 50% 50%
                    background-repeat: no-repeat
                    background-size: 46px 46px
                .r-left
                    width: 45px
                    height: 100px
                    float: right
                    background-image: url('../../assets/car.png');
                    background-position: 50% 50%
                    background-repeat: no-repeat
                    background-size: 46px 46px
            .mid
                width: 320px
                height: 100px
                float: left
                position: absolute
                left: 50%
                transform translateX(-50%)
                display: flex
                justify-content: center
                align-items: center
                line-height: 100px
                .red
                    font-size 40px
                    font-weight: 700
                    color: #b4282d
                    vertical-align: middle;
                    padding: 0 16px

                .nom
                    font-size 28px
                    color: #7f7f7f;
                    padding: 0 16px
                    vertical-align: middle;

        .navbar
            width: 100%
            .horizontal-container
                width: 100%
                height: 72px
                background: #eee
                .scroll-wrapper
                    width: 100%
                    height: 72px
                    background: #fff
                    border-bottom: 1px solid #d9d9d9
                    display: flex
                    overflow: hidden
                    .scroll-content
                        display: flex
                        justify-content center
                        align-items: center
                        .scroll-item
                            display: flex
                            white-space nowrap
                            line-height: 72px
                            height: 68px
                            font-size 28px
                            color: #7f7f7f
                            padding: 0 8px
                            margin: 0 20px
                            border-bottom: 4px solid #fff;
                        .current
                            color: #B4282D;
                            border-bottom: 4px solid #B4282D;

                            
        .maincontent
            overflow: hidden
            width: 100%
            min-height 1040px
            background: #eee
            .contentbox
                padding: 36px 30px;
                margin : 20px 0
                background: #fff
                width: 100%
</style>