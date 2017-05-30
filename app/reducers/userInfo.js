import * as Types from '../constants/userInfo';
let initState={};
export function userInfo(state=initState,action) {
    switch (action.type){
        case Types.UPDATE_CITE:
            return action.data;
        default:
            return state;
    }
}





