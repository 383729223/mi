import React, { Component } from 'react';
import Api from '@/api/detail'
import './Detail.scss'
import { Carousel } from 'antd-mobile';

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
    Api.requestData('/product/search?id='+id).then(data=>{
      // console.log(data[0])
      this.setState({
        msg:data,
        imgHeight: 176,
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
        <div key={this.state.msg[0]._id} className="detailBox">
          <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
              <a
                key={this.state.msg[0]._id}
                href="http://39.98.41.185"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={this.state.msg[0].big_pic}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
          </Carousel>
          <p className="title">{this.state.msg[0].title}</p>
          <p>产地：{this.state.msg[0].prov_city}</p>
          <p className="oriPrice">原价：<span>{this.state.msg[0].original_price}</span></p>
          <p className="salePrice">折扣价：<span>{this.state.msg[0].discount_price}</span></p>
        </div>
      )
    }
    return (
      <div className="content">
        { html }
        <div className="detailFooter">
            <div className="detailCart">
              <img src="../../static/icon/客服.png" alt="" />
              <p>客服</p>
            </div>
            <div className="detailCart">
              <img src="../../static/icon/购物车.png" alt=""/>
              <p>购物车</p>
            </div>
            <div className="addCart btncommon" onClick={ this.addCart.bind(this) }>加入购物车</div>
            <div className="fastBuy btncommon">立即购买</div>
        </div>
      </div>


    )
  }

}

export default Com
