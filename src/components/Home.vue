<template>
    <div class="temp">
        <!--调用封装的轮播图组件-->
        <Lunbo></Lunbo>
        <!--从mui框架中导入九宫格样式-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/vuee">
                        <span class="mui-icon iconfont icon-vuejs"></span>
                        <div class="mui-media-body">Vue</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/angular">
                        <span class="mui-icon iconfont icon-socialangular">
                            <!--<span class="mui-badge">5</span>-->
                        </span>
                        <div class="mui-media-body">Angualr</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                   <router-link to="/nodee">
                        <span class="mui-icon iconfont icon-nodejs2"></span>
                        <div class="mui-media-body">Node</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/h5">
                        <span class="mui-icon iconfont icon-h5-copy"></span>
                        <div class="mui-media-body">H5</div>
                     </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/css3">
                        <span class="mui-icon iconfont icon-css3-copy"></span>
                        <div class="mui-media-body">Css3</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/canvas">
                        <span class="mui-icon iconfont icon-canvas"></span>
                        <div class="mui-media-body">Canvas</div>
                     </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/vuee">
                        <span class="mui-icon mui-icon-gear"></span>
                        <div class="mui-media-body">Setting</div>
                     </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/about">
                        <span class="mui-icon mui-icon-info"></span>
                        <div class="mui-media-body">about</div>
                     </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/search">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">Search</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.img {
    width: 100%;
}
ul{
    margin-top:0px;
}
.mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
}
.mui-content>.mui-table-view:first-child {
   margin-top: 0px;
}
.mint-swipe-item {
    line-height: 200px;
}

.slide1 {
    background-color: #0089dc;
    color: #fff;
}

.mui-icon-home {
    background-image: url("../images/news.png");
    /*设置图片环绕*/
    background-size: contain;
}

.mui-icon-home:before {
    content: '';
}

.mui-icon {
    width: 40px;
    height: 40px;
}


/*设置背景色为白色*/

.mui-grid-view.mui-grid-9 {
     background-color: white;
     color: chocolate;
}


/*.mui-icon-home {
        background-image: url("../images/news.png");
        设置图片环绕
        background-repeat: round;
    }*/
</style>

<script type=text/ecmascript-6>
import Lunbo from './Tools/Lunbo.vue'
import URL from './Tools/URL'
export default {
    data() {
        return {
            homeData: [],
        }
    },
    // 这个方法调用的时间是初始化完毕data和methods以后调用
    created() {
        this.getHomeData()
        this.geticofont()
    },
    methods: {
        // home页面请求轮播数据
        getHomeData() {
            var url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/getlunbo`
            this.$http.get(url).then(
                res => {
                    this.homeData = res.body.message
                },
                res => {
                    console.log(res)
                }
            )
        },
        geticofont(){
            //添加图标
            var link=document.createElement('link')
            link.href="./components/Home/font/iconfont.css"
            link.type="text/css"
            link.rel="stylesheet"
            var head=document.querySelector('#head')
            head.appendChild(link)
        },
    },
    components: {
        Lunbo
    }
}
</script>