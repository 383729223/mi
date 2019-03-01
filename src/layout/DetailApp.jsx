import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import Detail from '@/pages/Detail/Detail.jsx';

class App extends Component {

    render(){
        return (
            <div className="app">
                <header className="header">
                头部
                </header>
                <Route path='/detailapp/detail/:id' component={ Detail } />
            </div>
        )
    }
}


export default  App