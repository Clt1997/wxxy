<template>
  <div id="home">
      <div class="maskall"  v-if="moreBoolean"  @click="moreBoolean = false"></div>
      <header class="header-warp">
      <div class="header">
        <a href="/" class="logo"></a>
        <div class="search">
          <span class="icon"></span>
          <span class="text">搜索商品, 共21768款好物</span>
        </div>
        <div class="loginbtn">登录</div>
      </div>

      <div class="list-warp">

        <div class="horizontal-container">
            <div class="scroll-wrapper" ref="scroll">
                <ul class="scroll-content" ref='scrollbar'>
                    <li class="scroll-item" v-for="(item, index) in labels"
                    :class="{current: currentIndex===index}" @click="clickItem(index)" :key="index">
                        <span>{{item}}</span>
                    </li>
                </ul>
            </div>
        </div>

          <div class="showbox" v-show="moreBoolean">
              <div class="boxTitle">全部频道</div>
              <ul class="boxContent">
                  <li class="boxItem" v-for="(item, index) in labels"
                       :class="{boxItemActive: currentIndex===index}" @click="clickItem(index)" :key="index">{{item}}</li>
              </ul>
          </div>
        <div class="more-warp">
          <div class="markwhite" v-show="!moreBoolean"></div>
          <div class="more"  @click="moreBoolean = !moreBoolean">
            <div class="icon" :class="{moreActive: moreBoolean}"></div>
          </div>
        </div>
      </div>
    </header>
    <section class="main">
        <swiper class="swiperwarp" :options="swiperOption">
            <swiperSlide class="swiperitem">
            <img
                src="https://yanxuan.nosdn.127.net/7c1ce80acc7625c23246cc99e9cd8f4a.png?imageView&quality=75&thumbnail=750x0"
                alt
            />
            </swiperSlide>
            <swiperSlide class="swiperitem">
            <img
                src="https://yanxuan.nosdn.127.net/5a8fdfaa42b384309a0e7425305fabed.jpg?imageView&quality=75&thumbnail=750x0"
                alt
            />
            </swiperSlide>
            <swiperSlide class="swiperitem">
            <img
                src="https://yanxuan.nosdn.127.net/8d2af3ab55bf51d5ac03e5d9c6fa1fc4.jpg?imageView&quality=75&thumbnail=750x0"
                alt
            />
            </swiperSlide>
            <swiperSlide class="swiperitem">
            <img
                src="https://yanxuan.nosdn.127.net/7c1ce80acc7625c23246cc99e9cd8f4a.png?imageView&quality=75&thumbnail=750x0"
                alt
            />
            </swiperSlide>
            <swiperSlide class="swiperitem">
            <img
                src="https://yanxuan.nosdn.127.net/7c1ce80acc7625c23246cc99e9cd8f4a.png?imageView&quality=75&thumbnail=750x0"
                alt
            />
            </swiperSlide>
            <swiperSlide class="swiperitem">
            <img
                src="https://yanxuan.nosdn.127.net/7c1ce80acc7625c23246cc99e9cd8f4a.png?imageView&quality=75&thumbnail=750x0"
                alt
            />
            </swiperSlide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

        <ul class="g-grow">
            <li class="item">
            <a>
                <i
                class="u-icon"
                style="background-image:url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);"
                ></i>
                <span class="text">网易自营品牌</span>
            </a>
            </li>
            <li class="item">
            <a>
                <i
                class="u-icon"
                style="background-image:url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);"
                ></i>
                <span class="text">30天无忧退货</span>
            </a>
            </li>
            <li class="item" data-reactid=".0.2.0.$2">
            <a>
                <i
                class="u-icon"
                style="background-image:url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);"
                ></i>
                <span class="text">48小时快速退款</span>
            </a>
            </li>
        </ul>

        <div class="shop">
            <ul class="shopcate">
                <a href="##">
                    <li class="shopcateitem">
                    <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                    <span class="text">新品首发</span>
                    </li>
                </a>    
                <a href="##">
                    <li class="shopcateitem">
                    <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                    <span class="text">新品首发</span>
                    </li>
                </a>
                <a href="##">
                    <li class="shopcateitem">
                    <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                    <span class="text">新品首发</span>
                    </li>
                </a>
                <a href="##">
                    <li class="shopcateitem">
                    <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                    <span class="text">新品首发</span>
                    </li>
                </a>
                <a href="##">
                    <li class="shopcateitem">
                    <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                    <span class="text">新品首发</span>
                    </li>
                </a>
                <a href="##">
                    <li class="shopcateitem">
                    <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                    <span class="text">新品首发</span>
                    </li>
                </a>    
                <a href="##">
                    <li class="shopcateitem">
                    <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                    <span class="text">新品首发</span>
                    </li>
                </a>
                <a href="##">
                    <li class="shopcateitem">
                    <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                    <span class="text">新品首发</span>
                    </li>
                </a>
                <a href="##">
                    <li class="shopcateitem">
                    <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                    <span class="text">新品首发</span>
                    </li>
                </a>
                <a href="##">
                    <li class="shopcateitem">
                    <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                    <span class="text">新品首发</span>
                    </li>
                </a>    
            </ul>

            <div class="newpeople">
                <div class="title">
                    <span class=" centertext">
                        新人专享礼
                    </span>
                </div>
                <div class="content">
                    <a href="/">
                        <div class="left">
                            <div class="font">
                                福利社
                            </div>
                            <div class="img">
                                <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png">
                            </div>
                        </div>
                    </a>
                    <a href="/">
                    <div class="item">

                    </div>
                    </a>
                    <a href="/">
                        <div class="item">
                            <div class="font">
                                新人专享
                            </div>
                            <div class="fontsub">
                                新人专享
                            </div>
                            <div class="img">
                                <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png">
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="newpeople">
                <div class="title">
                    <div class=" moretext">
                        <div class="left">
                            品牌制造商直供
                        </div>
                        <div class="more">
                            更多 >
                        </div>
                    </div>
                </div>
                <div class="content">

                    <a href="/">
                    <div class="item">

                    </div>
                    </a>
                    <a href="/">
                        <div class="item">
                            <div class="font">
                                新人专享
                            </div>
                            <div class="fontsub">
                                新人专享
                            </div>
                            <div class="img">
                                <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png">
                            </div>
                        </div>
                    </a>
                    <a href="/">
                    <div class="item">

                    </div>
                    </a>
                    <a href="/">
                        <div class="item">
                            <div class="font">
                                新人专享
                            </div>
                            <div class="fontsub">
                                新人专享
                            </div>
                            <div class="img">
                                <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png">
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="newpeople">
                <div class="title">
                    <div class=" moretext">
                        <div class="left">
                            品牌制造商直供
                        </div>
                        <div class="more">
                            更多 >
                        </div>
                    </div>
                </div>
                <div class="content">

                    <a href="/">
                    <div class="item">

                    </div>
                    </a>
                    <a href="/">
                        <div class="item">
                            <div class="font">
                                新人专享
                            </div>
                            <div class="fontsub">
                                新人专享
                            </div>
                            <div class="img">
                                <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png">
                            </div>
                        </div>
                    </a>
                    <a href="/">
                    <div class="item">

                    </div>
                    </a>
                    <a href="/">
                        <div class="item">
                            <div class="font">
                                新人专享
                            </div>
                            <div class="fontsub">
                                新人专享
                            </div>
                            <div class="img">
                                <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png">
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            
            <div class="bottomS">
                <div class="img">
                    <img src="https://yanxuan.nosdn.127.net/a415cf841405c9c5e14e435d8c57408b.jpg?imageView&thumbnail=750x0&quality=75" alt="">
                </div>
                <div class="bottomSb" ref="viewwarp">
                        <ul class="wrap" ref="viewer">
                            <li class="item"  v-for="item in labels" :key="item">
                                <div class="color">
                                    <div>3</div>
                                    <div>色</div>
                                    <div>可</div>
                                    <div>选</div>
                                </div>
                                <div class="img">
                                    <img src="https://yanxuan.nosdn.127.net/03faa79c841e439c9aeb645977f4f8f7.png?imageView&quality=65&thumbnail=330x330" alt="">
                                </div>
                                <div class="name">
                                    男式精梳棉圆领短袖T恤衫{{item}}
                                </div>
                                <div class="price">
                                    <span class="new">¥29.4</span>
                                    <del class="old">¥41.9</del>
                                </div>
                                <div class="status">
                                    特价
                                </div>
                            </li>

                            <li class="item" >
                                <div class="imgg">查看更多></div>
                            </li>
                        </ul>

                </div>
            </div>

        </div>

    </section>


        <div class="giftimg">
            <a href="/" class="giftimg">
            </a>
        </div>


    <div class="gototop"  v-show="goTopShow" @click="goTop">
    </div>

    <footer class="homefooter">
        <div class="top">
            <a href="/" class="btn">
            <span>下载APP</span>
            </a>
            <a href="/" class="btn">
                <span>电脑版</span>
            </a>
        </div>
        <div class="bottom">
            <span>网易公司版权所有 © 1997-2019</span>
            <span>食品经营许可证：JY13301080111719</span>
        </div>
    </footer>

      <FooterGuide/>

    </div>


