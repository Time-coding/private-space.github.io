<template>
    <div>
        <!--从mint-ui中导入的图片轮播图-->
        <mt-swipe :auto="3000">
            <!--<a href="">-->
                <mt-swipe-item class="slide1">Hello world</mt-swipe-item>
            <!--</a>-->
           <!--<a href="">-->
                <mt-swipe-item class="slide2">enjoy</mt-swipe-item>
           <!--</a>-->
           <!--<a href="">-->
                <mt-swipe-item class="slide3">Corel VideoStudio</mt-swipe-item>
           <!--</a>-->
        </mt-swipe>
    </div>
</template>

<style scoped>
    .mint-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

    .mint-swipe-item {
        line-height: 200px;
    }

    .slide1 {
        background-image: url("../../images/lun01.jpg");
        background-size: cover;
        opacity:0.9;
        /*background-color: transparent;*/
    }

    .slide2 {
        background-image: url("../../images/lun02.jpg");
        background-size: cover;
        opacity:0.9;
    }

    .slide3 {
        background-image: url("../../images/lun03.jpg");
        background-size: cover;
        opacity:0.9;
    }
</style>

<script type=text/ecmascript-6>

</script>

