const store = {
    state: {
        isShowTitle: 1,
        perTotalMoney: 0,
        totalMoney: 0, ////总金额
        currentIndex: 0, ////（当前成本中心分组的）索引
        allCostCenters: [], ////所有的成本中心
        commonCostCenterList: [], ////常用成本中心
        relaApplyInfos: [],
        staffList: [], ////[staffNo/staffName]
        groupList: [{
            index: 0,
            costCenterID: "",
            costCenterType: "",
            costCenterNo: "",
            costCenterName: "",
            staffList: [],
            subjectCode: "",
            subjectName: "",
            costPercent: null,
            costMoney: null
        }], ////成本中心分组（默认1组）
        searchData: [],
        personUsed: {},
        dataFormat: "base",
        title: "",
        bussinessLine: "",
        costCenterFieldSetting: {},
        subjectSettingInfo: {}
    },
    mutations: {
        initState: function(state, newState) {
            state = $.extend(state, newState);
            if (state.totalMoney && state.staffList && state.staffList.length) {
                state.perTotalMoney = +(state.totalMoney / state.staffList.length).toFixed(2);
            }
        },
        changeTotalMoney: function(state, newVal) {
            state.totalMoney = newVal;
        },
        changeCurrentIndex: function(state, newVal) {
            state.currentIndex = newVal;
        },
        changeAllCostCenters: function(state, newVal) {
            state.allCostCenters = newVal;
        },
        changeCommonCostCenterList: function(state, newVal) {
            state.commonCostCenterList = newVal;
        },
        changeRelaApplyInfos: function(state, newVal) {
            state.relaApplyInfos = newVal;
        },
        changeStaffList: function(state, newVal) {
            state.staffList = newVal;
            state.perTotalMoney = +(state.totalMoney / state.staffList.length).toFixed(2);
        },
        changeGroupList: function(state, newVal) {
            state.groupList = newVal;
        },
        changeSearchData: function(state, newVal) {
            state.searchData = newVal;
        },
        changePersonUsed: function(state, newVal) {
            state.personUsed = newVal;
        }
    }
};
export default store;