</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import BScroll from '@better-scroll/core';
import FooterGuide from '../../components/FooterGuide/index'

export default {
    name:'Home',
    components: {
        swiper,
        swiperSlide,
        FooterGuide
    },
    data() {
        return {
        swiperOption: {
            loop: true, // 循环模式选项
            autoplay: true, //自动
            pagination: {
            el: ".swiper-pagination"
            }
        },
        swiperSlides: [1, 2, 3, 4, 5],
        labels: [
            "推荐",
            "居家生活",
            "服饰鞋包",
            "美食酒水",
            "个护清洁",
            "母婴亲子",
            "运动旅行",
            "数码家电",
            "全球特色"
        ],
        currentIndex: 0,
        scrollTop: '',
        goTopShow:false,
        moreBoolean:false
        };
    },
    mounted() {
        // setInterval(() => {
        //     console.log('simulate async data')
        //     if (this.swiperSlides.length < 10) {
        //         this.swiperSlides.push(this.swiperSlides.length + 1)
        //     }
        // }, 3000);
        this.init();
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed(){
        window.removeEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        this.bs.destroy()
        this.view.destroy()
    },

    methods: {
        init() {
            this.bs = new BScroll(this.$refs.scroll, {
                startX:0,
                scrollX: true,
                probeType: 1, // listening scroll hook
                click: true,
            })
            this.view = new BScroll(this.$refs.viewwarp, {
                startX:0,
                scrollX: true,
                scrollY: false,
                probeType: 1, // listening scroll hook
                click: true,
            })
        },
        clickItem (index) {
            const lis = this.$refs.scrollbar.children
            this.currentIndex = index
            this.bs.scrollToElement(lis[this.currentIndex], 300)
        },

        handleScroll () {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(this.scrollTop>500){
                this.goTopShow=true
            }else{
                this.goTopShow=false
            }
        },
        goTop(){
            let timer=null,_that=this;
            cancelAnimationFrame(timer)
            timer=requestAnimationFrame(function fn(){
                if(_that.scrollTop>0){
                _that.scrollTop-=50;
                document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
                timer=requestAnimationFrame(fn)
                }else {
                cancelAnimationFrame(timer);
                _that.goTopShow=false;
                }
            })
        }

    }

  }

</script>

<style lang="stylus">
#home
    width: 100%
    background: #eee
    .maskall
        z-index 9
        background: #000;
        opacity: 0.5;
        position: fixed
        top: 0
        left: 0
        right: 0
        bottom: 0
    .header-warp
        position: fixed
        top: 0
        width: 100%
        z-index 10
        .header
            width: 690px
            height: 56px
            padding: 16px 30px
            background: #fff
            display: flex
            align-items: center
            z-index 10
            .logo
                margin-right: 20px
                width: 138px
                height: 40px
                display: block
                float: left
                background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
                background-size: 100%
            .search
                width: 442px
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

            .loginbtn
                width: 68px
                height: 36px
                margin-left: 16px
                font-size: 16px
                color: #b4282d
                border: 2px solid #b4282d
                border-radius: 5px
                float: left
                line-height: 40px
                vertical-align: middle
                text-align: center
        .list-warp
            width: 750px
            background: #fff
            position: relative
            height: 60px
            z-index: 2
            margin-top: -1px

            .showbox
                position: absolute
                top: 0
                width: 100%
                background: #fff;
                .boxTitle
                    width: 100%
                    padding-left: 30px
                    line-height: 60px
                    font-size 28px
                    color: #333;
                    height: 60px;
                .boxContent
                    padding-top: 24px
                    display: flex
                    flex-wrap wrap

                    .boxItem
                        width 146px
                        height: 52px
                        border: 2px solid #CCC
                        border-radius: 5px
                        margin-left: 30px
                        margin-bottom: 40px
                        font-size 24px
                        color: #333
                        background: #fafafa;
                        display: flex
                        justify-content: center
                        align-items: center
                    .boxItemActive
                        border: 2px solid #b4282d;
                        color: #b4282d;
            .horizontal-container
                height: 60px
                width: 590px
                padding: 0 30px
                overflow hidden
                .scroll-wrapper
                    width: 590px
                    .scroll-content
                        width: 1400px
                        display inline-block
                    .scroll-item
                        display inline-block
                        text-align center
                        margin-left: 20px
                        height: 60px
                        vertical-align: middle
                        box-sizing: border-box
                        padding: 0 15px
                        &:nth-child(1)
                            margin-left: 0
                        span
                            font-size: 28px
                            line-height: 60px
                            font-family: PingFangSC-Light, helvetica, 'Heiti SC'
                            color: #333
                            outline: 0

                        &.current
                            border-bottom: 4px solid #b4282d
                            span
                                color: #b4282d
            .more-warp
                position: absolute
                right: 0
                top: 0
                display: flex
                z-index 2

                .markwhite
                    background-image: linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
                    height: 60px
                    width: 60px

                .more
                    width: 100px
                    height: 60px
                    display: flex
                    align-items: center
                    justify-content: center

                    .icon
                        background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png)
                        background-size: 30px 30px
                        background-repeat: no-repeat
                        transform rotateZ(0deg)
                        transition transform 0.5s
                        width: 30px
                        height: 30px
                        &.moreActive
                            transform rotateZ(180deg)
                            transition transform 0.5s
    .main
        overflow hidden
        width: 750px
        padding-top 147px
        .swiperwarp
            width: 100%
            height: 370px
            background: #f9f9f9
            .swiperitem
                width: 100%
                height: auto
                img
                    width: 100%
                    height: auto
            .swiper-pagination
                .swiper-pagination-bullet
                    width: 40px
                    height: 4px
                    background: #fff
                    opacity: 0.4
                .swiper-pagination-bullet-active
                    opacity: 1

        .g-grow
            height 72px 
            padding 0 30px
            display flex
            align-items center
            background #fff
            justify-content space-between
            .item
                height 36px
                a
                    display flex
                    align-items center
                    .u-icon
                        height 32px
                        width 32px
                        background-size 100%
                    .text
                        color #333
                        font-size 24px
                        margin-left  8px
        .shop
            width 100%
            .shopcate
                width 100%
                height 341px
                padding-bottom 32px
                display flex
                flex-wrap wrap
                background #fff
                .shopcateitem
                    width 110px
                    height 156px
                    margin 10px 20px 9px
                    display flex
                    flex-direction column
                    align-items center
                    justify-content center
                    img
                        width 110px
                        height 110px
                    .text
                        width 110px
                        height 36px
                        line-height 36px
                        text-align center
                        margin-top 10px
                        font-size 24px
                        color #333

            
            .newpeople
                margin 20px 0
                width 100%
                background #fff
                .moretext
                    height 90px
                    padding 0 30px
                    width 100%
                    display flex
                    justify-content space-between
                    align-items center
                    .left
                        font-size 32px
                        color #333
                        line-height 90px
                    .more
                        font-size 28px
                        line-height 90px
                        color #333
                .title
                    height 90px
                    padding 0 30px
                    display flex
                    justify-content center
                    align-items center
                    .centertext
                        font-size 32px
                        color #333
                        position absolute
                        &::before, &::after
                            content:''
                            width 24px
                            height 4px
                            display block
                            background #000
                            position absolute
                            top 15px
                        &::before
                            left -40px
                         &::after
                            right -40px
                .content
                    width 100%
                    padding 0 30px 30px
                    overflow hidden
                    .left
                        width 340px
                        margin-right 4px
                        height 444px
                        float left
                        background: #F9E9CF
                        border-radius 4px
                        .font
                            padding  30px 0 0 30px
                            font-size 32px
                            color #333
                        .img
                            width 258px
                            height 257px
                            margin 41px
                            img     
                                width 100%
                                height 100%
                    .item
                        width 315px
                        height 200px
                        margin-bottom 4px
                        margin-right 4px
                        float left
                        position relative
                        border-radius 4px
                        background: #FBE2D3
                        padding 20px 0 0 30px
                        .font
                            font-size 32px
                            color #333
                        .fontsub
                            font-size 26px
                            color: #7F7F7F;
                        .img
                            width 200px
                            height 200px
                            position absolute
                            right 0
                            bottom 0
                            img     
                                width 100%
                                height 100%


            .bottomS
                width 100%
                background #ffffff
                margin-bottom 20px
                .img
                    width 100%
                    height 400px
                    margin-bottom 20px
                    img
                        width 100%
                        height 400px
                .bottomSb
                    height 360px
                    width 750px
                    display: flex
                    .wrap
                        padding  0 30px 30px
                        display: flex
                        height 360px
                        .item
                            width 200px 
                            height 360px
                            position relative
                            color #333
                            margin-left: 20px
                            &:nth-child(1)
                                margin-left 0
                            .img
                                width 200px
                                height 200px
                                background #f4f4f4
                                /*background-image url()*/
                                /*background-size 100%*/
                                margin-bottom 12px
                                font-size 28px
                                color: #333
                                line-height: 200px
                                vertical-align: middle
                                text-align: center
                                img
                                    display block
                                    position: absolute
                                    width: 200px
                                    height: 200px
                                    top: 0
                            .imgg
                                width 200px
                                height 200px
                                background #f4f4f4
                                background-size 100%
                                margin-bottom 12px
                                font-size 28px
                                color: #333
                                line-height: 200px
                                vertical-align: middle
                                text-align: center

                            .color
                                display flex
                                font-size 24px
                                flex-direction column
                                align-items center
                                justify-content center
                                color #b4a078
                                border 2px solid #b4a078
                                margin 10px 0 0 10px
                                padding 15px 0
                                float left

                            .name
                                color: #333;
                                width: 200px
                                line-height: 30px
                                margin-bottom 12px
                                font-size 24px

                            .price
                                height: 18px
                                margin-bottom 12px
                                font-size 24px
                                .new
                                    color #b4282d
                                .old
                                    color #999
                                    margin-left 10px

                            .status
                                border: 2px solid #b4282d
                                border-radius: 14px
                                float: left
                                color #b4282d
                                margin-bottom 12px
                                padding 0 12px
                                vertical-align: middle
                                line-height: 32px
                                text-align: center
                                font-size 20px

    .giftimg
        width 112px
        height 80px
        background #fff
        border-radius 40px 0 0 40px
        position fixed
        right 0
        bottom 250px
        z-index 8
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/wapNewUserEntry-b69d0624fd.png)
        background-size 100%
        background-repeat no-repeat

    .gototop
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-f502426678.png)
        background-size 80px 80px
        background-repeat no-repeat
        width 80px
        height 80px
        border-radius 40px 
        position fixed
        right 20px
        bottom 150px
        z-index 2

    .homefooter
        background #414141
        height 160px
        padding 54px 20px 128px 
        border-top: 2px solid rgba(0,0,0,.15);
        .top
            height 62px
            margin-bottom 36px
            width 100%
            display flex
            justify-content center

            .btn
                width 170px
                height 60px
                border 2px solid #999
                border-radius 5px
                &:first-child
                    margin-right 30px
                span
                    font-size 24px
                    line-height 60px
                    color #fff
                    display flex
                    justify-content center
        .bottom
            display flex
            justify-content center
            flex-direction column
            align-items center
            span
                font-size 24px
                line-height 26px
                height 26px
                color #999

</style>
