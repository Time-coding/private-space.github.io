<template>
    <div class="ziliao" >
        <div id="angulink" >
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
                            "name":"专题:七步走:AngularJS从菜鸟到专家_51CTO.COM",
                            "link":" http://developer.51cto.com/art/201311/416334.htm",
                            "id":"10"
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
                            var angulink=document.getElementById("angulink")
                            var a=document.createElement('a')
                            a.href=item.link
                            a.target="bodyFrame"
                        
                            angulink.appendChild(a)

                            a.click()
                        },10)
                    }
                })
            }
        }
    }
   
</script>

