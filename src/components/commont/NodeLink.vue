<template>
    <div class="ziliao" >
        <div id="nodelink" >
            <iframe id="bodyFrame" security="restricted" name="bodyFrame" frameborder="0" :width="width" :height="height">
            
            </iframe>
        </div>
    </div>
</template>

<style scoped>
</style>  
<script type=text/ecmascript-6>
    export default {
        data(){
            return {
                width:window.screen.availWidth,
                height:window.screen.availHeight-40,
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
            }
        },
        created(){
            this.targetHtml()
        },
        methods:{
            targetHtml(){
                 var id = this.$route.params.id
                var arry=this.linkDate
                arry.forEach(item=>{
                    if(id==item.id){
                            setTimeout(function(){
                            var nodelink=document.getElementById("nodelink")
                            var a=document.createElement('a')
                            a.href=item.link
                            a.target="bodyFrame"
                            nodelink.appendChild(a)
                            a.click()
                        },10)
                    }
                })
            }
        }
    }
   
</script>

