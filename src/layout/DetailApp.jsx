import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import Detail from '@/pages/Detail/Detail.jsx';

class App extends Component {
    goBack(){
        this.props.history.go(-1)
    }
    render(){
        return (
            <div className="app">
                <header className="detailHeader">
                    <i className="iconfont icon-fanhui" onClick={this.goBack.bind(this)}></i>
                    <i className="iconfont icon-lianjie"></i>
                </header>
                <Route path='/detailapp/detail/:id' component={ Detail } />
            </div>
        )
    }
}


export default  App