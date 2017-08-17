<template>
    <div class="ziliao" >
        <div id="H5link" >
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
                            var H5link=document.getElementById("H5link")
                            var a=document.createElement('a')
                            a.href=item.link
                            a.target="bodyFrame"
                        
                            H5link.appendChild(a)

                            a.click()
                        },10)
                    }
                })
            }
        }
    }
   
</script>

