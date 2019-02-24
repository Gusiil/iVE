/**
 * Created by wansan on 2017/10/10.
 */
export default {
    //store扩展,主要用户控件存在多个，比如城市，选人，及业务需要动态加入属性
    ChangeUpdateProp(state, obj) {
        state = $.extend(true, state, obj);
    },
    //网站配置文件
    ChangeI18n(state, i18n) {
        state.i18n = i18n;
    },
    //因公因私
    ChangeTripType(state, tripType) {
        state.tripType = tripType;
    },
    //出发日期
    ChangeFromDay(state, fromDay) {
        state.fromDay = fromDay;
    },
    ChangeEntDiyConfigTrip(state, entDiyConfigTrip) {
        state.entDiyConfigTrip = entDiyConfigTrip;
    },
    ChangeEntDiyConfigCode(state, entDiyConfigCode) {
        state.entDiyConfigCode = entDiyConfigCode;
    },
    ChangeChoseDisAdd(state, choseDisAdd) {
        state.choseDisAdd = choseDisAdd;
    },
    ChangeNeedDisAdd(state, needDisAdd) {
        state.needDisAdd = needDisAdd;
    },
    ChangeOrderDisAdd(state, orderDisAdd) {
        state.orderDisAdd = orderDisAdd;
    },
    ChangeTicketCostWorkEnt(state, ticketCostWorkEnt) {
        state.ticketCostWorkEnt = ticketCostWorkEnt;
    },
    ChangeChoseDisAddList(state, choseDisAddList) {
        state.choseDisAddList = choseDisAddList;
    },
    ChangeChoseDistrbutionList(state, choseDistrbutionList) {
        state.choseDistrbutionList = choseDistrbutionList;
    },

    ChangeEditDisAddItem(state, editDisAddItem) {
        state.editDisAddItem = editDisAddItem;
    },
    ChangeOrderCost(state, orderCost) {
        state.orderCost = orderCost;
    },
    ChangeHistoryRecords(state, historyRecords) {
        state.historyRecords = historyRecords;
    },
    ChangeLoginUserInfo(state, loginUserInfo) {
        state.loginUserInfo = loginUserInfo;
    },

    ChangeOverDetailList(state, overDetailList) {
        state.overDetailList = overDetailList;
    },

    //城市
    ChangeCity(state, city) {
        state.city = $.extend(true, state.city, city);
    },
    ChangeSystemParam(state, systemParam) {
        state.systemParam = systemParam;
    },
    ChangeSystemParamObj(state, systemParamObj) {
        state.systemParamObj = systemParamObj;
    },
    ChangeIsSortDept(state, isSortDept) {
        state.isSortDept = isSortDept;
    },
    //Tmc信息
    ChangeTmcFooter(state, tmcFooter) {
        state.tmcFooter = tmcFooter;
    },
    ChangeThirdApplys(state, thirdApplys) {
        state.thirdApplys = thirdApplys;
    },
    ChangeThirdApplysInfo(state, thirdApplysInfo) {
        state.thirdApplysInfo = thirdApplysInfo;
    },
    ChangeFlightParam(state, flightParam) {
        state.flightParam = flightParam;
    },
    ChangeSelFlightInfo(state, selFlightInfo) {
        state.selFlightInfo = selFlightInfo;
    },
    ChangeFlightList(state, flightList) {
        state.flightList = flightList;
    },
    ChangeCabinList(state, cabinList) {
        state.cabinList = cabinList;
    },
    ChangeCabinListCreateTime(state, cabinListCreateTime) {
        state.cabinListCreateTime = cabinListCreateTime;
    },
    ChangeFlightListCreateTime(state, flightListCreateTime) {
        state.flightListCreateTime = flightListCreateTime;
    },
    ChangeFlightHistoryLength(state, flightHistoryLength) {
        state.flightHistoryLength = flightHistoryLength;
    },
    ChangeSearchHistoryLength(state, searchHistoryLength) {
        state.searchHistoryLength = searchHistoryLength;
    },
    ChangeOrderListHistoryLength(state, orderListHistoryLength) {
        state.orderListHistoryLength = orderListHistoryLength;
    },
    ChangeSelCabin(state, selCabin) {
        state.selCabin = selCabin;
    },
    ChangeStanderParam(state, standerParam) {
        state.standerParam = standerParam;
    },
    ChangeCreateOrderRes(state, createOrderRes) {
        state.createOrderRes = createOrderRes;
    },
    ChangePasList(state, pasList) {
        state.pasList = pasList;
    },
    ChangeOrderPasList(state, orderPasList) {
        state.orderPasList = orderPasList;
    },
    ChangeLinkList(state, linkList) {
        state.linkList = linkList;
    },
    ChangeStaffApplys(state, staffApplys) {
        state.staffApplys = staffApplys;
    },
    ChangeSelPass(state, selPass) {
        state.selPass = selPass;
    },
    ChangeSelInsurance(state, selInsurance) {
        state.selInsurance = selInsurance;
    },
    ChangeStandOverDetail(state, standOverDetail) {
        state.standOverDetail = standOverDetail;
    },
    ChangeOrderHistory(state, orderHistory) {
        state.orderHistory = orderHistory;
    },
    ChangePnrInfo(state, pnrInfo) {
        state.pnrInfo = pnrInfo;
    },
    ChangePnrInfoCreateTime(state, pnrInfoCreateTime) {
        state.pnrInfoCreateTime = pnrInfoCreateTime;
    },
    ChangeHasApply(state, hasApply) {
        state.hasApply = hasApply;
    },
    ChangeMyHistory(state, myHistory) {
        state.myHistory = $.extend({}, state.myHistory, myHistory);
    },
    ChangeIsForward(state, isForward) {
        state.isForward = isForward;
    },
    ChangeOrgConfig(state, orgConfig) {
        state.orgConfig = orgConfig;
    },
    ChangeNeedIndexHead(state, needIndexHead) {
        state.needIndexHead = needIndexHead;
    },
    ChangeServiceCenterUrl(state, serviceCenterUrl) {
        state.serviceCenterUrl = serviceCenterUrl;
    },
    //已创单的订单信息
    ChangeOldOrderInfo(state, oldOrderInfo) {
        state.oldOrderInfo = oldOrderInfo;
    },
    ChangeChangeReasonInfo(state, changeReasonInfo) {
        state.changeReasonInfo = changeReasonInfo;
    },
    ChangeRefundReasonInfo(state, refundReasonInfo) {
        state.refundReasonInfo = refundReasonInfo;
    },
    ChangeRefundApplyInfo(state, refundApplyInfo) {
        state.refundApplyInfo = refundApplyInfo;
    },
    ChangeChangeApplyInfo(state, changeApplyInfo) {
        state.changeApplyInfo = changeApplyInfo;
    },
    ChangeChangeFlightParam(state, changeFlightParam) {
        state.changeFlightParam = changeFlightParam;
    },
    ChangeChangeVoyageInfo(state, voyageInfo) {
        state.changeApplyInfo.voyageInfo = voyageInfo;
    },
    ChangeChangeFlightCreateTime(state, changeFlightCreateTime) {
        state.changeFlightCreateTime = changeFlightCreateTime;
    },
    ChangeChangeFlightList(state, changeFlightList) {
        state.changeFlightList = changeFlightList;
    },
    ChangeChangeSelFlightInfo(state, changeSelFlightInfo) {
        state.changeSelFlightInfo.flightInfo = changeSelFlightInfo.flightInfo;
        state.changeSelFlightInfo.canbinInfo = changeSelFlightInfo.cabinInfo;
    },
    ChangeOrderFilterType(state, orderFilterType) {
        state.orderFilterType = orderFilterType;
    },
    ChangeShowToApply(state, showToApply) {
        state.showToApply = showToApply;
    },
    ChangeApprovalConfig(state, approvalConfig) {
        state.approvalConfig = approvalConfig;
    },
    ["InitFlush"](state, lg) {
        if (lg.stateLG.common) {
            state.loginUserInfo = lg.stateLG.common.loginUserInfo;
            state.tripType = lg.stateLG.common.tripType;
        }
    },
    ChangeRef(state, ref) {
        state.ref = ref;
    },
    ChangeIsJumpThirdOrderList(state, isJumpThirdOrderList) {
        state.isJumpThirdOrderList = isJumpThirdOrderList;
    },
    ChangeTravelScene(state, travelScene) {
        state.travelScene = travelScene;
    },
    ChangeShowServiceFee(state, showServiceFee) {
        state.showServiceFee = showServiceFee;
    },
}