import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import ShowList from '@/components/home/ShowList.js'
import { Toast } from 'antd-mobile';
// import { WingBlank, InputItem, Toast, Button } from 'antd-mobile';
import store from '@/store'
import './Search'
class Com extends Component {
  constructor(props){
    super(props)
    this.state = {
      listData:[]
    }
  }

  goBack () {
    this.props.history.go(-1)
  }
  componentDidMount () {
    // store.dispatch(action.loginCheck(this.state.phone, this.state.password))
    // console.log(store.getState().homeStore.searchList)
    if(store.getState().homeStore.searchList.length===0){
      Toast.fail('没有找到相关产品！', 1)
       
    }else{
      this.setState({
        listData:store.getState().homeStore.searchList
      })
    }
    // console.log(store.getState().homeStore.searchList)

  }
  render () {
    let searchHtml=[]
    if(this.state.listData.length===0){
      searchHtml=<div className="noResolve"><img src="https://m.mi.com/static/img/icon-search-empty.3d766c8b3f.png" alt=""/><p>没有找到商品，换个词试试吧</p></div>
    }else{
      searchHtml=<ShowList list={this.state.listData} />
    }
    return (
      <div className="searchBox">
        <header className="searchHeader">
          <NavBar
              mode="light"
              icon={<Icon type="left" size="lg" color="#999" />}
              style={{ backgroundColor: '#F2F2F2' }}
              onLeftClick={this.goBack.bind(this)}
              rightContent={[
              ]}
          >搜索结果</NavBar>
        </header>
        <div className="searchContent">
          {/* <ShowList list={this.state.listData} /> */}
          { searchHtml }
        </div>
      </div>
    )
  }

}

export default Com
