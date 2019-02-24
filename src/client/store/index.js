import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import commonState from './modules/common/dataStore';
import commonMutations from './modules/common/mutations';

Vue.use(Vuex)

const state = {
    city:123,
}

let modules = {
    common: {
        state: commonState,
        mutations: commonMutations
    },
    me: {
        state,
        getters,
        actions,
        mutations
    },
};

export default new Vuex.Store({
    modules: modules,
})