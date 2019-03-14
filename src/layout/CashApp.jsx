import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import Cash from '@/pages/Cash/Cash.jsx';
import { NavBar, Icon } from 'antd-mobile';

class App extends Component {
    goBack(){
        this.props.history.go(-1)
      }
    render(){
        return (
            <div className="app">
                <div className="contentBox">
                    <header className="cashHeader">
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" size="lg" color="#999" />}
                            style={{ backgroundColor: '#F2F2F2' }}
                            onLeftClick={this.goBack.bind(this)}
                            rightContent={[
                            ]}
                        >用户结算</NavBar>
                    </header>
                    <Route path='/cashapp/cash' component={ Cash } />
                </div>
            </div>
        )
    }
}


export default  App