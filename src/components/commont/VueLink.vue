<template>
    <div class="ziliao" >
        <div id="vuelink" >
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
                            var vuelink=document.getElementById("vuelink")
                            var a=document.createElement('a')
                            a.href=item.link
                            a.target="bodyFrame"
                        
                            vuelink.appendChild(a)

                            a.click()
                        },10)
                    }
                })
            }
        }
    }
   
</script>

