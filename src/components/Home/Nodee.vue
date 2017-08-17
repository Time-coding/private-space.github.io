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
                                    <h3>Node是什么？</h3>
                                    <p>Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。</p>
                                    <p>Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。 </p>
                                    <p>Node.js 的包管理器 npm，是全球最大的开源库生态系统。</p>
                                    <p>Node 采用的模块化结构是按照 Common JS 规范.</p>
                                </section>
                                <section>
                                    <h3>什么是模块化？</h3>
                                    <p>根据不同的功能和不同的产品属性分成不同的模块，然后模块之间相互关联，构成项目，具有独立性和依赖性。</p>
                                    <p>Common JS 规范：模块的标识应遵循的规则（书写规范）， 定义全局函数require，通过传入模块标识来引入其他模块，执行的结果即为别的模块暴漏出来的API，模块通过变量exports来向往暴漏API，exports只能是一个对象，暴漏的API须作为此对象的属性。但common js的缺点是不能同步加载。 </p>
                                    <p>为了解决commonjs不能同步加载，AMD规范诞生了，代表工具requirejs诞生了，但会预先执行，会造成性能消耗。</p>
                                    <p>seajs的诞生就是为了完善requirejs不优雅的地方。就这样CMD规范诞生了，CMD推崇依赖就近，按需加载。</p>
                                </section>
                                <section>
                                    <h3>Node常用的内置模块</h3>
                                    <p>path:处理文件路径。</p>
                                    <p>fs:操作文件系统。</p>
                                    <p>url:用于解析 URL。</p>
                                    <p>http:提供 HTTP 服务器功能。</p>
                                    <p>querystring:解析 URL 中的查询字符串。</p>
                                    <p>util:提供一系列实用小工具。</p>
                                </section>
                                 <section>
                                    <h3>文件操作</h3>
                                    <ul>
                                        <li><p>path.join()</p></li>
                                        <li><p>path.resolve()</p></li>
                                        <li><p>path.basename() -- 获取文件名（可以忽略扩展名）</p></li>
                                        <li><p>path.dirname() -- 获取路径中的目录部分</p></li>
                                        <li><p>path.extname() -- 获取扩展名部分</p></li>
                                        <li><p>path.isAbsolute() -- 判断是否为绝对路径</p></li>
                                        <li><p>path.normalize() -- 正常化路径（格式）</p></li>
                                        <li><p>path.relative() -- 获取第二个目录相对于第一个目录的相对路径</p></li>
                                        <li><p>path.parse() -- 类似于 JSON.parse</p></li>
                                        <li><p>path.format() -- 类似于 JSON.stringify</p></li>
                                        <li><p>fs.readdir(path[, options], callback)</p></li>
                                        <li><p>fs.readFile(path[, options], callback)</p></li>
                                        <li><p>fs.writeFile(file, data[, options], callback)</p></li>
                                    </ul>
                                </section>
                                
                            </div>
                        </mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab-container3">
                         <ul class="mui-table-view">
                                <li class="mui-table-view-cell" v-for="item in linkDate">
                                    <router-link v-bind='{to:"/nodelink/"+item.id}'  class="mui-navigate-right"  >
                                        <span>{{item.name}}</span>
                                    </router-link>
                                </li>
                            </ul>
                        <!--<mt-cell title="node说明文档" href="http://nodejs.cn/api/"></mt-cell>
                        <mt-cell title="node中文社区" href="http://cnodejs.org/"></mt-cell>
                        <mt-cell title="Node.js - 廖雪峰的官方网站" href="https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434501245426ad4b91f2b880464ba876a8e3043fc8ef000"></mt-cell>
                        <mt-cell title="《快速搭建 Node.js 开发环境以及加速 npm》" href="https://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html"></mt-cell>
                        <mt-cell title="《Node.js 包教不包会》" href="https://github.com/alsotang/node-lessons"></mt-cell>
                        <mt-cell title="《七天学会NodeJS》" href="https://github.com/nqdeng/7-days-nodejs"></mt-cell>
                        <mt-cell title="《前端资源教程》" href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e"></mt-cell>
                        <mt-cell title="《国内的 npm 镜像源》" href="https://github.com/pagekit/vue-resource"></mt-cell>
                        <mt-cell title="《node weekly》" href="http://nodeweekly.com/issues"></mt-cell>
                        <mt-cell title="《node123-node.js中文资料导航》" href="https://github.com/youyudehexie/node123"></mt-cell>
                        <mt-cell title="《Node.js Books》" href="https://github.com/pana/node-books"></mt-cell>-->
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

    ul {
        list-style: none;
        padding: 0;
    }

    p {
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
                            "name":"node说明文档",
                            "link":"http://nodejs.cn/api/",
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
                        //     "name":"node中文社区",
                        //     "link":"http://cnodejs.org/",
                        //     "id":"06"
                        // },
                        {
                            "name":"Node.js - 廖雪峰的官方网站",
                            "link":"https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434501245426ad4b91f2b880464ba876a8e3043fc8ef000",
                            "id":"07"
                        },
                        // {
                        //     "name":"vue-resource",
                        //     "link":"https://github.com/pagekit/vue-resource",
                        //     "id":"08"
                        // },
                        {
                            "name":"《快速搭建 Node.js 开发环境以及加速 npm》",
                            "link":"https://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html",
                            "id":"09"
                        },
                        //  {
                        //     "name":"《Node.js 包教不包会》",
                        //     "link":"https://github.com/alsotang/node-lessons",
                        //     "id":"10"
                        // },
                         {
                            "name":"《七天学会NodeJS》",
                            "link":"https://github.com/nqdeng/7-days-nodejs",
                            "id":"11"
                        },
                         {
                            "name":"《前端资源教程》",
                            "link":"https://cnodejs.org/topic/56ef3edd532839c33a99d00e",
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
                            "name":"《国内的 npm 镜像源》",
                            "link":"https://github.com/pagekit/vue-resource",
                            "id":"15"
                        },
                        {
                            "name":"《node weekly》",
                            "link":"http://nodeweekly.com/issues",
                            "id":"16"
                        },
                        {
                            "name":"《node123-node.js中文资料导航》",
                            "link":"https://github.com/youyudehexie/node123",
                            "id":"17"
                        },
                        {
                            "name":"《Node.js Books》",
                            "link":"https://github.com/pana/node-books",
                            "id":"18"
                        }
            ]
        };
    }
};
</script>

