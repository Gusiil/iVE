<template>

  <div id="app">
  
    <cl-header v-show='!hide' fixed v-bind:meBack="goBack" v-bind:choseType="choseType"  v-bind:title="title" v-bind:isChildView="isChildView" v-bind:rightLink="rightLink" v-bind:rightFun="rightFun"  v-bind:choseType.sync="tripType" v-bind:isActive="tripType" v-if="isShowHead" :isShowBack="isShowBack" :isGoSearch="isGoSearch" :bg_0='bg_0'>
    </cl-header> 

    <transition :name="transitionName">  
      <keep-alive>
          <router-view class="slider-container" v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>
    <transition :name="transitionName">
        <router-view v-if="!$route.meta.keepAlive" class="slider-container"></router-view>
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
          tripType:"",
          title:"",
          rightLink:{},
          rightFun :{},
          meBack:null,
          choseType:"2",
          isShowHead:true,
          isChildView:false,
          isShowBack:true,
          isGoSearch:false,
          bg_0:"",
          hide:false,
      }
  },
  components: {
      clHeader
  },
  created(){
    let that = this;
     this.bus.$on("init-header",function(item){
        that.hide = item.hide || false,
        that.isChildView = item.isChildView||false;
        that.title = item.title||"";
        that.tripType = item.tripType||"";
        that.rightLink = item.rightLink||{};
        that.rightFun = item.rightFun||{};
        that.meBack = item.meBack||null;
        that.bg_0 = item.bg_0||false;
        if(item.isShowBack!==undefined){
          that.isShowBack = item.isShowBack;
        };
        if(item.isGoSearch!==undefined){
          that.isGoSearch=item.isGoSearch;
        } else {
          that.isGoSearch=false;
        }
    })
  },
  methods:{
   goBack(){
          if(this.meBack){
            this.$router.isBack = true;
            this.meBack();
          }else{
            this.$router.goBack();
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
    }
}
</script>

<style>
#app {
  position: absolute; 
  top: 0;
  bottom: 0;
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
  height:100%;
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
</style>
