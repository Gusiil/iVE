<template>

  <div id="app">
  
    <cl-header 
       v-bind:meBack="goBack" 
      v-bind:title="title" 
      v-bind:isChildView="isChildView" 
      v-if="!isHide" 
      :bg_0='bg_0'>
    </cl-header> 

    <transition :name="transitionName">  
      <keep-alive>
          <router-view class="slider-container" :class="isHide ? 'h100' : ''" v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>
    <transition :name="transitionName">
        <router-view v-if="!$route.meta.keepAlive" :class="isHide ? 'h100' : ''" class="slider-container"></router-view>
    </transition>
  </div>
</template>

<script>

  import clHeader from './components/header/clHeader.vue'
  export default {
  name: 'App',
  data(){
      return {
          transitionName:'',
          title:"",
          meBack:null,
          isShowHead:true,
          isChildView:false,
          isShowBack:true,
          bg_0:"",
          isHide: false,
      }
  },
  components: {
      clHeader
  },
  created(){
    let that = this;
     this.bus.$on("init-header",function(item){
        that.isChildView = item.isChildView||false;
        that.title = item.title||"";
        that.meBack = item.meBack||null;
        that.bg_0 = item.bg_0||false;
        that.isHide = item.isHide || false;
        if(item.isShowBack!==undefined){
          that.isShowBack = item.isShowBack;
        };
    })
  },
  methods:{
   goBack(){
          if(this.meBack){
            this.$router.isBack = true;
            this.meBack();
          }else{
            this.$router.go(-1);
          }
      }
  },
  watch: {//使用watch 监听$router的变化
      $route(to, from) {
        let isBack = this.$router.isBack;
        if(isBack){
          //设置动画名称
          this.transitionName = 'slide-right';
        }else{
          this.transitionName = 'slide-left';
        }
          this.$router.isBack = false
      }
    },
}
</script>

<style>
#app {
  overflow-x: hidden;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 0;
}

body{
  overflow-x: hidden;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-font-smoothing: antialiased;
  -moz-user-select: none;
  color: #000;
  margin: 0;
}


.slider-container {
  height: auto;
  position: absolute;
  -webkit-transition-property: opacity,-webkit-transform;
  transition-property: opacity,-webkit-transform;
  transition-property: transform,opacity;
  transition-property: transform,opacity,-webkit-transform;
  -webkit-transition-duration: 0.5s;
          transition-duration: 0.5s;
  -webkit-transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
          transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  width: 100%;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
          transform: translate(50px, 0);
  pointer-events: none;
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
          transform: translate(-50px, 0);
  pointer-events: none;
}

.mint-indicator-wrapper{
  z-index: 800;
}
.mint-indicator-mask{
  opacity:0.1;
  background:#000;
}

body .mint-indicator-text{
  font-size: 12px;
}
.flex{
  display: flex;
}
.marb_10{
  margin-bottom: 10px;
}
.h100{
  height: 100%;
}
</style>
