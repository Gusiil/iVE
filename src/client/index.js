import Vue from 'vue'
import './plugins/plugins'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import 'swiper/dist/css/swiper.min.css';
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.bus = new Vue();
Vue.prototype.$axios = axios;

Vue.use(MintUI);

new Vue({
	el: '#app',
	router,
	store,
	render: function(h) {
		return h(App)
	}
}).$mount('#app')