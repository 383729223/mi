import React, { Component } from 'react'
import { Tabs, WhiteSpace, ActivityIndicator, NavBar, Icon } from 'antd-mobile';
import store from '@/store';
import action from '@/store/kind/action'
import './Kind';
import { Link } from 'react-router-dom'
// import store from '@/store'

class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      list: [],
      index:'0'
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
    this.setState({
      num: 1
    })
    window.addEventListener('scroll', this.onListScroll, true);
    
    // document.querySelector('.kind_ul').addEventListener('scroll', ()=> {
      // console.log('ok')
    // })
    this.showToast();
  }
  
  componentWillUnmount () {
    window.removeEventListener('scroll', this.onListScroll, true);
  }
  onListScroll(e){
    let underline = document.querySelector('.am-tabs-default-bar-underline');
    let ele = document.querySelector('.am-tabs-default-bar-content').children
    if (e.target.scrollTop >= 0 && e.target.scrollTop <= 700) {
      for (let i = 0; i < 7; i++){
        ele[i].style.color = '#3c3c3c';
      }
      underline.style.top = 20 * 0 + '%';
      ele[0].style.color='rgb(251, 125, 52)'
    } else if (e.target.scrollTop > 700 && e.target.scrollTop <= 1133) {
      for (let i = 0; i < 7; i++){
        ele[i].style.color = '#3c3c3c';
      }
      underline.style.top = 20 * 1 + '%';
      ele[1].style.color='rgb(251, 125, 52)'
    } else if (e.target.scrollTop > 1133 && e.target.scrollTop <= 1550) {
      for (let i = 0; i < 7; i++){
        ele[i].style.color = '#3c3c3c';
      }
      underline.style.top = 20 * 2 + '%';
      ele[2].style.color='rgb(251, 125, 52)'
    } else if (e.target.scrollTop > 1550 && e.target.scrollTop <= 2076) {
      for (let i = 0; i < 7; i++){
        ele[i].style.color = '#3c3c3c';
      }
      underline.style.top = 20 * 3 + '%';
      ele[3].style.color='rgb(251, 125, 52)'
    } else if (e.target.scrollTop > 2076 && e.target.scrollTop <= 2496) {
      for (let i = 0; i < 7; i++){
        ele[i].style.color = '#3c3c3c';
      }
      underline.style.top = 20 * 4 + '%';
      ele[4].style.color='rgb(251, 125, 52)'
    } else if (e.target.scrollTop > 2496 && e.target.scrollTop <= 2817) {
      for (let i = 0; i < 7; i++){
        ele[i].style.color = '#3c3c3c';
      }
      underline.style.top = 20 * 5 + '%';
      ele[5].style.color='rgb(251, 125, 52)'
    } else {
      for (let i = 0; i < 7; i++){
        ele[i].style.color = '#3c3c3c';
      }
      underline.style.top = 20 * 6 + '%';
      ele[6].style.color='rgb(251, 125, 52)'
    }
  }
  showToast = () => {
    this.setState({ animating: !this.state.animating });
    this.closeTimer = setTimeout(() => {
      this.setState({ animating: !this.state.animating });
      clearTimeout(this.closeTimer)
    }, 1000);
  }
  scrollToAnchor = (anchorName, e, e1) => {
    // console.log(anchorName)
    // console.log(e)
    if (e1+'x') {
        let anchorElement = document.getElementById(e1+'x');
        // console.log(anchorElement)
        if(anchorElement) { anchorElement.scrollIntoView(); }
        let underline = document.querySelector('.am-tabs-default-bar-underline');
        let ele = document.querySelector('.am-tabs-default-bar-content').children
        for (let i = 0; i < 7; i++){
          ele[i].style.color = '#3c3c3c';
        }
        underline.style.top = 20 * e1 + '%';
        // console.log();
        ele[e1].style.color='rgb(251, 125, 52)'
        // ele.setAttribute('aria-selected', true)
    }
  }
  goBack () {
    this.props.history.go(-1)
  }
  change (activeTab,goToTab) {
    // console.log( document.documentElement.scrollTop);
    }
  render () {
    const tabs = [];
    let html = [];
    let imgs = ['//i8.mifile.cn/v1/a1/eacf5445-a567-c5e1-0318-78cf3938f8d4!500x200.webp','//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/69bf9d06a7285a70adbec96448d5377c.jpg?thumb=1&w=500&h=200','//i8.mifile.cn/v1/a1/efdcf401-f553-aef7-1751-43854b6f4a20!500x200.webp','//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/17dbc837b82de528f8f4abf4ede0753a.jpg?thumb=1&w=500&h=200','//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f1042af20f63f37c30bd9399efdc0b7a.jpg?thumb=1&w=500&h=200','//i8.mifile.cn/v1/a1/ff205815-61e1-ef9f-d7d2-5650f1224c4b!500x200.webp','//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/55a9f5db1e6cd217a27b6b59d64509cd.jpg?thumb=1&w=500&h=200']
    this.state.data.map((item, index) => {
      html.push(<li id ={index+'x'} className='kind_type' key={index}><div className='kind_imgs'><img alt='' src={imgs[index]}/></div><div className='kind_types'><div className='line'></div>&nbsp;&nbsp;&nbsp;{item}专区&nbsp;&nbsp;&nbsp;<div className='line'></div></div></li>);
      this.state.list.map((ite, ind) => {
        if(ite.type===item){
          // console.log(ite.type)
          html.push(<Link to={'/detailapp/detail/' + ite.goodsId} className='kind_goods' key={ind+10}><div className='kind_img'><img src={ ite.imgsrc } alt=''/></div><p className='kind_name'>{ite.title}</p></Link>)
        } 
       return ''
        
      })
      tabs[index] = {
        title: item
        }
        return ''
    })
    html.push(<div key='11111111111' className='kind_space'></div>)
    return (
      <div className = "container">
        <ActivityIndicator
                toast
                text="Loading..."
                animating={this.state.animating}
              />
        <header className="header kindHeader">
        <NavBar
            mode="light"
            icon={<Icon type="left" size="lg" color="#999" />}
            style={{ backgroundColor: '#F2F2F2' }}
            onLeftClick={this.goBack.bind(this)}
            rightContent={[
              <Icon key="0" type="search" color="#999" size="md" style={{ marginRight: '16px' }} />
            ]}
          >分类</NavBar>
        </header>
        <div className="content kindContent" id='kindId'>
          <div className='kindList'>
            <WhiteSpace />
            <Tabs tabs={tabs}
              initalPage={'t2'}
              tabBarPosition="left"
              tabDirection="vertical"
              tabBarActiveTextColor='#fb7d34'
              onTabClick={this.scrollToAnchor.bind(this,'2x')}
              // onChange={this.scroll.bind(this)}
              page='0'
              animated ={true}
              // destroyInactiveTab = {true}
              // usePaged = {false}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                <ul className='kind_ul'  ref={(scrollItem) => {this.scrollItem = scrollItem;}}
        onScroll={this.onListScroll}>
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
