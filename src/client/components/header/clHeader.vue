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
    <h1 class="mint-header-title" v-html="title" v-show="title" :class="{'left_t':!isShowBack}"></h1>
    <h1 class="mint-header-title" v-show="choseType">
      <label class="title-nav clskin_transpa_headerborder" id="title-nav" v-show="showWay" >
        <span class="coverBox clskin_transpa_headercoverbox"></span>
        <span v-bind:class="{ active: activeType }" class='clskin_transpa_headeractive clskin_transpa_headerspan' v-show="showPub" triptype="0">因公</span>
        <span v-bind:class="{ active: !activeType }" class="clskin_transpa_headerspan" v-show="showPri" triptype="1">因私</span>
      </label>
    </h1>
    <h1 class="mint-header-title" v-show="!title&&!choseType">
      <slot name="center"></slot>
    </h1>
    <div class="mint-header-button is-right" >
        <router-link v-if="rightLink.to" :to="rightLink.to">{{rightLink.title}}</router-link>
        <div v-if="rightFun.fun" @click="rightFun.fun">{{rightFun.title}}</div>
    </div>
  </header>
</template>

<script>
export default {
    name: 'clHeader',
    props: {
        fixed: Boolean,
        title: String,
        choseTrip: Boolean,
        choseType: String,
        isActive: String,
        meBack: Function,
        isGoSearch: Boolean,
        rightLink:Object,
        rightFun:Object,
        isShowBack:Boolean,
        bg_0:Boolean,
    },
    data() {
        return {
            showPub: true,
            showPri: true,
            showWay: true,
            activeType: this.isActive === '1' ? false : true
        }
    },
    methods: {
        back: function() {
            if(this.isGoSearch){
                this.$router.isBack=true;
                this.$router.push({
                    name:'search',
                    query:{
                        tripType:this.choseType
                    }
                })
            }else{
                if (this.meBack) {
                this.meBack()
                } else {
                    $('html').removeClass('fixedScroll')
                   this.$router.go(-1);
                }
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
        if (this.choseType) {
            switch (this.choseType) {
                case '0':
                    this.showPri = false
                    this.showPub = false
                    this.showWay = false
                    break
                case '1':
                    this.showPub = false
                    this.showPri = false
                    this.showWay = false
                    this.isActive = '1'
                    this.activeType = false
                    break
                case '2':
                    this.showPub = true
                    this.showPri = true
                    this.showWay = true
                    break
                default:
                    break
            }
        }
        var _that = this
        $('.title-nav span').click(function() {
            $('.title-nav .active').removeClass('active');
            $(this).addClass('active');
            $('.title-nav .clskin_transpa_headeractive').removeClass('clskin_transpa_headeractive');
            $(this).addClass('clskin_transpa_headeractive');

            var tripType = $(this).attr('tripType')
            _that.$store.commit('ChangeTripType', tripType)
            _that.$parent.$emit('changeHeaderType', tripType)
        })
        this.nfun_Slideicon();

    },
    watch: {
        choseType(val) {
            this.choseType = val
            if (this.choseType) {
                switch (this.choseType) {
                    case '0':
                        this.showPri = false
                        this.showPub = false
                        this.showWay = false
                        break
                    case '1':
                        this.showPub = false
                        this.showPri = false
                        this.showWay = false
                        this.isActive = '1'
                        this.activeType = false
                        break
                    case '2':
                        this.showPub = true
                        this.showPri = true
                        this.showWay = true
                        break
                    default:
                        break
                }
            }
        }
    },
}
</script>
<style>
.mintui-back:before {
    font-size: 22px;
}
</style>

<style scoped>
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
.left_t{
    padding-left:45px;
}
.bg_0{
    color: #ffffff;
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
