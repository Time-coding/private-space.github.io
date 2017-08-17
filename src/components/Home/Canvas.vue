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
                                        <h3>什么是 Canvas?</h3>
                                        <p>HTML5 canvas 元素用于图形的绘制，通过脚本 (通常是JavaScript)来完成).</p>
                                        <p>canvas的宽度和高度不允许使用样式设置，要通过标签属性设置.</p>
                                    </section>
                                    <section>
                                        <h3>Canvas操作</h3>
                                        <p>01、获取画布  var cas = document.getElementById('cas');</p>
                                        <p>02、获取画笔 var ctx = cas.getContext('2d');// webgl</p>
                                        <p>03、图形绘制 设置原点ctx.moveTo(100,100);设置下一个点 ctx.lineTo(200,100);</p>
                                        <p>04、描边 ctx.stroke();</p>
                                        <p>05、填充  ctx.fill();</p>
                                    </section>
                                    <section>
                                        <h3>Canvas属性</h3>
                                        <p>线条宽度--lineWidth</p>
                                        <p>描边颜色--strokeStyle</p>
                                        <p>填充颜色--fillStyle</p>
                                        <p>相交线拐点---lineJoin (miter 默认，创建尖角;round 创建圆角;bevel 创建斜角;)</p>
                                        <p>线末端类型--lineCap (butt  默认，向线条的每个末端添加平直的边缘;round 向线条的每个末端添加圆形线帽;square 向线条的每个末端添加正方形线帽;)</p>
                                    </section>
                                    <section>
                                        <h3>Canvas 属性方法</h3>
                                        <p>.stroke()---描边</p>
                                        <p>.closePath()---闭合路径</p>
                                        <p>.fill()---填充颜色</p>
                                        <p>.beginPath()---开辟路径</p>
                                        <p>.save() 作用就是保存当前环境</p>
                                        <p>.restore() 恢复最近一次保存的环境</p>
                                        <p>.strokeRect(100,100,100,100）空心正方体（前两参数是坐标，后两是宽高）</p>
                                        <p>.fillRect(100,100,200,100);实心正方体</p>
                                        <p>.clearRect(110,110,200,100);清除图形</p>
                                    </section>
                                </div>
                            </mt-cell>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="tab-container3">
                           <ul class="mui-table-view">
                                <li class="mui-table-view-cell">
                                    <router-link to="/drawcookies" class="mui-navigate-right">
                                        <span>饼图</span>
                                    </router-link>
                                </li>
                             </ul>
                        </mt-tab-container-item>
                    </mt-tab-container>
                </div>
            </div>
        </div>
    </template>

    <style lang="css" scoped>
    .temp{
        background-color: rgb(43, 49, 106);
    }
    .mint-cell{
        background-color: rgb(43, 49, 106);
        color: #fff;
        padding: 0 20px 0 20px;
    }
    .vue0 {
        background-color:rgb(43, 49, 106);
    }
    .vone {
        margin-top: 2px;
        color: #fff;
    }
    ul{
        list-style: none;
        padding:0;
    }
    p{
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
    .page-tab-container{
        background-color:rgb(43, 49, 106);
    }
    </style>

    <script type=text/ecmascript-6>
    export default {
        name: 'page-tab-container',
        data() {
            return {
                active: 'tab-container1'
            };
        }
    };
    </script>

