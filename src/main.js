		import Vue from 'vue' //导入vue
		import App from './app.vue'  //导入项目接口app.vue

		import MintUI from 'mint-ui' //导入mint-ui框架
		import 'mint-ui/lib/style.css' //引入样式
		Vue.use(MintUI)

		//引入mui框架的样式
		import './statics/css/mui.min.css'
		//添加vue-router 
		import VueRouter from 'vue-router'
		Vue.use(VueRouter)

		//引入全局样式
		import './styles/root.css'
		//引入图标
		import './components/Home/font/iconfont.css'
		// import './components/Tools/link.json'

		//引入vue-resource，进行请求
		import VueResource from 'vue-resource'
		Vue.use(VueResource)

		//引入自定义的组件
		import Home from './components/Home.vue'
		import Member from './components/Member.vue'
		import Studying from './components/Studying.vue'
		import Commot from './components/commont/Commot.vue'
		//home组件
		import Vuee from './components/Home/Vuee.vue'
		import Angular from './components/Home/Angular.vue'
		import Nodee from './components/Home/Nodee.vue'
		import H5 from './components/Home/H5.vue'
		import Css3 from './components/Home/Css3.vue'
		import Canvas from './components/Home/Canvas.vue'
		import Cube from './components/Home/c3/Cube.vue'
		import Search from './components/Home/Search.vue'
		//canvas
		import Drawcookies from './components/Home/canvas/Drawcookies.vue'
		//angualr
		import AngularLink from './components/commont/AngularLink.vue'
		//vue
		import VueLink from './components/commont/VueLink.vue'
		//node
		import NodeLink from './components/commont/NodeLink.vue'
		//h5
		import H5Link from './components/commont/H5Link.vue'
		//abput
		import About from './components/Home/About.vue'

		

		

		


		var router = new VueRouter({
			linkActiveClass:'mui-active',
			routes:[
				{name:'root',path:'/',redirect:'/home'},
				{name:'home',path:'/home',component:Home},
				{name:'member',path:'/member',component:Member},
				{name:'studying',path:'/studying',component:Studying},
				{name:'search',path:'/search',component:Search},
				{name:'commot',path:'/commot/:id',component:Commot},
				{name:'vuee',path:'/vuee',component:Vuee},
				{name:'angular',path:'/angular',component:Angular},
				{name:'nodee',path:'/nodee',component:Nodee},
				{name:'h5',path:'/h5',component:H5},
				{name:'css3',path:'/css3',component:Css3},
				{name:'canvas',path:'/canvas',component:Canvas},
				{name:'cube',path:'/cube',component:Cube},
				{name:'drawcookies',path:'/drawcookies',component:Drawcookies},
				{name:'angularlink',path:'/angularlink/:id',component:AngularLink},
				{name:'vuelink',path:'/vuelink/:id',component:VueLink},
				{name:'nodelink',path:'/nodelink/:id',component:NodeLink},
				{name:'h5link',path:'/h5link/:id',component:H5Link},
				{name:'about',path:'/about',component:About},
			]
		})
		new Vue({
			el:'#app',	
			router,
			//render 渲染语法，
			render:create=>create(App)		
		})
