<template>
    <div class="header">
       cc home

        <FooterGuide/>

    </div>
</template>

<script>
    import FooterGuide from '../../components/FooterGuide/index'

    export default {
        components: {
            FooterGuide
        }
    }
</script>

<style lang="stylus">
    .header
        width 750px
        background-color #ff40ff
        height 100px
</style>