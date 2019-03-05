import React, { Component } from 'react'
import { Tabs, WhiteSpace, NavBar, Icon } from 'antd-mobile';
import store from '@/store';
import action from '@/store/kind/action'
import './Kind';
// import store from '@/store'
class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      list: []
    }
  }
  componentDidMount() {
    store.dispatch(action.requestData()).then(data => {
      this.setState({
        data: store.getState().kindStore.data
      })
    });
    store.dispatch(action.requestDatas()).then(data => {
      this.setState({
        list: data
      })
    });
  }
  goBack () {
    this.props.history.go(-1)
  }
  change (activeTab,goToTab) {
      this.props.match.url = '/kind#dianshi'
    }
  render () {
    const tabs = [];
    let html1 = [<li id='phone' key>手机专区</li>]
    let html2 = [<li id='dianshi' key>电视专区</li>]
    let html3 = [<li id='computer' key>电脑专区</li>]
    let html4 = [<li id='jiadian' key>家电专区</li>]
    let html5 = [<li id='luyou' key>路由专区</li>]
    let html6 = [<li id='chuxin' key>出行专区</li>]
    let html7 = [<li id='chuandai' key>穿戴专区</li>]
    this.state.list.map((item, index) => {
      if(item.type==='手机'){
        html1.push(<li key={item.goodsId}>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <img width='50px' src ={item.imgsrc} alt=''/>
        </li>
      )
      } else if(item.type==='电视'){
        html2.push(<li key={item.goodsId}>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <img width='50px' src ={item.imgsrc} alt=''/>
        </li>
      )
      } else if(item.type==='电脑'){
        html3.push(<li key={item.goodsId}>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <img width='50px' src ={item.imgsrc} alt=''/>
        </li>
      )
      } else if(item.type==='家电'){
        html4.push(<li key={item.goodsId}>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <img width='50px' src ={item.imgsrc} alt=''/>
        </li>
      )
      } else if(item.type==='路由'){
        html5.push(<li key={item.goodsId}>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <img width='50px' src ={item.imgsrc} alt=''/>
        </li>
      )
      } else if(item.type==='出行'){
        html6.push(<li key={item.goodsId}>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <img width='50px' src ={item.imgsrc} alt=''/>
        </li>
      )
      } else {
        html7.push(<li key={item.goodsId}>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <img width='50px' src ={item.imgsrc} alt=''/>
        </li>
        )
      }
     return ''
      
    })
    let html = [html1,html2,html3,html4,html5,html6,html7]
    this.state.data.map((item, index) => {
      tabs[index] = {
        title: item
        }
        return ''
    })
    
    return (
      <div className = "container">
        <header className="header kindHeader">
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={this.goBack.bind(this)}
            rightContent={[
              <Icon key="0" type="search" style={{ marginRight: '.03rem' }} />,
            ]}
          >分类</NavBar>
        </header>
        <div className="content kindContent" id='kindId'>
          <div className='kindList'>
            <WhiteSpace />
            <Tabs tabs={tabs}
              initalPage={'t4'}
              tabBarPosition="left"
              tabDirection="vertical"
              tabBarActiveTextColor='#fb7d34'
              onTabClick={this.change.bind(this)}
              activeTab
              goToTab
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                <ul>
                {
                  html
                }</ul>
              </div>
            </Tabs>
            <WhiteSpace />
          </div>
        </div>
      </div>
    )
  }

}

export default Com
