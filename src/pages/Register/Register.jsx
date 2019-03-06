import React, { Component } from 'react'
// import { List, InputItem, Toast } from 'antd-mobile';
import { WingBlank, InputItem, Toast, Button } from 'antd-mobile';
import action from '@/store/register/action'
import store from '@/store'
import './Register'
class Com extends Component {
  state = {
    hasError: false,
    hasPhoneError: false,
    hasPasswordError: false,
    phone: '',
    password: '',
    username: ''
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('请输入至少两位用户名');
    }
  }
  onPhoneErrorClick = () => {
    if (this.state.hasPhoneError) {
      Toast.info('请输入正确格式的手机号');
    }
  }
  onPasswordErrorClick = () => {
    if (this.state.hasPasswordError) {
      Toast.info('密码格式不正确');
    }
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 2) {
      if(value.replace(/\s/g, '').length === 0){
        this.setState({
          hasError: false,
        });
      } else {
        this.setState({
          hasError: true,
        });
      }
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      username: value.replace(/\s/g, '')
    });
  }
  onPhoneChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      if(value.replace(/\s/g, '').length === 0){
        this.setState({
          hasPhoneError: false,
        });
      } else {
        this.setState({
          hasPhoneError: true,
        });
      }
    } else {
      this.setState({
        hasPhoneError: false,
      });
    }
    this.setState({
      phone: value.replace(/\s/g, '')
    });
  }
  onPasswordChange = (value) => {
    if (value.replace(/\s/g, '').length < 6) {
      if(value.replace(/\s/g, '').length === 0){
        this.setState({
          hasPasswordError: false,
        });
      } else {
        this.setState({
          hasPasswordError: true,
        });
      }
    } else {
      this.setState({
        hasPasswordError: false,
      });
    }
    this.setState({
      password: value.replace(/\s/g, '')
    });
  }
  registerCheck () {
    if (this.state.phone.length !== 0 && this.state.password.length !==0 && this.state.username.length !==0){
      store.dispatch(action.registerCheck(this.state.phone,this.state.username, this.state.password)).then(data => {
        if (data === 0){
          Toast.fail('用户已注册', 1)
        } else if(data === 1) {
          Toast.success('注册成功',1)
        } else {
          Toast.fail('注册失败', 1)
        }
      })
    } else {
      Toast.fail('请将信息填写完整', 1)
    }
  }
  goLogin () {
    this.props.history.push('/registerapp/login')
  }
  componentDidMount () {
    // console.log(store)
    // store.dispatch(action.loginCheck(this.state.phone, this.state.password))
    
  }
  render () {
    return (
      <div className = "content">
        <div className='registerBox'>
          <WingBlank>
            <div className='top'>
              <div className='logo'>
                <span>注册小米账号</span>
              </div>
            </div>
            <div className='mid_t'>
            <InputItem
              type="text"
              placeholder="请输入用户名"
              error={this.state.hasError}
              onErrorClick={this.onErrorClick}
              onChange={this.onChange}
              value={this.state.username}
            ><span className='iconfont icon-yonghu'></span></InputItem>
            <div className='password'>
            <InputItem
              type="phone"
              placeholder="请输入手机号码"
              error={this.state.hasPhoneError}
              onErrorClick={this.onPhoneErrorClick}
              onChange={this.onPhoneChange}
              value={this.state.phone}
            ><span className='iconfont icon-mobile'></span></InputItem>
            </div>
            <InputItem
              type="password"
              placeholder="请输入密码"
              error={this.state.hasPasswordError}
              onErrorClick={this.onPasswordErrorClick}
              onChange={this.onPasswordChange}
              value={this.state.password}
            ><span className='iconfont icon-mima1'></span></InputItem>
            <div className='btn'>
              <Button type="" onClick={this.registerCheck.bind(this)}>立即注册</Button>
            </div>
            <div className='btn1'>
              <Button type="" onClick={this.goLogin.bind(this)}>去登录</Button>
            </div>
            </div>
            <div className='bottom'>
              <div className='bottom_b'>
                <ul>
                  <li><a className='a1' href='localhost:3000/registerapp/login'>简体</a></li>
                  <li><a className='a2' href='https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&sid=mi_eshopm_go&_bal=true&_loginSign=ticket&_loginType=ticket&_locale=zh_TW'>繁体</a></li>
                  <li><a className='a3' href='https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&sid=mi_eshopm_go&_bal=true&_loginSign=ticket&_loginType=ticket&_locale=en'>English</a></li>
                  <li><a className='a4' href='https://static.account.xiaomi.com/html/faq/en_US/faqList.html'>常见问题</a></li>
                </ul>
              </div>
            </div>
          </WingBlank>
        </div>
      </div>
    )
  }

}

export default Com
