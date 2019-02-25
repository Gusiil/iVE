<template>
	<div class="home">
        <header>
            <img class="image1" src="../../assets/img/th.jpg"/>
            <div>毛宇 24岁 前端工程师</div>
        </header>
        <div class="span">
			<div class="location_indicator goR"></div>
            <span>成都市金牛区金鱼街3号</span>
		</div>
        <div class="span">
			<div class="circle"></div>
            <span>离职 - 积极求职中</span>
		</div>
        <div class="span">
			<div class="battery"></div>
            <span>成都理工大学 - 本科</span>
		</div>
	</div>
</template>

<script>
    import { MessageBox, Button, Toast } from 'mint-ui'
    export default {
        name: 'home',
        components: {

        },

        data(){
            let that = this;
            return {

            }
        },

        computed:{

        },

        created(){
            
        },

        mounted(){
            //初始化header
            this.initHeader();
        },

        methods: {
            initHeader(){
                let html = '<section class="info"><div><code> < <code><span>Gusiil</span> <i>\'s resume</i> </div></section>';
                this.bus.$emit("init-header", {
                    title: html,
                    bg_0: true,
                    isShowBack:false,
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
section{
    //color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 1rem;
    span{
        color: rgb(255, 255, 255);
        font-size: 1rem;
        background-color: rgb(0, 0, 0);
        padding: 0.2rem 0.5rem;
        border-radius: 0.5rem;
    }
}
.home{
    @import url(../../assets/css/zzsc.css);
    header{
        margin: 2rem auto;
        text-align: center;
        div{
            margin: 1rem 0;
        }
    }

    .span{
        width: 15rem;
        height: 1rem;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 2.5rem 4rem; 
        position: relative; 
        span{
            position: absolute;
            left: 2rem;
        }   
    }
    .image1{
        width:80px; 
        height:80px; 
        border-radius:100px; 
    }
}

</style>
