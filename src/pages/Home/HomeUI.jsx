import React, { Component } from 'react';
import ShowList from '@/components/home/ShowList.js'
import Lists from '@/components/home/Lists.js'
import Banner from '@/components/home/Banner.js'
import { Tabs } from 'antd-mobile';
// import store from '@/store'
// import action from '@/store/home/action'

class Com extends Component {
  
  componentDidMount(){
    // console.log(this.props)
    this.props.requestData('/product')
    this.props.requestBannerData('/mi/banner')
    // // console.log(action)
    //   store.dispatch(action.requestData('/product'))
    //   store.dispatch(action.requestBannerData('/mi/banner'))
  }
  render () {
    // console.log(this.props.bannerList)
    const tabs = [
      { title: '推荐' },
      { title: '手机' },
      { title: '智能' },
    ];
    return (
      <div className = "content">
        <Tabs tabs={tabs}
            initalPage={'t2'}
            swipeable={false}
            tabBarActiveTextColor={'#ed5b00'}
            tabBarUnderlineStyle={'#ed5b00'}
            tabBarBackgroundColor={'#F2F2F2'}
            // tabBarUnderlineStyle={{backgroundColor:'#F2F2F2'}}
        >
            <div>
              <Banner banner={this.props.bannerList} />
              <ShowList list={this.props.lists} />
            </div>
            <div>
              <Banner banner={this.props.bannerList} />
              <Lists list={this.props.lists} />
            </div>
            <div>
              <Banner banner={this.props.bannerList} />
              <Lists list={this.props.lists} />
            </div>
        </Tabs>
      </div>
    )
  }

}

export default Com
