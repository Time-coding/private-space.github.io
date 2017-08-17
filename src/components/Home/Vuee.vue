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
                                        <h3>Vue是什么？</h3>
                                        <p>Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的渐进式框架。</p>
                                        <p> Vue 只关注视图层， 采用自底向上增量开发的设计。</p>
                                        <p> Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。</p>
                                        <p>
                                            <a href="http://www.cnblogs.com/ang-/p/7082291.html">vue知识总结</a>
                                        </p>
                                    </section>
                                    <section>
                                        <h3>Vue原理</h3>
                                        <p>vue是通过数据劫持的方式来做数据绑定的，其中最核心的方法便是通过<span class="jiase">Object.defineProperty()</span>来实现对属性的劫持，达到监听数据变动的目的。</p>
                                    </section>
                                    <section>
                                        <h3>Vue2.0子父组件通信</h3>
                                        <h5>a、父组件向子组件传值&nbsp;</h5>
                                        <ol>
                                            <li><p>在子组件中通过通过props创建属性接受父组件传来的值。</p></li>
                                            <li><p>在App.vue中注册Child组件，再在父组件中添加子组件标签，通过v-bind绑定属性子组件创建的属性。</p></li>
                                        </ol>
                                        <h5>b、子组件向父组件传值&nbsp;</h5>
                                        <ol>
                                            <li><p>子组件中需要以某种方式例如点击事件的方法来触发一个自定义事件</p></li>
                                            <li><p>将需要传的值作为$emit的第二个参数，该值将作为实参传给响应自定义事件的方法</p></li>
                                            <li><p>在父组件中注册子组件并在子组件标签上绑定对自定义事件的监听</p></li>
                                        </ol>
                                    </section>
                                    <section>
                                        <h3>Vuex 是什么？</h3>
                                        <p>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。
                                        </p>
                                    </section>
                                    <section>
                                        <h3>vuex 的核心概念？</h3>
                                        <p>解决vue中组件和组件间传值的问题
                                            <a href="http://blog.csdn.net/zhq2005095/article/details/66477902?winzoom=1">vuex 的核心概念</a>
                                        </p>
                                    </section>
                                </div>
                            </mt-cell>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="tab-container3">
                             <ul class="mui-table-view">
                                <li class="mui-table-view-cell" v-for="item in linkDate">
                                    <router-link v-bind='{to:"/vuelink/"+item.id}'  class="mui-navigate-right"  >
                                        <span>{{item.name}}</span>
                                    </router-link>
                                </li>
                            </ul>
                            <!--<mt-cell title="vue官网" href="https://cn.vuejs.org/v2/guide/"></mt-cell>
                            <mt-cell title="vue知识总结 --博客园" href="http://www.cnblogs.com/ang-/p/7082291.html"></mt-cell>
                            <mt-cell title="vue.js基础 --简书" href="http://www.jianshu.com/p/03074b2b4aff"></mt-cell>
                            <mt-cell title="Vuejs的一些总结 --segmentfault" href="https://segmentfault.com/a/1190000005832164"></mt-cell>
                            <mt-cell title="vue知识总结" href="http://www.cnblogs.com/ang-/p/7082291.html"></mt-cell>
                            <mt-cell title="Vuex 框架原理与源码分析" href="http://web.jobbole.com/91187/#"></mt-cell>
                            <mt-cell title="vue-router 2" href="https://router.vuejs.org/zh-cn/"></mt-cell>
                            <mt-cell title="vue-resource" href="https://github.com/pagekit/vue-resource"></mt-cell>
                            <mt-cell title="Vuex" href="https://vuex.vuejs.org/zh-cn/"></mt-cell>
                            <mt-cell title="vue全面介绍--全家桶、项目实例" href="http://m.blog.csdn.net/zhenghao35791/article/details/67639415"></mt-cell>
                            <mt-cell title="进阶vue全家桶" href="https://segmentfault.com/a/1190000008610059"></mt-cell>
                            <mt-cell title="MUI" href="http://dev.dcloud.net.cn/mui/getting-started/"></mt-cell>
                            <mt-cell title="Vue2.0子父组件通信" href="http://www.jianshu.com/p/2670ca096cf8"></mt-cell>
                            <mt-cell title="Element" href="https://github.com/ElemeFE/element"></mt-cell>
                            <mt-cell title="Mint UI 使用文档" href="http://mint-ui.github.io/docs/#/zh-cn2"></mt-cell>
                            <mt-cell title="Vue2.x踩坑与总结" href="https://segmentfault.com/a/1190000008279436"></mt-cell>
                            <mt-cell title="vue重点知识总结 --php中文网" href="http://www.php.cn/js-tutorial-373910.html"></mt-cell>
                            <mt-cell title="jQuery和Vue的区别" href="http://blog.csdn.net/violetjack0808/article/details/51451672"></mt-cell>
                            <mt-cell title="基于Vue项目开发中遇到的坑及终结" href="http://bless-l.github.io/2016/07/17/%E5%9F%BA%E4%BA%8EVue%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E4%B8%AD%E9%81%87%E5%88%B0%E7%9A%84%E5%9D%91%E5%8F%8A%E7%BB%88%E7%BB%93/"></mt-cell>-->
                        </mt-tab-container-item>
                    </mt-tab-container>
                </div>
            </div>
        </div>
    </template>
    <style lang="css" scoped>
        
        .temp{
            background-color: rgb(43, 49, 106);
        }
        .mint-cell{
            background-color: rgb(43, 49, 106);
            color: #fff;
            padding: 0 20px 0 20px;
        }
        .vue0 {
            background-color:rgb(43, 49, 106);
        }
        .vone {
            margin-top: 2px;
            color: #fff;
        }
        ul{
            list-style: none;
            padding:0;
        }
        p{
            color: #fff;
            line-height: 20px;
        }

        h3 {
            text-align: center;
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
        .page-tab-container{
            background-color:rgb(43, 49, 106);
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
                            "name":"vue官网",
                            "link":"https://cn.vuejs.org/v2/guide/",
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
                        {
                            "name":"Vuex 框架原理与源码分析",
                            "link":"http://web.jobbole.com/91187/#",
                            "id":"06"
                        },
                        {
                            "name":"vue-router 2",
                            "link":"https://router.vuejs.org/zh-cn/",
                            "id":"07"
                        },
                        // {
                        //     "name":"vue-resource",
                        //     "link":"https://github.com/pagekit/vue-resource",
                        //     "id":"08"
                        // },
                        {
                            "name":"Vuex",
                            "link":"https://vuex.vuejs.org/zh-cn/",
                            "id":"09"
                        },
                         {
                            "name":"vue全面介绍--全家桶、项目实例",
                            "link":"http://m.blog.csdn.net/zhenghao35791/article/details/67639415",
                            "id":"10"
                        },
                         {
                            "name":"进阶vue全家桶",
                            "link":"https://segmentfault.com/a/1190000008610059",
                            "id":"11"
                        },
                         {
                            "name":"MUI",
                            "link":"http://dev.dcloud.net.cn/mui/getting-started/",
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
                            "name":"Mint UI 使用文档",
                            "link":"http://mint-ui.github.io/docs/#/zh-cn2",
                            "id":"15"
                        },
                        {
                            "name":"Vue2.x踩坑与总结",
                            "link":"https://segmentfault.com/a/1190000008279436",
                            "id":"16"
                        },
                        {
                            "name":"vue重点知识总结 --php中文网",
                            "link":"http://www.php.cn/js-tutorial-373910.html",
                            "id":"17"
                        },
                        {
                            "name":"jQuery和Vue的区别",
                            "link":"http://blog.csdn.net/violetjack0808/article/details/51451672",
                            "id":"18"
                        },
                        {
                            "name":"基于Vue项目开发中遇到的坑及终结",
                            "link":"http://bless-l.github.io/2016/07/17/%E5%9F%BA%E4%BA%8EVue%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E4%B8%AD%E9%81%87%E5%88%B0%E7%9A%84%E5%9D%91%E5%8F%8A%E7%BB%88%E7%BB%93/",
                            "id":"19"
                        }
               ]
            };
        }
    };
    </script>

