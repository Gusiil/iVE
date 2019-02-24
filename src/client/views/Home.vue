<template>
	<div class="home">
		<main>
			<!-- 姓名 -->
			<div class="info" v-for="(name, index) in nameWri" :key='index'>
				<input 
					@blur="juWrite(name)" 
					v-model="name.val" required='' type='text'
					:class="name.warn ? 'warn' : ''">
				<label :alt='name.alt' :placeholder='name.place'></label>

				<div class="error-message" v-show='name.warn'>
					<svg class="symbol symbol-delete">
						<svg id="icon-delete" viewBox="0 0 16 16">
							<title>报错图标&amp;关闭图标</title> 
							<path :d='delSvg'></path>
						</svg>
					</svg>
					{{name.errorMsg}}
				</div>
			</div>
		</main>
		<div class="btn">
			<mt-button 
				size="large" 
				type="primary" 
				@click='login'>登录</mt-button>
		</div>
		<div class="fpword">
			<span>Forget Password？</span>
		</div>
		<footer>
			<div>
				© 
				<span style="margin-right:5px;">2019</span>
				<span class="font_o">Gusiil</span>
			</div>
			<div>
				由 iVE 强力驱动 | 主题 — iVE 1.0
			</div>
		</footer>
	</div>
</template>

<script>
import { MessageBox, Button } from 'mint-ui'
import { getData } from '../assets/js/service/getData'
export default {
	name: 'home',
	components: {

	},
	data(){
	let that = this;
		return {
			delSvg: "M7.179 7.988l-2.329-2.329c-0.223-0.223-0.223-0.585 0-0.808s0.585-0.223 0.808 0l2.329 2.329 2.329-2.329c0.223-0.223 0.585-0.223 0.808 0s0.223 0.585 0 0.808l-2.329 2.329 2.329 2.329c0.223 0.223 0.223 0.585 0 0.808s-0.585 0.223-0.808 0l-2.329-2.329-2.329 2.329c-0.223 0.223-0.585 0.223-0.808 0s-0.223-0.585 0-0.808l2.329-2.329zM8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8c-4.418 0-8 3.582-8 8s3.582 8 8 8z",
			nameWri:[{
				place: '账号',
				alt: '测试账号：bingwen',
				val: '',
				warn: false,
			},{
				place: '密码',
				alt: '测试密码：9527',
				val: '',
				warn: false,
			}],
			//填入信息处理类
			Val:{},
		}
	},
	computed:{

	},
	created(){
	},
	mounted(){
		//初始化信息处理
		this.initVal();
		
		//初始化头部
		this.initHeard();
	},
	methods: {
		initHeard(){
     		this.bus.$emit("init-header", {
				 hide: true,
			})
		},
		initVal(){
			this.Val = class {
				constructor (info, type){
					this.info = info;
					this.type = type;
					this.run();
				}
				run(){
					!this.info.val ? this.juEmpty(this.info) : this.juVal(this.info);
				}
				//判断空值
				juEmpty(info){
					info.warn = true;
					info.errorMsg = info.place ? "请输入" + info.place : 
						!info.place ? "请填写证件号码" : "";
				}

				juVal(info){
					info.warn = false;
					let juCard = () => {
						//身份证处理
						let idDeal = () => {
							info.errorMsg = "请填写正确的身份证号码";
							return !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(info.val);
						}
						//身份证判断
						info.warn = R.equals(0, info.cardId) ? 
							idDeal():
							false;
					}
					//证件号码输入判断
					!info.place ? juCard()  : '';
				}
			}
		},
		//信息输入
		juWrite(info, type){
			new this.Val(info, type);
		},

		//登录
		login(){
			let that = this;
			if (!that.nameWri[0].val || !that.nameWri[1].val) {
				MessageBox.alert("请输入账号密码");
				return;
			}
			this.$axios(`123/${that.nameWri[0].val},${that.nameWri[1].val}`)
			.then( (data) => {
				MessageBox.alert(data.data.res);
			});
		}

	}
}
</script>

<style lang="scss" scoped>
	header{
		position: absolute;
		margin: 12rem 5.5%;
		width: 95%;
	}
	main{
		position: relative;
		margin: 0 auto;
		margin-top: 13rem;
		border: 1px solid #cccccc;
		padding: 0 1rem;
		width: 80%;
		border-radius: 5px;
		padding-bottom: 2rem; 
		input{
			border: none;
		}
	}
	footer{
		text-align: center;
		position: fixed;
		width: 100%;
		bottom: 1rem;
		div{
			color: #999;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 14px;
			margin: 20px 0;
			code{
				margin: 0 5px;
			}
			span{
				margin: 0 1px;
			}
			.font_o{
				font-family: fantasy;
			}
		}
	}
	.home{
		.btn{
			padding: 0 1rem;
			margin: 0 auto;
			width: 60%;
			position: relative;
			bottom: 1rem;
			background: white;
		}
		background: url(../assets/img/boy.jpg) no-repeat;
    	background-size: 25rem 12rem;
		width: 100%;
		.warn{
			border-color: red;
		}
		.info{
			margin: 30px 0;
			font-size: 16px;
			.error-message{
				position: relative;
    			padding-top: 15px;
				font-size: 0.6rem;
				color: #E30609;
				.symbol {
					width: 1em;
					height: 1em;
					vertical-align: -.15em;
					fill: currentColor;
					overflow: visible;
				}
			}
		}
		.info:first-child{
			margin-top: 25px;
		}
	}
	.fpword{
		text-align: center;
		margin: 1rem 0;
		font-family: -webkit-pictograph;
		span{
			border-bottom: 1px solid;
		}
	}
  input[type="text"][required] {
	  box-sizing: border-box;
	  width: 100%;
	  height: calc(3em + 2px);
	  margin: 0 0 1em;
	  border-bottom: 1px solid #cccccc;
	  resize: none;
	  outline: none;
	}
	input[type="text"][required]:focus {
	  border-color: #00bafa;
	}
	input[type="text"][required]:focus + label[placeholder]:before {
	  color: #00bafa;
	}
	input[type="text"][required]:focus + label[placeholder]:before,
	input[type="text"][required]:valid + label[placeholder]:before {
		transition-duration: .2s;
    	transform: translate(-0em, -1em) scale(0.9, 0.9);
	}
	input[type="text"][required]:invalid + label[placeholder][alt]:before {
	  content: attr(alt);
	}
	input[type="text"][required] + label[placeholder] {
	  display: block;
	  pointer-events: none;
	  line-height: 2.3em;
	  margin-top: calc(-3em - 10px);
	}
	input[type="text"][required] + label[placeholder]:before {
	  content: attr(placeholder);
	  display: inline-block;
	  color: #898989;
	  white-space: nowrap;
	  transition: 0.3s ease-in-out;
	  background-image: linear-gradient(to bottom, #ffffff, #ffffff);
	  background-size: 100% 5px;
	  background-repeat: no-repeat;
	  background-position: left;
	}
</style>
<style>

</style>