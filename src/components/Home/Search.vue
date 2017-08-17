<template>
    <div class="temp">
         <div id="baidu">
            <iframe id="bodyFrame" name="bodyFrame" frameborder="0" :width="width" :height="height">
            
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
                height:window.screen.availHeight-40
            }
        },
        created(){
            this.targetHtml()
        },
        methods:{
            targetHtml(){
                setTimeout(function(){
                var baidu=document.getElementById("baidu")
                var a=document.createElement('a')
                a.href="https://www.baidu.com/"
                a.target="bodyFrame"
                baidu.appendChild(a)
                a.click()
            },10)
            // var bodyFrame=document.getElementById("bodyFrame")     
            }
        }
    }
   
</script>

