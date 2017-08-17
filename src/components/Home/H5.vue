    <template>
        <div class="temp">
            <div class="vue0">
                <div class="nav">
                    <mt-button size="small" @click.native.prevent="active = 'tab-container1'">概念</mt-button>
                    <mt-button size="small" @click.native.prevent="active = 'tab-container3'">资料</mt-button>
                </div>
                <div class="page-tab-container">
                    <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
                        <mt-tab-container-item id="tab-container1">
                            <mt-cell>
                                <div class="vone">
                                    <section>
                                        <h3>HTML5 中的一些有趣的新特性：</h3>
                                        <p>用于绘画的 canvas 元素</p>
                                        <p>用于媒介回放的 video 和 audio 元素 </p>
                                        <p>对本地离线存储的更好的支持</p>
                                        <p>新的特殊内容元素，比如 article、footer、header、nav、section.</p>
                                        <p>新的表单控件，比如 calendar、date、time、email、url、search.</p>
                                    </section>
                                    <section>
                                        <h3>HTML 5 Web 存储</h3>
                                        <p>HTML5 提供了两种在客户端存储数据的新方法:<br>localStorage - 没有时间限制的数据存储;<br>sessionStorage - 针对一个 session 的数据存储</p>
                                        <p>cookie是在浏览器和服务器间来回传递，而且传输数据有限制;而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。sessionStorage是会话级别的存储,仅在当前浏览器窗口关闭前有效,自然也就不可能持久保持;localStorage:始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据.</p>
                                        <p>localStorage是通过setItem和getItem来存或取的。</p>
                                        <p>可以通过localStorage.pagecount来对用户访问页面的次数进行计数.</p>
                                    </section>
                                    <section>
                                        <h3>HTML 5 视频和音频</h3>
                                        <p>H5添加了两个新的标签audio和video，他们通过src来获取url地址，controls会向用户显示控件,autoplay自动播放。</p>
                                    </section>
                                    <section>
                                        <h3>HTML 5 Canvas vs SVG</h3>
                                        <p>SVG 是一种使用 XML 描述 2D 图形的语言。</p>
                                        <p>SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。</p>
                                        <p>SVG 不依赖分辨率,支持事件处理器,最适合带有大型渲染区域的应用程序（比如谷歌地图）,复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）,不适合游戏应用.</p>
                                        <p>Canvas 通过 JavaScript 来绘制 2D 图形。Canvas 是逐像素进行渲染的。</p>
                                        <p>Canvas 依赖分辨率,不支持事件处理器,弱的文本渲染能力,能够以 .png 或 .jpg 格式保存结果图像,最适合图像密集型的游戏，其中的许多对象会被频繁重绘.</p>
                                    </section>
                                     <section>
                                        <h3>HTML5 地理定位</h3>
                                        <p>HTML5 Geolocation API 用于获得用户的地理位置。鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。</p>
                                        <p> getCurrentPosition() 方法来获得用户的位置;</p>
                                        <p>navigator.geolocation.getCurrentPosition(showPosition);如果getCurrentPosition()运行成功，则向参数showPosition中规定的函数返回一个coordinates对象</p>
                                        <p>showPosition() 函数获得并显示经度和纬度;</p>
                                        <p>"Latitude: " + position.coords.latitude ;</p>
                                        <p>"Longitude: " + position.coords.longitude;</p>
                                    </section>
                                     <section>
                                        <h3>HTML 5 应用程序缓存</h3>
                                        <p>使用 HTML5，通过创建 cache manifest 文件，可以轻松地创建 web 应用的离线版本。</p>
                                        <p></p>
                                    </section>
                                    
                                </div>
                            </mt-cell>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="tab-container3">
                            <ul class="mui-table-view">
                                <li class="mui-table-view-cell" v-for="item in linkDate">
                                    <router-link v-bind='{to:"/h5link/"+item.id}'  class="mui-navigate-right"  >
                                        <span>{{item.name}}</span>
                                    </router-link>
                                </li>
                            </ul>
                            <!--<mt-cell title="HTML5 简介" href="http://www.runoob.com/html/html5-intro.html"></mt-cell>
                            <mt-cell title="HTML5 有哪些让你惊艳的 demo？" href="https://www.zhihu.com/question/24398907"></mt-cell>
                            <mt-cell title="模板堂" href="http://m.ecmoban.com/"></mt-cell>
                            <mt-cell title="浅谈：html5和html的区别" href="http://www.duanliang920.com/learn/web/html5/230.html"></mt-cell>
                            <mt-cell title="使用HTML5的十大原因" href="http://www.williamlong.info/archives/3024.html"></mt-cell>
                            <mt-cell title="避免常见的6种HTML5错误用法" href="http://www.daqianduan.com/3860.html"></mt-cell>
                            <mt-cell title="推荐：7个有用的HTML5学习资源" href="http://www.daqianduan.com/3195.html"></mt-cell>
                            <mt-cell title="简单HTML5打造内涵搜索框" href="http://www.daqianduan.com/4287.html"></mt-cell>
                            <mt-cell title="HTML5绘制上海地铁线路图" href="http://www.daqianduan.com/5376.html"></mt-cell>
                            <mt-cell title="Html5新标签解释及用法" href="http://www.daqianduan.com/2857.html"></mt-cell>
                            <mt-cell title="大前端" href="http://www.daqianduan.com/"></mt-cell>-->
                        </mt-tab-container-item>
                    </mt-tab-container>
                </div>
            </div>
        </div>
    </template>

    <style lang="css" scoped>
        .temp {
            background-color: rgb(43, 49, 106);
        }

        .mint-cell {
            background-color: rgb(43, 49, 106);
            color: #fff;
            padding: 0 20px 0 20px;
        }
        section{
            margin-bottom:10px;
        }
        .vue0 {
            background-color: rgb(43, 49, 106);
        }

        .vone {
            margin-top: 2px;
            color: #fff;
        }

        ul {
            list-style: none;
            padding: 0;
        }

        p {
            color: #fff;
            line-height: 20px;
        }

        .item {
            display: inline-block;
        }
        .nav {
            padding: 10px;
        }
        .link {
            color: inherit;
            padding: 20px;
            display: block;
        }

        .page-tab-container {
            background-color: rgb(43, 49, 106);
        }
         .mui-table-view {
            background-color: rgb(43, 49, 106);
            color: aliceblue;
        }

        .mui-table-view li:hover {
            background-color: rgba(1, 1, 1, 0.6);
        }
    </style>

    <script type=text/ecmascript-6>
    export default {
        name: 'page-tab-container',
        data() {
            return {
                active: 'tab-container1',
                linkDate:[
                        {
                            "name":"HTML5 简介",
                            "link":"http://www.runoob.com/html/html5-intro.html",
                            "id":"01"
                        },
                        // {
                        //     "name":"vue知识总结 --博客园",
                        //     "link":"http://www.cnblogs.com/ang-/p/7082291.html",
                        //     "id":"02"
                        // },
                        // {
                        //     "name":"vue.js基础 --简书",
                        //     "link":"http://www.jianshu.com/p/03074b2b4aff",
                        //     "id":"03"
                        // },
                        // {
                        //     "name":"Vuejs的一些总结",
                        //     "link":"https://segmentfault.com/a/1190000005832164",
                        //     "id":"04"
                        // },
                        // {
                        //     "name":"vue知识总结",
                        //     "link":"http://www.cnblogs.com/ang-/p/7082291.html",
                        //     "id":"05"
                        // },
                        // {
                        //     "name":"HTML5 有哪些让你惊艳的 demo？",
                        //     "link":"https://www.zhihu.com/question/24398907",
                        //     "id":"06"
                        // },
                        {
                            "name":"模板堂",
                            "link":"http://m.ecmoban.com/",
                            "id":"07"
                        },
                        // {
                        //     "name":"vue-resource",
                        //     "link":"https://github.com/pagekit/vue-resource",
                        //     "id":"08"
                        // },
                        {
                            "name":"浅谈：html5和html的区别",
                            "link":"http://www.duanliang920.com/learn/web/html5/230.html",
                            "id":"09"
                        },
                         {
                            "name":"使用HTML5的十大原因",
                            "link":"http://www.williamlong.info/archives/3024.html",
                            "id":"10"
                        },
                         {
                            "name":"避免常见的6种HTML5错误用法",
                            "link":"http://www.daqianduan.com/3860.html",
                            "id":"11"
                        },
                         {
                            "name":"推荐：7个有用的HTML5学习资源",
                            "link":"http://www.daqianduan.com/3195.html",
                            "id":"12"
                        },
                        //  {
                        //     "name":"Vue2.0子父组件通信",
                        //     "link":"http://www.jianshu.com/p/2670ca096cf8",
                        //     "id":"13"
                        // },
                        //  {
                        //     "name":"Element",
                        //     "link":"https://github.com/ElemeFE/element",
                        //     "id":"14"
                        // },
                         {
                            "name":"简单HTML5打造内涵搜索框",
                            "link":"http://www.daqianduan.com/4287.html",
                            "id":"15"
                        },
                        {
                            "name":"HTML5绘制上海地铁线路图",
                            "link":"http://www.daqianduan.com/5376.html",
                            "id":"16"
                        },
                        {
                            "name":"Html5新标签解释及用法",
                            "link":"http://www.daqianduan.com/2857.html",
                            "id":"17"
                        },
                        {
                            "name":"大前端",
                            "link":"http://www.daqianduan.com/",
                            "id":"18"
                        }
               ]
            };
        }
    };
    </script>

