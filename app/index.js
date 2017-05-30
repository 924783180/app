import React from 'react';
import {render} from 'react-dom';
import App from './containers';
import {Provider} from 'react-redux'
import {configureStore} from './store';
const store=configureStore({
    //userInfo:{cityName:'北京'}//初始值
});
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));