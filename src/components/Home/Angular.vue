    <template>
        <div class="temp">
            <div class="vue0">
                <div class="nav">
                    <mt-button size="small" @click.native.prevent="active = 'tab-container1'">概念</mt-button>
                    <mt-button size="small" @click.native.prevent="active = 'tab-container2'">资料</mt-button>
                </div>
                <div class="page-tab-container">
                    <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
                        <mt-tab-container-item id="tab-container1">
                            <mt-cell>
                                <div class="vone">
                                    <section>
                                        <h4>AngularJS是什么？</h4>
                                        <p>AngularJS 是一个 JavaScript 框架。它可通过 script标签添加到 HTML 页面。</p>
                                        <p> AngularJS 通过 指令 扩展了 HTML，且通过 表达式 绑定数据到 HTML。</p>
                                        <p>AngularJS 通过 ng-directives 扩展了 HTML。</p>
                                        <p>ng-app 指令定义一个 AngularJS 应用程序。</p>
                                        <p>ng-model 指令把元素值（比如输入域的值）绑定到应用程序。</p>
                                        <p>ng-bind 指令把应用程序数据绑定到 HTML 视图。</p>
                                        <p>ng-init 指令初始化 AngularJS 应用程序变量。</p>
                                    </section>
                                     <section>
                                        <h4>AngularJS 表达式</h4>
                                        <p>AngularJS 表达式写在双大括号内:'{{}}'。</p>
                                        <p>AngularJS 表达式把数据绑定到 HTML，这与 ng-bind 指令有异曲同工之妙。</p>
                                        <p>AngularJS 将在表达式书写的位置"输出"数据。</p>
                                        <p>AngularJS 表达式 很像 JavaScript 表达式：它们可以包含文字、运算符和变量。</p>
                                    </section>
                                    <section>
                                        <h4>AngularJS 自定义指令</h4>
                                        <p>Angular.directive</p>
                                        <p>scope：true，独立作用域，</p>
                                        <p>template ：''模板。</p>
                                        <p>replace：true，替换指令所在的标签</p>
                                        <p>transclude：true，保留替换掉的原有内容</p>
                                        <p>restrict：E(元素)M(注释)C(样式)A(属性)，指定指令的格式</p>
                                    </section>
                                    <section>
                                        <h4>AngularJS 控制器</h4>
                                        <p>AngularJS 表达式写在双大括号内:'{{}}'。</p>
                                        <p>AngularJS 表达式把数据绑定到 HTML，这与 ng-bind 指令有异曲同工之妙。</p>
                                        <p>AngularJS 将在表达式书写的位置"输出"数据。</p>
                                        <p>AngularJS 表达式 很像 JavaScript 表达式：它们可以包含文字、运算符和变量。</p>
                                    </section>
                                    <section>
                                        <h4>AngularJS 过滤器</h4>
                                        <p>语法:语法:{ {数据模型 | 过滤器名字：过滤器参数：多个参数以冒号隔开} }</p>
                                        <p>内置过滤器 currency 货币过滤器、date 日期过滤器、filter 将数据按照某种规则进行过滤、limitTo 限制、orderBy 排序</p>
                                        <p>自定义过滤器 模块对象.filter('自定义过滤器的名字'[function(){ return function(要处理的数据,过滤器参数1,过滤器参数2,){ return 处理后的数据} }</p>
                                    </section>
                                    <section>
                                        <h4>AngularJS 路由</h4>
                                        <p>angualr.config来配置路由</p>
                                        <p>官方路由ngRoute和路由神器ui-router，两者区别就是路由神器可以多视图ui-view</p>
                                        <p>路由就是锚点值和页面的对应关系</p>
                                    </section>
                                    <section>
                                        <h4>AngularJS 服务</h4>
                                        <p>angular.server来设置</p>
                                        <p>服务帮我们new出一个新对象，抽象出常用属性。</p>
                                        <p>比如我们自己封装一个jsonp函数，获取id的方法等等</p>
                                    </section>
                                    <section>
                                        <h4>AngularJS 数据请求方式</h4>
                                        <p>标准的请求方式：$http()</p>
                                        <p>简化的请求方式：$http.get();$http.post();</p>
                                        <p>AngularJS中不能把请求设置为同步。</p>
                                        <p>AngularJS中没有类似Jquery中beforSend的方法。</p>
                                    </section>
                                    <section>
                                        <h4>AngularJS $scope.$watch</h4>
                                        <p>可以监控一个值得变化，当监控的值发生变化的时候就会执行这个函数。</p>
                                        <p>这个方法有三个参数，第一个参数为要监控的数据;<br>第二个参数为回调函数，回调函数的第一个参数为newValue(当前的最新值);第二个参数为oldValue(上一次的值);<br>第三个参数为布尔值，默认值为false，true为深层次监控.</p>
                                    </section>
                                    <section>
                                        <h4>AngularJS $scope.$apply</h4>
                                        <p>如果自己定义的方法(不在angular控制范围内)操作了Html,$scope.$apply()会通知angular帮你更新视图。</p>
                                    </section>
                                </div>
                            </mt-cell>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="tab-container2">
                            <ul class="mui-table-view">
                                <li class="mui-table-view-cell" v-for="item in linkDate">
                                    <router-link v-bind='{to:"/angularlink/"+item.id}'  class="mui-navigate-right"  >
                                        <span>{{item.name}}</span>
                                    </router-link>
                                </li>
                            </ul>
                            <!--<mt-cell title="Angularjs官网" href="https://angular.cn/guide/quickstart"></mt-cell>
                            <mt-cell title="Angularjs菜鸟教程" href="http://www.runoob.com/angularjs/angularjs-tutorial.html"></mt-cell>
                            <mt-cell title="AngularJS的工作原理" href="http://www.cnblogs.com/leo_wl/p/3446075.html"></mt-cell>
                            <mt-cell title="Angularjs中文社区" href="http://www.angularjs.cn/"></mt-cell>
                            <mt-cell title="AngularJS 在实际应用中有哪些优缺点？ --知乎" href="https://www.zhihu.com/question/22284218"></mt-cell>
                            <mt-cell title="Angular --github" href="https://github.com/angular/"></mt-cell>
                            <mt-cell title="AngularJS2.0教程" href="http://cnodejs.org/topic/55af2bc4911fb957520eacef"></mt-cell>
                            <mt-cell title="AngularJS知识库" href="http://lib.csdn.net/mobile/base/23"></mt-cell>
                            <mt-cell title="AngularJS教程" href="https://m.w3cschool.cn/angularjs/"></mt-cell>
                            <mt-cell title="AngularJS1 vs AngularJS2" href="https://www.oschina.net/translate/angular-1-vs-angular-2-a-high-level-comparison"></mt-cell>
                            <mt-cell title="AngularJS的原理及模块" href="http://m.blog.csdn.net/u011579138/article/details/53290810"></mt-cell>-->
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

        .vue0 {
            background-color: rgb(43, 49, 106);
        }

        .vone {
            margin-top: 2px;
            color: #fff;
        }
        .todo{
            height: 100px;
            width: 100px;
            background-color: red;
        }
        ul {
            list-style: none;
            padding: 0;
        }

        p {
            color: #fff;
            line-height: 20px;
        }
                    
        h4 {
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
                            "name":"Angularjs官网",
                            "link":"https://angular.cn/guide/quickstart",
                            "id":"01"
                        },
                        {
                            "name":"Angularjs菜鸟教程",
                            "link":"http://www.runoob.com/angularjs/angularjs-tutorial.html",
                            "id":"02"
                        },
                        {
                            "name":"angularjs表单数据提交-对象方式提交",
                            "link":"http://m.blog.csdn.net/gjq246/article/details/52038775",
                            "id":"03"
                        },
                        {
                            "name":"Angularjs中文社区",
                            "link":"http://www.angularjs.cn/",
                            "id":"04"
                        },
                        {
                            "name":"AngularJS - Wikipedia",
                            "link":"https://en.m.wikipedia.org/wiki/AngularJS",
                            "id":"05"
                        },
                        {
                            "name":"Angular中的内置指令和自定义指令",
                            "link":"http://lib.csdn.net/mobile/article/angularjs/14806",
                            "id":"06"
                        },
                        {
                            "name":"AngularJS1 vs AngularJS2",
                            "link":"https://www.oschina.net/translate/angular-1-vs-angular-2-a-high-level-comparison",
                            "id":"07"
                        },
                        {
                            "name":"AngularJS教程",
                            "link":"https://m.w3cschool.cn/angularjs/",
                            "id":"08"
                        },
                        {
                            "name":"AngularJS知识库",
                            "link":"http://lib.csdn.net/mobile/base/23",
                            "id":"09"
                        },
                        {
                            "name":"专题:七步走:AngularJS从菜鸟到专家",
                            "link":" http://developer.51cto.com/art/201311/416334.htm",
                            "id":"10"
                        }
               ]
            }
        }
    };
    </script>


