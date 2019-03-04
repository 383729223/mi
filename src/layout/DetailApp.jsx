import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import Detail from '@/pages/Detail/Detail.jsx';
import creatHistory from 'history/createHashHistory' 

class App extends Component {
    goBack(){
        creatHistory().go(-1)
    }
    render(){
        return (
            <div className="app">
                <header className="detailHeader">
                    <i className="iconfont icon-fanhui" onClick={this.goBack}></i>
                    <i className="iconfont icon-lianjie"></i>
                </header>
                <Route path='/detailapp/detail/:id' component={ Detail } />
            </div>
        )
    }
}


export default  App