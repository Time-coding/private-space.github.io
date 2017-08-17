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
                                        <h3>Css3边框</h3>
                                        <p>border-radius</p>
                                        <p>box-shadow </p>
                                        <p>border-image</p>
                                    </section>
                                    <section>
                                        <h3>CSS3 背景</h3>
                                        <p>background-size</p>
                                        <p>background-origin 属性规定背景图片的定位区域,背景图片可以放置于content-box、padding-box 或 border-box 区域。</p>
                                        <p>background-clip 规定背景的绘制区域。</p>
                                    </section>
                                    <section>
                                        <h3>CSS3 文本效果</h3>
                                        <p>text-shadow 规定水平阴影、垂直阴影、模糊距离，以及阴影的颜色;</p>
                                        <p>word-wrap 属性允许您允许文本强制文本进行换行 - 即使这意味着会对单词进行拆分.</p>
                                    </section>
                                    <section>
                                        <h3>CSS3 字体</h3>
                                        <p>字体是在 CSS3 @font-face 规则中定义的。</p>
                                        <p>属性：font-family 规定字体的名称。</p>
                                        <p>src 定义字体文件的 URL。</p>
                                        <p>font-stretch 定义如何拉伸字体。默认是 "normal"。</p>
                                    </section>
                                    <section>
                                        <h3>CSS3 多列</h3>
                                        <p>column-count 属性规定元素应该被分隔的列数;</p>
                                        <p>column-gap 属性规定列之间的间隔;</p>
                                        <p>column-rule 属性设置列之间的宽度、样式和颜色规则。</p>
                                    </section>
                                    <section>
                                        <h3>CSS3 过渡</h3>
                                        <p>transition-property 规定应用过渡的 CSS 属性的名称;</p>
                                        <p>transition-duration 定义过渡效果花费的时间。默认是 0;</p>
                                        <p>transition-timing-function 规定过渡效果的时间曲线。默认是 "ease"。</p>
                                        <p>transition-timing-function 规定过渡效果的时间曲线。默认是 "ease"。</p>
                                        <p>transition-timing-function 规定过渡效果何时开始。默认是 0。</p>
                                    </section>
                                    <section>
                                        <h3>CSS3 动画</h3>
                                        <p>@keyframes 规则用于创建动画;</p>
                                        <p>animation调用;</p>
                                        <p>animation-direction: normal|alternate;alternate动画应该轮流反向播放</p>
                                        <p>animation-iteration-count: infinite;无限循环;</p>
                                        <p>animation: myfirst 5s linear 2s infinite alternate。</p>
                                    </section>
                                </div>
                            </mt-cell>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="tab-container3">
                             <ul class="mui-table-view">
                                <li class="mui-table-view-cell">
                                    <router-link to="/cube" class="mui-navigate-right">
                                        <span>电影立方体</span>
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

