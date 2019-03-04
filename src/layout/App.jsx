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
                <Switch>
                    <Route path="/home" component={ Home } />
                    <Route path="/kind" component={ Kind } />
                    <Route path="/cart" component={ Cart } />
                    <Route path="/user" component={ User } />
                    <Redirect path="/" to="/home" />
                </Switch>
                <footer className="footer">
                    <ul>
                        <NavLink to="/home">
                            <span className="iconfont icon-shouye"></span>
                            <span>首页</span>
                        </NavLink>
                        <NavLink to="/kind">
                            <span className="iconfont icon-sousuofenlei"></span>
                            <span>分类</span>
                        </NavLink>
                        <NavLink to="/cart">
                            <span className="iconfont icon-gouwuche2"></span>
                            <span>购物车</span>
                        </NavLink>
                        <NavLink to="/user">
                            <span className="iconfont icon-wode"></span>
                            <span>我的</span>
                        </NavLink>
                    </ul>
                </footer>
            </div>
        )
    }
}




export default App