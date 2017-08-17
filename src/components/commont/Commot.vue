<template>
    <div class="ziliao" >
        <div id="sd" >
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
                            "name":"haorooms博客",
                            "link":"http://www.haorooms.com/archives",
                            "id":"01"
                        },
                        {
                            "name":"掘金",
                            "link":" https://juejin.im/welcome/frontend/?utm_source=css88&utm_medium=word&utm_content=ganhuo&utm_campaign=q3_personal",
                            "id":"02"
                        },
                        {
                            "name":"腾讯全端 AlloyTeam 团队 Blog",
                            "link":"http://www.alloyteam.com/page/0/",
                            "id":"03"
                        },
                        {
                            "name":"淘宝前端团队 FED",
                            "link":"http://taobaofed.org/",
                            "id":"04"
                        },
                        {
                            "name":"百度前端团队 FEX",
                            "link":"http://fex.baidu.com/",
                            "id":"05"
                        },
                        {
                            "name":"奇舞团 75t",
                            "link":"https://75team.com/",
                            "id":"06"
                        },
                        {
                            "name":"ECMAScript 6简介",
                            "link":"http://es6.ruanyifeng.com/#docs/intro",
                            "id":"07"
                        },
                        {
                            "name":"阿里 UED团队",
                            "link":"http://www.aliued.com/",
                            "id":"08"
                        },
                        {
                            "name":"百度 EFE",
                            "link":"http://efe.baidu.com/",
                            "id":"09"
                        },
                        {
                            "name":"腾讯 ISUX",
                            "link":"https://isux.tencent.com/",
                            "id":"10"
                        },
                        {
                            "name":"前端乱炖",
                            "link":"http://www.html-js.com/",
                            "id":"11"
                        },
                        {
                            "name":"w3ctech社区",
                            "link":"https://www.w3ctech.com/",
                            "id":"12"
                        },
                        {
                            "name":"张鑫旭博客",
                            "link":"http://www.zhangxinxu.com/wordpress/category/js/",
                            "id":"13"
                        },
                        {
                            "name":"阮一峰博客",
                            "link":"http://www.ruanyifeng.com/blog/",
                            "id":"14"
                        },
                        {
                            "name":"前端开发博客",
                            "link":"http://caibaojian.com/c/front",
                            "id":"15"
                        },
                        {
                            "name":"Node",
                            "link":"https://npm.taobao.org/mirrors/node/latest/docs/api/index.html",
                            "id":"16"
                        },
                        {
                            "name":"awesomes 前端框架库",
                            "link":"https://www.awesomes.cn/repos/Applications/frameworks?page=1",
                            "id":"17"
                        },
                        {
                            "name":"expressjs",
                            "link":"http://expressjs.com/en/starter/installing.html",
                            "id":"18"
                        },
                        {
                            "name":"推酷",
                            "link":"http://www.tuicool.com/",
                            "id":"19"
                        },
                        {
                            "name":"解决移动端1px屏幕适配",
                            "link":"http://www.jianshu.com/p/7e63f5a32636",
                            "id":"20"
                        },
                        {
                            "name":"Mockplus原型设计工具",
                            "link":"http://expressjs.com/en/starter/installing.html",
                            "id":"21"
                        },
                        {
                            "name":"Eslint 代码规范",
                            "link":"http://eslint.org/",
                            "id":"22"
                        },
                        {
                            "name":"Commonjs规范",
                            "link":"http://javascript.ruanyifeng.com/nodejs/module.html#toc4",
                            "id":"23"
                        },
                        {
                            "name":"Helloweba 前端知识库",
                            "link":"http://m.helloweba.com/web.html",
                            "id":"24"
                        },
                        {
                            "name":"Babel的解析引擎",
                            "link":"http://www.alloyteam.com/2017/04/analysis-of-babel-babel-overview/",
                            "id":"25"
                        },
                        {
                            "name":"artemplate",
                            "link":"https://aui.github.io/art-template/docs/",
                            "id":"26"
                        },
                        {
                            "name":"IMweb前端社区",
                            "link":"http://imweb.io/",
                            "id":"27"
                        },
                        {
                            "name":"前端科技",
                            "link":"http://www.alloyteam.com/nav/",
                            "id":"28"
                        },
                        {
                            "name":"jQuery nprogress.js页面加载进度条",
                            "link":"http://www.jq22.com/jquery-info4121",
                            "id":"29"
                        },
                        {
                            "name":"CSDN Postman",
                            "link":"http://m.blog.csdn.net/thebeauty2016/article/details/54348324",
                            "id":"30"
                        },
                        {
                            "name":"廖雪峰 关于nodejs和npm",
                            "link":"https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/00143450141843488beddae2a1044cab5acb5125baf0882000",
                            "id":"31"
                        },
                        {
                            "name":"前端程序员必知的30个Chrome扩展",
                            "link":"http://mp.weixin.qq.com/s/xuTKvrtX8pc2i9IMJ5mDYg",
                            "id":"32"
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
                            var sd=document.getElementById("sd")
                            var a=document.createElement('a')
                            a.href=item.link
                            a.target="bodyFrame"
                        
                            sd.appendChild(a)

                            a.click()
                        },10)
                    }
                })
            }
        }
    }
   
</script>

