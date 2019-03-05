import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import creatHistory from 'history/createHashHistory' 
import './Cart.scss'

class Com extends Component {
  goBack(){
      creatHistory().go(-1)
  }
  render () {
    return (
      <div className = "container">
        <header className="header cartHeader">
          <NavBar
            mode="light"
            icon={<Icon type="left" size="lg" color="#999" />}
            style={{ backgroundColor: '#F2F2F2' }}
            onLeftClick={this.goBack}
            rightContent={[
              <Icon key="0" type="search" color="#999" size="md" style={{ marginRight: '16px' }} />
            ]}
          >购物车</NavBar>
        </header>
        <div className="content cartContent"></div>
      </div>
    )
  }

}

export default Com
