import React, { Component } from 'react'
import { Icon, Checkbox, Stepper,Toast } from 'antd-mobile';
import { Link } from 'react-router-dom';
import './Cart.scss'
import store from '@/store'
import action from '@/store/cart/action'
const CheckboxItem = Checkbox.CheckboxItem;

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

      // 先判断ID后判断选中
      // if(item.goodsId===id){
      //   if(item.hasChecked !== value.target.checked){
      //     this.setState({
      //       listMsg:{"beforeId":item.goodsId,"beforeCount":item.buyCount}
      //     })
      //     item.buyCount=0
      //     item.hasDisable=value.target.checked

      //   }else{
      //     if(id===this.state.listMsg.beforeId){
      //         item.buyCount=this.state.listMsg.beforeCount
      //     }
      //     item.hasDisable=value.target.checked
      //   }
      // }else{
      //   if(item.goodsId===id){
      //     if(item.hasChecked !== value.target.checked){
      //       this.setState({
      //         listMsg:{"beforeId":item.goodsId,"beforeCount":item.buyCount}
      //       })
      //       item.buyCount=0
      //       item.hasDisable=value.target.checked
  
      //     }else{
      //       if(id===this.state.listMsg.beforeId){
      //           item.buyCount=this.state.listMsg.beforeCount
      //       }
      //       item.hasDisable=value.target.checked
      //     }
      //   }
      // }

      // 先判断选中后判断ID
      // if(item.hasChecked !== value.target.checked){
      //   if(item.goodsId===id){
      //     this.setState({
      //       listMsg:{"beforeId":item.goodsId,"beforeCount":item.buyCount}
      //     })
      //     item.buyCount=0
      //     item.hasDisable=value.target.checked
      //   }else{

      //   }


      // }else{
      //   if(id===this.state.listMsg.beforeId){
      //       item.buyCount=this.state.listMsg.beforeCount
      //   }
      //   item.hasDisable=value.target.checked
      // }

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
        <i className="iconfont icon-gouwuche201"></i><span>购物车还是空的</span><button onClick={this.goHome.bind(this)}>去逛逛</button>
      </div>
      cartListFooterHtmlArr=<div></div>
    }else{
      cartListFooterHtmlArr.push(<footer key={0} className="cartFooter">
            <div className="sum cartFooterBox">
              <p>共{store.getState().cartStore.count}件&nbsp;金额：</p>
              <span>{this.state.totlePrice}<i>元</i></span>
            </div>
            <Link to="/kind" className="keepOn cartFooterBox">继续购物</Link>
            <div className="compute cartFooterBox" onClick={this.goBuy.bind(this)}>去结算</div>
      </footer>)
      arr.map((item,index)=>{
        cartListHtmlArr.push(
          <li key={item.goodsId}>
                  <CheckboxItem key={item.goodsId} className="checkBtn" defaultChecked={item.hasFlag} onChange={this.hasCheck.bind(this,item.goodsId)}></CheckboxItem>
                  <div className="listImg"><img src={item.showImg} alt=""/></div>
                  <div className="listInfo">
                      <p>{item.title}</p>
                      <em>售价：{item.attr.ram[0].text[1]}元</em>
                      <div className="countBox"><Stepper
                        style={{ width: '50%', minWidth: '100px' }}
                        showNumber
                        disabled={!item.hasDisable}
                        max={100}
                        min={1}
                        defaultValue={item.buyCount}
                        onChange={this.changeCount.bind(this,item.goodsId)}
                      /><div className="iconfont icon-lajitong" onClick={this.deleteList.bind(this,item.goodsId)}></div></div>
                  </div>
                </li>
        )
        return ""
      })
    }

    return (
      <div className = "cartContainer">
        <div className="content cartContent">
            <Link to="/registerapp/login" className={this.state.hasLogin}>登录后享受更多优惠<span>去登录<Icon type="right" /></span></Link>
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
