import React from　'react'; // 16.8.3
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from '@/layout/App';
import RegisterApp from '@/layout/RegisterApp';
import DetailApp from '@/layout/DetailApp';
import CartApp from '@/layout/CartApp';
import CashApp from '@/layout/CashApp';
import './main.scss'
import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.css'; 
import store from './store';
import { Provider } from 'react-redux';

function renderFn(){

    ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <Switch>
                <Route path='/cartapp' component={ CartApp } />
                <Route path='/cashapp' component={ CashApp } />
                <Route path='/detailapp' component={ DetailApp } />
                <Route path='/registerapp' component={ RegisterApp } />
                <Route path='/' component={ App } />
            </Switch>
        </Router>
    </Provider>,// 组件调用
    document.getElementById('root')
    );
    
}

renderFn();

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(renderFn);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
