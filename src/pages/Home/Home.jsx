import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShowList from '@/components/home/ShowList.js'
import Lists from '@/components/home/Lists.js'
import Banner from '@/components/home/Banner.js'
import { Tabs,SearchBar } from 'antd-mobile';
import store from '@/store'
import action from '@/store/home/action'
import './Home.scss'

class Com extends Component {
  constructor(props){
    super(props)
    this.state={
      listData:[],
      bannerData:[],
      phoneListData:[],
      types:[],
      typeDatas:[]
    }
  }
  componentDidMount(){
    // console.log(this.props)
    // this.props.requestData('/mi/product')
    // this.props.requestBannerData('/mi/banner')
    // // console.log(action)
    store.dispatch(action.requestData('/mi/product')).then(data=>{
      this.setState({
        listData:store.getState().homeStore.lists
      })
    })
    store.dispatch(action.requestBannerData('/mi/banner')).then(data=>{
      this.setState({
        bannerData:store.getState().homeStore.bannerList
      })
    })
    store.dispatch(action.requestTypeData('/mi/product/distinct')).then(data=>{
      let newData=[];
      data.forEach(item=>{
        
        store.dispatch(action.requestTypeData('/mi/product/searchType?type='+item)).then(dat=>{
          // console.log(dat)
          newData.push({"type":item,"data":dat})
        })
      })
      // console.log(newData)
      let tiemr1=setTimeout(()=>{

        this.setState({
          types:data,
          typeDatas:newData
        })
        clearTimeout(tiemr1)
      },600)
    })

    
    
  }
  searchFn(value){
    store.dispatch(action.requestSearchData('/mi/product/search?title='+value)).then(data=>{
      this.props.history.push('/registerapp/search')
    })
    
  }
  render () {
    // let tabs = [{title:'推荐'}];
    let tabs = [];
    this.state.types.forEach(item=>{
      tabs.push({"title":item})
    })

    let tabHtml=[];
    if(this.state.typeDatas.length===0){
      console.log("空，没有数据")

    }else{

      // this.state.types.forEach(itm=>{
        this.state.typeDatas.forEach((item,index)=>{
          // console.log(item)
            // if(itm===item.type){
              tabHtml.push(<div key={index}>
                <Banner banner={this.state.bannerData} />
                <Lists list={item.data} />
              </div>)

            // }
          })
      // })
    }
    // this.state.typeDatas.map((item,index)=>(
    //   <div key={index}>
    //     <Banner banner={this.state.bannerData} />
    //     <Lists list={item.data} />
    //   </div>
    // ))

    // console.log(tabs)
    return (
      <div className = "container">
        <header className="header homeHeader">
            <div className="logo">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC" alt=""/>
            </div>
            <div className="search">
                <SearchBar placeholder="搜索商品名称" ref={ref => this.autoFocusInst = ref} onSubmit={this.searchFn.bind(this)} />
            </div>
            <div className="user">
              <Link to="/user"><span className="iconfont icon-wode"></span></Link>
            </div>
        </header>
        <Tabs tabs={tabs}
            initalPage={'t2'}
            swipeable={false}
            tabBarActiveTextColor={'#ed5b00'}
            tabBarUnderlineStyle={'#ed5b00'}
            tabBarBackgroundColor={'#F2F2F2'}
            className="content homeContent"
        >
            {/* 首页第一个tab */}
            {/* <div className="fristTab">
              <Banner banner={this.state.bannerData} />
              <div className="homeNav">
                <Link to="/home"><img src="//i8.mifile.cn/v1/a1/01e0772b-fcd9-6e03-cdf3-9bd08b2d2974!144x152.webp" alt=""/></Link>
                <Link to="/home"><img src="//i8.mifile.cn/v1/a1/69f3581c-893a-c3a3-9f27-055146a62b7e!144x152.webp" alt=""/></Link>
                <Link to="/home"><img src="//i8.mifile.cn/v1/a1/9f3a3e88-3b55-f7c8-b863-5867e23022c1!144x152.webp" alt=""/></Link>
                <Link to="/home"><img src="//i8.mifile.cn/v1/a1/b338546a-bba6-eff5-0b4e-6bcb90c6230e!144x152.webp" alt=""/></Link>
                <Link to="/home"><img src="//i8.mifile.cn/v1/a1/b05bf09b-a0a7-ef8f-e5ba-500b1549938c!144x152.webp" alt=""/></Link>
              </div>
              <div className="imgBox1">
                <div className="imgBox-left">
                  <Link to="/home"><img src="//i8.mifile.cn/v1/a1/d9dfd514-d6d1-68c3-a818-6005752ef2b6!358x508.webp" alt=""/></Link>
                </div>
                <div className="imgBox-right">
                  <Link to="/home"><img src="//i8.mifile.cn/v1/a1/19ad7255-7a7a-b94d-d0cb-e88288716dda!358x252.webp" alt=""/></Link>
                  <Link to="/home"><img src="//i8.mifile.cn/v1/a1/b5413a0d-0c80-6f16-d5f6-cdc7c596921c!358x252.webp" alt=""/></Link>
                </div>
              </div>
              <div className="imgBox2">
                <Link to="/home"><img src="//i8.mifile.cn/v1/a1/a510634a-1898-c67e-5b2b-b1904250074d!720x280.webp" alt=""/></Link>
                <Link to="/home"><img src="//i8.mifile.cn/v1/a1/5df15531-f43d-4255-7e2b-006c7e19ef12!720x440.webp" alt=""/></Link>
              </div>
                <ShowList list={this.state.listData} />
            </div> */}
            
            {tabHtml}
            {/* {this.state.typeDatas.map((item,index)=>(
              <div key={index}>
                <Banner banner={this.state.bannerData} />
                <Lists list={item.data} />
              </div>
            ))} */}

            
        </Tabs>
      </div>
    )
  }

}

export default Com
