import React,{Component} from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Home from '@/pages/Home/Home.jsx'
import Kind from '@/pages/Kind/Kind.jsx'
import Cart from '@/pages/Cart/Cart.jsx'
import User from '@/pages/User/User.jsx'

class App extends Component {

    render(){
        return (
            <div className="app">
                <header className="header">头部</header>
                <Switch>
                    <Route path="/home" component={ Home } />
                    <Route path="/kind" component={ Kind } />
                    <Route path="/cart" component={ Cart } />
                    <Route path="/user" component={ User } />
                    <Redirect path="/" to="/home" />
                </Switch>
                <footer className="footer">
                    <ul>
                        <NavLink to="/home">首页</NavLink>
                        <NavLink to="/kind">分类</NavLink>
                        <NavLink to="/cart">购物车</NavLink>
                        <NavLink to="/user">我的</NavLink>
                    </ul>
                </footer>
            </div>
        )
    }
}




export default App