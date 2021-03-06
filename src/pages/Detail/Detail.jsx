import React, { Component } from 'react';
import Api from '@/api/detail'
import './Detail.scss'
import { Carousel,Badge, Toast  } from 'antd-mobile';
import { Link } from 'react-router-dom';
import store from '@/store'
import action from '@/store/cart/action'

class Com extends Component {
  constructor(props){
    super(props)
    this.state={
      msg:[],
      showImg:""
    }
  }
  componentDidMount () {
    const id = this.props.match.params.id
    Api.requestData('/mi/detail/search?goodsId='+id).then(data=>{
      this.setState({
        msg:data
      })
    });
    Api.requestData('/mi/product/searchId?goodsId='+id).then(data=>{
      // console.log(data)
      this.setState({
        showImg:data[0].imgsrc
      })
    });
    this.buyCountFn();
  }

  buyCountFn(){
    if(localStorage.getItem('buyCart')){
      let buyDatas=JSON.parse(localStorage.getItem('buyCart'));
      let sum=0;
      buyDatas.forEach(item => {
        sum+=item.buyCount;
      })
      
      store.dispatch(action.sumCount(sum))

    }
  }

  addCart(){
    Toast.success('加入购物车', 1)
    if(localStorage.getItem('buyCart')){
      let newArr=[];
      let id=this.props.match.params.id;
      id=id*1;
      newArr=JSON.parse(localStorage.getItem('buyCart'));

      let data=this.state.msg;
      data[0]['buyCount']=1;
      data[0]['hasChecked']=true;
      data[0]['hasDisable']=true;
      data[0]['hasFlag']=true;
      data[0]['showImg']=this.state.showImg;
      
      let result = newArr.filter(item => {
        if (item.goodsId === id) {
          item.buyCount = item.buyCount * 1 + 1
        }
        return item.goodsId === id
      })
      if (result.length === 0) {
        newArr.push(data[0])
      }

      localStorage.setItem('buyCart',JSON.stringify(newArr))
      
    }else{
      let data=this.state.msg;
      data[0].buyCount=1;
      data[0].hasChecked=true;
      data[0].hasDisable=true;
      data[0].hasFlag=true;
      data[0].showImg=this.state.showImg;
      localStorage.setItem('buyCart',JSON.stringify(data));
    }
    this.buyCountFn()
  }
 
  render () {
    let html=[]
    if(this.state.msg.length===0){
      html=<div style={{width:"100%",textAlign:"center",marginTop:"40px"}}><img src="http://www.sucaijishi.com/uploadfile/2014/0524/20140524124233131.gif" alt="" width="20%" height="auto"/></div>
      
    }else{
      html.push(
        <div key={this.state.msg[0].goodsId} className="detailBox">
        <Carousel
          autoplay={true}
          infinite
        >
              {this.state.msg[0].imgsrcArr.map((val,index) => (
                <a
                  key={index}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: 'auto' }}
                >
                  <img
                    src={val}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                    }}
                  />
                </a>
              ))}
          </Carousel>
          <p className="title">{this.state.msg[0].title}</p>
          <p className="dir"><span>{this.state.msg[0].desc.tag}</span>{this.state.msg[0].desc.sc}</p>
          <p className="price">￥{this.state.msg[0].attr.ram[0].text[1]}</p>
          <div className="detailImg">
            {this.state.msg[0].detailimg.map((imgitm,index)=>(
              <img src={imgitm} alt="" key={index}/>
              ))}
          </div>
        </div>
      )
    }
    return (
      <div className="detailContent">
        { html }
        <footer className="detailFooter">
          <div className="detailFooterLeft">
            <Link to="/home" className="detailCart">
              <span className="iconfont icon-shouye"></span>
              <p>首页</p>
            </Link>
            <Link to="/cartapp/cart" className="detailCart">
              <span className="iconfont icon-gouwuche2"></span>
              <p>购物车</p>
              <Badge className="sumCount" text={store.getState().cartStore.count} overflowCount={20}/>
            </Link>
          </div>
          <div className="addCart" onClick={ this.addCart.bind(this) }>加入购物车</div>
        </footer>
      </div>


    )
  }

}

export default Com
