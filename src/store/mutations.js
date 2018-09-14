import {
    GET_USERINFO, 
    // GET_USERHEAD_IMG, 
    // IS_ADMIN,
    LOGINED, 
    LOGIN_OUT
} from './mutation-types.js'
// import {setLocalStorageItem, getLocalStorageItem} from '../config/mUtils'
export default {
    [LOGINED](state) {
        state.login = true;
    },
    [GET_USERINFO](state, info) {
        if (state.userInfo && (state.userInfo.username !== info.username)) return;
        if (!state.login) return;
    },

    [LOGIN_OUT](state) {
        state.login = false;
    }

    
}
