import {
    SEARCH_PARAM,
    INTERAIRORDER_BACKSTATE,
    INTERAIR_SELPASLIST,
    INTERAIR_EDITPERSON_SELSTAFF,
    INTERAIR_FLIGHTINFO,
    INTERAIR_CHOOSEDFLIGHTINFO,
} from './mutation-types.js'

import { setStore, getStore } from '../assets/js/utils'
export default {
    ["InitFlush"](state, { stateLG }) {
        state = $.extend(true, state, stateLG.me);
    },
    // 查询页面参数
    [SEARCH_PARAM](state, searchParam) {
        state.search_param = searchParam;
        
        // 处理storage history
        let arr = $.parseJSON(getStore("INTERAIR_SEARCH_searchHistory")) || [];
        if (arr.length >= 3) {
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i];
                if (item.startStation === searchParam.startStation && item.stopStation === searchParam.stopStation) {
                    arr.splice(i, 1);
                    break;
                }
            }

            arr = [{
                startStation: searchParam.startStation,
                startCityCode:searchParam.depCity,
                stopStation: searchParam.stopStation,
                stopCityCode :searchParam.arrCity
            }].concat(arr.slice(0, 2));
        } else if (0 < arr < 3) {

            for (let i = 0; i < arr.length; i++) {
                let item = arr[i];
                if (item.startStation === searchParam.startStation && item.stopStation === searchParam.stopStation) {
                    arr.splice(i, 1);
                    break;
                }
            }

            arr = [{
                startStation: searchParam.startStation,
                startCityCode:searchParam.depCity,
                stopStation: searchParam.stopStation,
                stopCityCode :searchParam.arrCity
            }].concat(arr);
        }
        let searchHistory={};
        searchHistory.searchParam=searchParam;
        searchHistory.historyCity=arr;
        setStore("INTERAIR_SEARCH_searchHistory", JSON.stringify(searchHistory));
    },

    [INTERAIRORDER_BACKSTATE](state, backState) {
        state.backState = backState;
    },

    [INTERAIR_SELPASLIST](state, interAir_selPasList) {
        state.interAir_selPasList = interAir_selPasList;
    },
    [INTERAIR_EDITPERSON_SELSTAFF](state, editParam) {
        state.interAir_editPerson_selStaff = editParam;
    },
    [INTERAIR_FLIGHTINFO](state,flightInfo){
    	state.flightInfo = flightInfo;
    },
    [INTERAIR_CHOOSEDFLIGHTINFO](state,choosedFlightInfo){
    	state.choosedFlightInfo = choosedFlightInfo;
    }
}