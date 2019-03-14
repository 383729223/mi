import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import Order from '@/pages/Order/Order.jsx';
import { NavBar, Icon } from 'antd-mobile';

class App extends Component {
    goBack(){
        this.props.history.go(-1)
      }
    render(){
        return (
            <div className="app">
                <div className="contentBox">
                    <header className="orderHeader">
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" size="lg" color="#999" />}
                            style={{ backgroundColor: '#F2F2F2' }}
                            onLeftClick={this.goBack.bind(this)}
                            rightContent={[
                            ]}
                        >订单</NavBar>
                    </header>
                    <Route path='/orderapp/order' component={ Order } />
                </div>
            </div>
        )
    }
}


export default  App