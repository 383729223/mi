import React,{Component} from 'react';
import { Switch, Route} from 'react-router-dom';
import Register from '@/pages/Register/Register.jsx';
import Login from '@/pages/Login/Login.jsx';

class App extends Component {

    render(){
        return (
            <div className="app">
                <header className="header">注册登录结构头部</header>
                <Switch>
                    <Route path='/registerapp/register' component={ Register } />
                    <Route path='/registerapp/login' component={ Login } />
                </Switch>
            </div>
        )
    }
}


export default  App