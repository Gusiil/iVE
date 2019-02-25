import {
    ACCOUNT,
    PASSWORD,
} from './mutation-types.js'
export default {
    ["InitFlush"](state, { stateLG }) {
        state = $.extend(true, state, stateLG.me);
    },

    [ACCOUNT](state, account){
        state.account = account;
    },

    [PASSWORD](state, password){
        state.password = password;
    },
}