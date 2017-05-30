//用户信息action.type data
import * as Types from '../constants/userInfo';
export function update(data) {
    return {
        type:Types.UPDATE_CITE,
        data
    }
}