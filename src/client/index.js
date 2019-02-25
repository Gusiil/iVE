import Vue from 'vue'
import './plugins/plugins'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import 'swiper/dist/css/swiper.min.css';
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

let vue = null;

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.bus = new Vue();
Vue.prototype.$axios = axios;

Vue.use(MintUI);


let IMGlot = {
	handleFlush: function(to, from) {
		if(!Vue.FlushSign) {
			// if(to.path == "/") {
			// 	localStorage.setItem("iVE_STORE_", "{}");
			// }
			store.commit("InitFlush", {
				stateLG: JSON.parse(localStorage.getItem("iVE_STORE_")) || {}
			});
			Vue.FlushSign = true;
		} else {
			localStorage.setItem("iVE_STORE_", JSON.stringify(vue.$store.state));
		}
		if(to.name !== 'home') $('#all').hide();
	},
}

router.beforeEach((to, from, next) => {
	//刷新保存store
	IMGlot.handleFlush(to, from);

	next();
})

vue = new Vue({
	el: '#app',
	router,
	store,
	render: function(h) {
		return h(App)
	}
}).$mount('#app')