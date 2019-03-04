import React, { Component } from 'react';
import Api from '@/api/detail'
import './Detail.scss'
import { Carousel } from 'antd-mobile';
import { Link } from 'react-router-dom';

class Com extends Component {
  constructor(props){
    super(props)
    this.state={
      msg:[]
    }
  }
  componentDidMount () {
    console.log(this)
    const id = this.props.match.params.id
    Api.requestData('/mi/detail/search?goodsId='+id).then(data=>{
      // console.log(data)
      this.setState({
        msg:data
      })
    })
  }
  addCart(){

  }
 
  render () {
    let html=[]
    if(this.state.msg.length===0){
      html=<div>Loading....</div>
      
    }else{
      html.push(
        <div key={this.state.msg[0].goodsId} className="detailBox">
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
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
            <Link to="/cart" className="detailCart">
              <span className="iconfont icon-gouwuche2"></span>
              <p>购物车</p>
            </Link>
          </div>
          <div className="addCart" onClick={ this.addCart.bind(this) }>加入购物车</div>
        </footer>
      </div>


    )
  }

}

export default Com
