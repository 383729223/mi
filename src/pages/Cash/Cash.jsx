import React, { Component } from 'react';
// import Api from '@/api/detail'
import './Cash.scss'
import { List, Checkbox, Button, Accordion, Toast } from 'antd-mobile';
// import { Link } from 'react-router-dom';
// import store from '@/store'
// import action from '@/store/cart/action'
// InputItem, Carousel, Badge,
const Item = List.Item;
const AgreeItem = Checkbox.AgreeItem;
class Com extends Component {
  constructor(props){
    super(props)
    this.state={
      msg:[],
      showImg:"",
      cartList:[],
      hasLogin:'noLogin',
      totlePrice:0,
      listMsg:{}
    }
  }

  componentDidMount () {
    this.setState({
      cartList:JSON.parse(localStorage.getItem('buyCart'))
    })
    console.log(document.querySelectorAll('.am-checkbox')[0].className);
    // if(store.getState().loginStore.tel===""){
    //   // console.log(this.props)
    //   this.props.history.push('/registerapp/login')
    // }
  }
  show () {
    let cashkind1 = document.querySelector('.cashkind1');
    let cashKind = document.querySelector('.cashKind');
    let image_icon= document.querySelector('.image-icons');
    if(!document.querySelector('.cashkind2')){
      cashkind1.style.height='133px';
      cashkind1.style.overflow='hidden';
      cashKind.style.height='177px'
      document.querySelector('.cashFs').innerHTML='使用其他支付方式';
      cashkind1.className='cashkind1 cashkind2';
      image_icon.className='image-icons icon-arrow-down';
      image_icon.style.transform='rotate(360deg)';
    } else {
      cashkind1.style.height='265px';
      cashkind1.style.overflow='';
      cashKind.style.height='auto'      
      document.querySelector('.cashFs').innerHTML='收起其他支付方式';
      cashkind1.className='cashkind1';
      image_icon.style.transform='rotate(180deg)';

    }
  }
  check (index) {
    
    document.querySelectorAll('.am-checkbox').forEach((item, index) => {
      item.className='am-checkbox'
    })
    // document.querySelectorAll('.am-checkbox')[index].className='am-checkbox am-checkbox-checked'
    console.log(document.querySelectorAll('.am-checkbox')[index].className)
    if(document.querySelectorAll('.am-checkbox')[index].className !== 'am-checkbox am-checkbox-checked') {
      console.log('ok')
      document.querySelectorAll('.am-checkbox')[index].className ='am-checkbox am-checkbox-checked'
    }
  }
  render () {
    let html = [];
    let price = 0;
    let count = 0;
    this.state.cartList.map((item, index) => {
      price += item.buyCount * item.attr.ram[0].text[1]
      count += item.buyCount
      html.push(
      <Item key={index}
          thumb={item.showImg}
          extra={item.attr.ram[0].text[1]*item.buyCount+'.00'}
          onClick=''
        >{item.title} {item.attr.color[0].text} x {item.buyCount}</Item>)
        return ''
    })
    return (
      <div className = "cashContainer">
        <div className="content cashContent">
          <div className='cashArea'>
            <Item arrow="horizontal" onClick={() => {}}>添加收货地址</Item>
          </div>
          <div className='cashKind'>
          <div className='cashkind1'>
            <Item
              thumb="https://s1.mi.com/m/images/m/pay_wx.png"
              extra={
                <AgreeItem key='0' onChange={this.check.bind(this, 0)} defaultChecked>
                </AgreeItem>
              }
              onClick=''
            >微信支付</Item>
            <Item
              thumb="https://s1.mi.com/m/images/m/pay_zfb2.png"
              extra={
                <AgreeItem key=' 1' onChange={this.check.bind(this, 1)}>
                </AgreeItem>
              }
              onClick=''
            >支付宝</Item>
            <Item
              thumb="https://s1.mi.com/m/images/m/micash_wap.png"
              extra={
                <AgreeItem key='2' onChange={this.check.bind(this, 2)}>
                </AgreeItem>
              }
              onClick=''
            >小米钱包</Item>
            <Item
              thumb="https://s1.mi.com/m/images/m/pay_yl1.png"
              extra={
                <AgreeItem key='3' onChange={this.check.bind(this, 3)}>
                </AgreeItem>
              }
              onClick=''
            >银联支付</Item>
            <Item
              thumb="https://s1.mi.com/m/images/m/pay_yzf.png"
              extra={
                <AgreeItem key='4' onChange={this.check.bind(this, 4)}>
                </AgreeItem>
              }
              onClick=''
            >翼支付</Item>
            <Item
              thumb="https://s1.mi.com/m/images/m/pay_mifinanceinstal.png"
              extra={
                <AgreeItem key='5' onChange={this.check.bind(this, 5)}>
                </AgreeItem>
              }
              onClick=''
            >小米分期</Item>
            </div>
            <Item
              className='cashelse'
              onClick={this.show.bind(this)}
            ><span className='cashFs'>收起其他支付方式</span><i className="image-icons icon-arrow-down"></i></Item> 
          </div>
          <div className='cashBill'>
            <div className='cashT'>
              <Item extra={'包邮'}>运费</Item>
            </div>
            <div className='cashM'>
              <Accordion defaultActiveKey="" className="my-accordion" onChange={this.onChange}>
                <Accordion.Panel header="电子发票">
                  <List className="my-list">
                    <List.Item>
                      <p>发票类型</p>
                      <div className='cashbtn'>
                        <Button type="ghost" inline style={{ marginRight: '4px'}} className="am-button-borderfix">电子发票</Button>
                      </div>
                      <p>提示：该订单商品只提供电子发票</p>
                      <span>电子发票是税务局认可的有效凭证，其法律效力、基本用途及使用规定同纸质发票。推荐使用电子发票，不怕丢失，更方便、环保。</span>
                    </List.Item>
                    <List.Item>
                      <p>选择发票抬头</p>
                        <div className='cashbtn'>
                          <Button type="ghost" inline style={{ marginRight: '4px'}} className="am-button-borderfix">个人</Button>
                          <Button type="ghost" inline style={{ marginRight: '4px'}} className="am-button-borderfix">单位</Button>
                        </div>
                      <p>提示：电视和会员年卡同时购买只提供电子发票</p>
                    </List.Item>
                    <List.Item>
                      <p>收票人手机</p>
                      <div className="ui-input mb20">
                        <input className='inp' type="tel" placeholder="电子发票开具后短信告知你（选填）" maxlength="11" debounce="500"/>
                      </div>
                    </List.Item>
                    <List.Item>
                      <p>收票人邮箱</p>
                      <div className="ui-input mb20">
                        <input className='inp' type="tel" placeholder="用于电子发票（选填）" maxlength="11" debounce="500"/>
                      </div>
                      <div className="fapiao-desc">
                        <p>发票须知：</p>
                        <p>1.发票金额为实际支付金额，不包含优惠券、礼品卡等；</p>
                        <p>2.纸质发票不与商品同时发出；</p>
                        <p>3.纸质发票将于商品妥投完成7日后发出；</p>
                        <p>4.纸质发票收到后请妥善保存，如退货需一同寄回。</p>
                        <p>查看更多发票常见问题&gt;&gt;</p>
                      </div>
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion>
            </div>
            <div className='cashB'>
            <Accordion defaultActiveKey="" className="my-accordion" onChange={this.onChange}>
                <Accordion.Panel header={<span className='cashQ'>优惠券<span className='cashY'>已优惠&nbsp;&nbsp;<em>0元</em></span></span>}>
                  <List className="my-list">
                    <List.Item>
                      <p>使用优惠券码</p>
                        <div  className="ui-box-flex">
                          <input  type="text" placeholder="请输入优惠券码"/>
                        <a href="1" className="ui-input-btn">确定</a>
                        </div>
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
					<div className='cashGood'>
              {html}
          </div>
          <div className="cashInfo">
            <div className="b51">
              <p>
                <strong>商品价格：</strong>
                <span data-v-2c7c535a="">{price}.00</span>
              </p>
            </div>
            <div className="b52">
              <p>
                <strong>已优惠：</strong>
                <span>0.00</span>
              </p>
            </div>
            <div className="b53">
              <p>
                <strong>配送费用：</strong>
                <span>0.00</span>
              </p>
            </div>
          </div>
        </div>
        <footer className="cashFooter">
              <div className="sum cashFooterBox">
                <p>共&nbsp;{count}件&nbsp;合计：</p>
                <span><i>{price}元</i></span>
              </div>
              <div className="compute cashFooterBox" onClick={() => {Toast.info('开发中', 1)}}>去付款</div>
        </footer>
      </div>

    )
  }

}

export default Com
