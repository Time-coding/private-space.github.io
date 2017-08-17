        <template>
            <div class="temp">   
                <!--头部导航栏-->
                <!--<mt-header fixed title="Code-Timing"></mt-header>-->
                <mt-header fixed title="Hello World">
                    <router-link v-if="isTrue" to="/" slot="left">
                        <mt-button @click="goBack">返回</mt-button>
                    </router-link>
                </mt-header>
                <!--main-->
                <router-view></router-view>
                <!--底部的tab-->
                <nav class="mui-bar mui-bar-tab">
                    <router-link class="mui-tab-item" to="/home">
                        <span class="mui-icon mui-icon-home"></span>
                        <span class="mui-tab-label">首页</span>
                    </router-link>
                    <router-link class="mui-tab-item" to="/studying">
                        <span class="mui-icon mui-icon-bars"></span>
                        <span class="mui-tab-label">资料</span>
                    </router-link>
                    <router-link class="mui-tab-item" to="/member">
                        <span class="mui-icon mui-icon-videocam">
                        </span>
                        <span class="mui-tab-label">剪辑</span>
                    </router-link>
                </nav>
            </div>
		</template>	

		<style>
            .mint-header{
                height: 50px;
                background-color: saddlebrown;
                
            }
            .mint-header-title{
                color:white;
            }
            h1{
                color:brown;
            }
            .tpwthwidt>div{
                background-color: red;
            }
		</style>
		
		<script>
            export default {
                data(){
                    return {
                        isTrue:false
                    }
                },
                created(){
                    this.getTianqi()
                },
                methods:{
                    goBack(){
                        this.$router.go(-1)
                    },
                    getTianqi(){
                        (function(T,h,i,n,k,P,a,g,e){g=function(){P=h.createElement(i);a=h.getElementsByTagName(i)[0];P.src=k;P.charset="utf-8";P.async=1;a.parentNode.insertBefore(P,a)};T["ThinkPageWeatherWidgetObject"]=n;T[n]||(T[n]=function(){(T[n].q=T[n].q||[]).push(arguments)});T[n].l=+new Date();if(T.attachEvent){T.attachEvent("onload",g)}else{T.addEventListener("load",g,false)}}(window,document,"script","tpwidget","//widget.seniverse.com/widget/chameleon.js"))
                        tpwidget("init", {
                            "flavor": "bubble",
                            "location": "WX4FBXXFKE4F",
                            "geolocation": "enabled",
                            "position": "top-right",
                            "margin": "50px 0px",
                            "language": "zh-chs",
                            "unit": "c",
                            "theme": "chameleon",
                            "uid": "U27EE6C818",
                            "hash": "50ee92e7e620fef7557bfaf7b0b12728"
                        });
                        tpwidget("show");
                    }
                },
                watch:{
                    '$route':function(newValue,oldValue){
                        if(newValue.path=='/home'){
                            this.isTrue=false;
                        }else{
                            this.isTrue=true;
                        }
                    }
                }
            }
		</script>