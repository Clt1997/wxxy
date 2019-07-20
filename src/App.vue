<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/index'
export default {
  name: 'app',
  components: {
    FooterGuide
  }
}
</script>

<style lang='stylus'>
  #app
    width 100%
    position absolute
    top 0
    bottom 0
    background #000
    font-family: PingFangSC-Light,helvetica,'Heiti SC'

</style>
