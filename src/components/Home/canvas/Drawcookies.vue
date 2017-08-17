        <template>
            <div class="temp">
                <div id="cookie">
                    <img src="../../../images/cook.png">
                    <img src="../../../images/cook1.png">
                    <img src="../../../images/cook2.png">
                    <img src="../../../images/cook3.png">
                </div>
                
            </div>
		</template>	

		<style scoped>
        img{
            width: 100%;
            display: block;
        }

		</style>
		
		<script type=text/ecmascript-6>
            // import Cookie from "./../../Tools/Drawcookies.js"
            export default {
                data() {
                    return {

                    };
                },
                created(){
                    //数据
                   this.Cookies()

                },
                methods:{
                    Cookies(){
                    }
                }
            }
		</script>