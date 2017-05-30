import reducers from '../reducers';
import {createStore} from 'redux';
export function configureStore(initState) {
    return createStore(reducers,initState)
}
