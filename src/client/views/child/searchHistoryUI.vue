<template>
  <div
    class="contain recent"
    :class="{'h20':!hisData.length}"
  >
    <span
      v-for="(cityHis,index) in hisData"
      :key="index"
      @click="callBack(cityHis)"
      class="stations"
    >
      <span>{{cityHis.startStation}}-{{cityHis.stopStation}}</span>
    </span>
    <span v-if="hisData.length" @click="efun_clearCityHistory">全部清除</span>
  </div>
</template>

<script>
export default {
  name: "searchHistoryUI",
  props: {
    limit: Number,
    callBack: Function
  },
  data() {
    return {
      hisData: []
    };
  },
  mounted() {
    // 获取hisData
    this.hisData =
      $.parseJSON(this.$utils.getStore("INTERAIR_SEARCH_searchHistory")) || [];
      this.hisData = R.filter( R.prop('startStation') )(this.hisData);
  },
  methods: {
    efun_clearCityHistory() {
      this.$utils.removeStore("INTERAIR_SEARCH_searchHistory");
      this.hisData = [];
    }
  }
};
</script>
    <!-- Add "scoped" attribute to limit CSS to this component only -->
	<style scoped>
.recent {
    height: 40px;
    overflow-x: scroll;
    white-space: nowrap;
}
.recent::-webkit-scrollbar{
    display: none
}
.recent span {
  font-size: 12px;
  padding: 0 20px;
  /* cursor: pointer; */
  color: #999;
}
.recent span:hover {
  color: gray;
}
.stations {
  display: inline-block;
  border-radius: 11px;
  background-color: #f2f2f2;
  margin-right: 10px;
  line-height: 25px;
  height: 23px;
}

@media screen and (max-width: 320px) {
  .stations {
    height: 23px;
  }
}
div.h20{
    height: 27px;
}
</style>

