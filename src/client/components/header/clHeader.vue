<template>
  <header class="mint-header clskin_transpa_header" :class="{ 'fixed-block': fixed, 'bg_0':bg_0}">
    <div class="mint-header-button is-left" v-if="isShowBack">
      <slot name="left">
        <a href="javascript:void(0)" slot="left">
          <mt-button icon="back" @click="back">
          </mt-button>
        </a>
      </slot>
    </div>
    <div class="mint-header-title" 
        v-html="title" 
        v-show="title" 
        :class="{'left_t':!isShowBack}"
        @click='back'>
    </div>

  </header>
</template>

<script>
export default {
    name: 'clHeader',
    props: {
        fixed: Boolean,
        title: String,
        meBack: Function,
        bg_0:Boolean,
        isShowBack: Boolean,
    },
    data() {
        return {

        }
    },
    methods: {
        back: function() {
            if (this.meBack) {
                this.meBack()
            } else {
                $('html').removeClass('fixedScroll')
                this.$router.go(-1);
            }
        },
        nfun_Slideicon(){
            var Slideicon = function (element,options) {
                this.element = element;
                this.options = {
                    cover:options.cover,
                    index:options.index
                };
                this.init();
            };
            Slideicon.prototype.init = function () {
                var _this = this;
                this.element.on('click','span',function(){
                    var left = ($(this).index()-1)*76;
                    _this.options.cover.attr("style","left:"+left+"px");
                });
            };
            new Slideicon($("#title-nav"),{
                index:0,
                cover:$(".coverBox"),
            });
        }

    },
    mounted() {


    },

}
</script>
<style lang="scss">
.mintui-back:before {
    font-size: 22px;
}
.left_t{
    section{
        //color: rgb(255, 255, 255);
        font-weight: 700;
        font-size: 1rem;
        text-align: left;
        div{
            height: 3rem;
            vertical-align: middle;
            display: flex;
            align-items: center;
        }
        span{
            color: rgb(255, 255, 255);
            font-size: 1rem;
            background-color: rgb(0, 0, 0);
            padding: 0.2rem 0.5rem;
            border-radius: 0.5rem;
        }
    }
}
</style>

<style lang="scss" scoped>
.mint-header {
    height: 50px;
    z-index: 80;
    max-width: 768px;
}

header .title-nav span {
    width: 75px;
    display: inline-block;
    height: 30px;
    line-height: 30px;
}
header .title-nav {
    position: relative;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    height: 32px;
    line-height: 30px;
    display: inline-block;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: middle;
    font-size: 16px;
    margin-top: 3px;
}

header .title-nav .coverBox{
    border-radius: 14px;
    z-index: -1;
    left:0px;
    transition: left .4s;
    -webkit-transition: left .4s;
    -moz-transition: left .4s;
    position: absolute;
}

.mint-header-title {
    font-size: 16px;
}
.mint-header-button {
    min-width: 50px;
    -webkit-box-flex: none;
    -ms-flex: none;
    flex: none;
}

.bg_0{
    color: #2c3e50 !important;
    background-color:rgba(0,0,0,0); 
}
.col_0{
    color: black;
}
/*#app .mint-header{
	background-color: rgba(0,0,0,0);
}*/
#title-nav .active{
	 color: black;
	 background-color: rgba(0,0,0,0);
}

</style>
