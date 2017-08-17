    <template>
        <div class="temp">
            <div id="box">
                <div id="left">
                    <a href="">Javascript</a>
                </div>
                <div id="right">
                <a href="">Canvas</a>
                </div>
                <div id="top">
                    <a href="">jQuery</a>
                </div>
                <div id="bottom">
                    <a href="">Object</a>
                </div>
                <div id="before">
                    <a href="">Array</a>
                </div>
                <div id="back">
                    <a href="">Function</a>
                </div>
            </div>
        </div>
    </template>

    <style scoped>
         html {
            width: 100%;
            height: 100%;
        }
        .temp{
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
        }
        a {
        text-decoration: none;
        color: aliceblue;
        }
        body {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #000;
        overflow: hidden;
        }
        #box {
        width: 100px;
        height: 100px;
        margin: 200px auto;
        margin-bottom: 0px;
        position: relative;
        /*perspective:1000px;*/
        transform-style: preserve-3d;
        transform: rotateZ(30deg) rotateX(30deg);
        animation: rotate  10s linear infinite alternate;
        }
        #box > div {
        position: absolute;
        width: 100%;
        height: 100%;
        font-size: 20px;
        text-align: center;
        line-height: 100px;
        }
        #box > div a {
        display: inline-block;
        width: 100%;
        height: 100%;
        }
        #left {
        transform: rotateY(-90deg) translateZ(50px);
        background-color: orangered;
        }
        #right {
        transform: rotateY(90deg) translateZ(50px);
        background-color:  blue;
        }
        #top {
        transform: rotateX(90deg) translateZ(50px);
        background-color: green;
        }
        #bottom {
        transform: rotateX(-90deg) translateZ(50px);
        background-color: red;
        }
        #before {
        transform: translateZ(50px);
        background-color:cornflowerblue;
        }
        #back {
        transform: rotateY(180deg) translateZ(50px);
        background-color: chocolate;
        }
        @keyframes rotate {
        from {
            transform: rotateY(0deg) rotateZ(45deg) rotateX(45deg);
            transform-origin: right ;
        }
        to {
            transform: rotateY(360deg) rotateZ(45deg) rotateX(45deg);
            transform-origin: left;
        }
        }

    </style>

    <script type=text/ecmascript-6>

    </script>

