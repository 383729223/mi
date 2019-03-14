import React, { Component } from 'react'
import { Toast, List } from 'antd-mobile';
// import { Link } from 'react-router-dom';
import './Order.scss'
import store from '@/store'
import action from '@/store/cart/action'
const Item = List.Item;
class Com extends Component {
  constructor(props){
    super(props);
    this.state={
      cartList:[],
      hasLogin:'noLogin',
      totlePrice:0,
      listMsg:{}
    }
  }
  componentDidMount(){
    this.setState({
      cartList:JSON.parse(localStorage.getItem('buyCart'))|| []
    })
    
    if(store.getState().loginStore.tel===""){
      this.setState({
        hasLogin:'isLogin'
      })
    }

    this.buyCountFn()
  }
  
  // 气泡数量变化函数
  buyCountFn(){
      if(localStorage.getItem('buyCart')){
          let buyDatas=JSON.parse(localStorage.getItem('buyCart'));
          let sum=0;
          let totPrice=0;
          buyDatas.forEach(item => {
              sum+=item.buyCount;
              totPrice+=item.buyCount*item.attr.ram[0].text[1]
          })
          store.dispatch(action.sumCount(sum))
          this.setState({
            totlePrice:totPrice
          })
      }
  }
  // 删除列表按钮功能
  deleteList(id){
    Toast.success('删除成功', 1)
    let newData=this.state.cartList.filter(item=>{
      return item.goodsId !== id
    })
    this.setState({
      cartList:newData
    })

    localStorage.setItem('buyCart',JSON.stringify(newData))
    this.buyCountFn()
  }
  // 改变选中状态
  hasCheck=(id,value)=>{
    let newArr=this.state.cartList
    newArr.forEach(item=>{
      if(item.goodsId===id){
        if(item.hasChecked !== value.target.checked){
          this.setState({
            listMsg:{"beforeId":item.goodsId,"beforeCount":item.buyCount}
          })
          item.buyCount=0
          item.hasDisable=value.target.checked
          item.hasFlag=value.target.checked

        }else{
          if(id===this.state.listMsg.beforeId){
              item.buyCount=this.state.listMsg.beforeCount
          }
          item.hasDisable=value.target.checked
          item.hasFlag=value.target.checked
        }
      }

    })
      // console.log(newArr)
    localStorage.setItem('buyCart',JSON.stringify(newArr))
    this.setState({
      cartList:newArr
    })
    this.buyCountFn()
  }
  // 商品数量变化
  changeCount=(id,value)=>{
    this.setState({
      listMsg:{"id":id,"singelCount":value}
    })
    // console.log(id,value)
    this.state.cartList.forEach(item=>{
      if(item.goodsId===id){
        item.buyCount=value
      }
    })

    localStorage.setItem('buyCart',JSON.stringify(this.state.cartList))
    this.buyCountFn()
  }

  // 结算
  goBuy(){
    console.log(this)
    if(store.getState().loginStore.tel===""){
      this.props.history.push('/registerapp/login')
    }else{
      this.props.history.push('/cashapp/cash')
    }
  }

  goHome(){
    this.props.history.push('/home')
  }

  render () {
    let cartListHtmlArr=[];
    let cartListFooterHtmlArr=[];
    // let arr=JSON.parse(localStorage.getItem('buyCart'))
    let arr=this.state.cartList;
    if(arr.length===0){
      cartListHtmlArr=<div className="emptyCart">
        <i className="iconfont icon-gouwuche201"></i><span>空空如也</span><button onClick={this.goHome.bind(this)}>去逛逛</button>
      </div>
      cartListFooterHtmlArr=<div></div>
    }else{
      cartListFooterHtmlArr.push(<footer key={0} className="orderFooter">
            <div className="sum orderFooterBox">
              <p>共{store.getState().cartStore.count}件&nbsp;金额：</p>
              <span>{this.state.totlePrice}<i>元</i></span>
            </div>
            <div className="compute orderFooterBox" onClick={this.goBuy.bind(this)}>去结算</div>
      </footer>)
      arr.map((item,index)=>{
        cartListHtmlArr.push(
          <li key={item.goodsId}>
                  <Item key={index}
                    thumb={item.showImg}
                    // extra={item.buyCount}
                    onClick=''
                  ><span>{item.title}</span> <span>{item.attr.color[0].text}</span> x {item.buyCount} </Item>
             
                </li>
        )
        return ""
      })
    }

    return (
      <div className = "orderContainer">
        <div className="content orderContent">
            <ul className="listBox">
              { cartListHtmlArr }
              
            </ul>
        </div>
        
        { cartListFooterHtmlArr }
      </div>
    )
  }

}

export default Com
