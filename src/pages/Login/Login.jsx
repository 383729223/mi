import React, { Component } from 'react'
// import { List, InputItem, Toast } from 'antd-mobile';
import { WingBlank, InputItem, Toast, Button } from 'antd-mobile';
import action from '@/store/login/action'
import store from '@/store'
import './Login'
class Com extends Component {
  state = {
    hasError: false,
    hasPasswordError: false,
    phone: '',
    password: '',
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('请输入正确格式的手机号');
    }
  }
  onPasswordErrorClick = () => {
    if (this.state.hasPasswordError) {
      Toast.info('密码格式不正确');
    }
  }
  goCode () {
    this.props.history.push('/registerapp/login1')
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
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
  loginCheck () {
    store.dispatch(action.loginCheck(this.state.phone, this.state.password)).then(data => {
      if(data === 1) {
        Toast.success('登录成功', 1)
        let timer = setTimeout(() => {
          this.props.history.push('/home');
          clearTimeout(timer)
        }, 1000)
      } else if (data === -1) {
        Toast.fail('用户不存在', 1)
      } else {
        Toast.fail('用户名或密码错误', 1)
      }
    })
  }
  showPassword (event) {
    let passwordType = document.querySelectorAll('.am-input-control')[1].children[0];
    if(passwordType.type === 'password'){
      passwordType.type = 'text'
      // console.log(svg)
    } else {
      passwordType.type = 'password'
    }
  }
  goRegister () {
    this.props.history.push('/registerapp/register')
  }
  goHome () {
    this.props.history.push('/home')
  }
  componentDidMount () {
    // store.dispatch(action.loginCheck(this.state.phone, this.state.password))
    
  }
  render () {
    return (
      <div className = "content">
        <div className='loginBox'>
          <WingBlank>
            <div className='top'>
              <div className='logo'>
                <img src="https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo@2x.png" onClick={this.goHome.bind(this)} alt="a"/>
                <span>小米账号登录</span>
              </div>
            </div>
            <div className='mid_t'>
              <InputItem
              type="phone"
              placeholder="邮箱/手机号/小米ID"
              error={this.state.hasError}
              onErrorClick={this.onErrorClick}
              onChange={this.onChange}
              value={this.state.phone}
            ></InputItem>
            <div className='password'>
              <InputItem
                className='passwordInp'
                type="password"
                placeholder="密码"
                error={this.state.hasPasswordError}
                onErrorClick={this.onPasswordErrorClick}
                onChange={this.onPasswordChange}
                value={this.state.password}
              ></InputItem>
              <span className='sendcode' onClick={ this.showPassword.bind(this)}>
                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path className="eye_outer" d="M0 8 C6 0,14 0,20 8, 14 16,6 16, 0 8 z"></path>
                  <circle className="eye_inner" cx="10" cy="8" r="3"></circle>
                </svg>
              </span>
            </div>
            <div className='btn'>
              <Button type="" onClick={this.loginCheck.bind(this)}>登录</Button>
            </div>
            <div className='btn1'>
              <Button type="" onClick={this.goCode.bind(this)}>手机短信登录/注册</Button>
            </div>
            <div className='register'>
              <div className='register_1'>
                <span onClick={this.goRegister.bind(this)}>立即注册</span>|<span>忘记密码?</span>
              </div>
            </div>
            </div>
            <div className='mid_b'>
              <fieldset className="oth_type_tit">
                <legend align="center" className="oth_type_txt">其他方式登录</legend>
              </fieldset>
              <div className='elselogin'>
                <a className='weibo' href='https://api.weibo.com/oauth2/authorize?response_type=code&client_id=2996826273&redirect_uri=https://account.xiaomi.com/pass/sns/login/load&state=7b22736964223a226d695f6573686f706d5f676f222c227469636b6574223a22343334303932222c226c6f63616c65223a227a685f434e222c2263616c6c6261636b223a2268747470732533412532462532466d2e6d692e636f6d2532467631253246617574686f72697a6525324673736f5f63616c6c6261636b253346666f6c6c6f77757025334468747470732532353341253235324625323532466d2e6d692e636f6d2532353246757365722532367369676e2533445a574a694d4463355957566a4f544e6b4e474535597a4d344d6a6332593249314d4759784d6d4530596d59344d6d526b4d4459314e67253243253243222c226170706964223a2232393936383236323733227d'>
                  <i></i>
                </a>
                <a className='alipay' href='https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=100284651&redirect_uri=https://account.xiaomi.com/pass/sns/login/load&state=https://auth.alipay.com/login/express.htm?goto=https%3A%2F%2Fmemberexprod.alipay.com%3A443%2Fauthorize%2FuserAuthQuickLoginAction.htm%3Fe_i_i_d%3D8486ce648561f9a5a7b8a6c893236d5f'>
                  <i></i>
                </a>
                <a className='weixin' href='https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=100284651&redirect_uri=https://account.xiaomi.com/pass/sns/login/load&state=7b22736964223a226d695f6573686f706d5f676f222c227469636b6574223a22363533303739222c226c6f63616c65223a227a685f434e222c2263616c6c6261636b223a2268747470732533412532462532466d2e6d692e636f6d2532467631253246617574686f72697a6525324673736f5f63616c6c6261636b253346666f6c6c6f77757025334468747470732532353341253235324625323532466d2e6d692e636f6d2532353246757365722532367369676e2533445a574a694d4463355957566a4f544e6b4e474535597a4d344d6a6332593249314d4759784d6d4530596d59344d6d526b4d4459314e67253243253243222c226170706964223a22313030323834363531227d'>
                  <i></i>
                </a>
              </div>
            </div>
            <div className='bottom'>
              <div className='bottom_b'>
                <ul>
                  <li><a className='a1' href='localhost:3000/registerapp/login'>简体</a>|</li>
                  <li><a className='a2' href='https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&sid=mi_eshopm_go&_bal=true&_loginSign=ticket&_loginType=ticket&_locale=zh_TW'>繁体</a>|</li>
                  <li><a className='a3' href='https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&sid=mi_eshopm_go&_bal=true&_loginSign=ticket&_loginType=ticket&_locale=en'>English</a>|</li>
                  <li><a className='a4' href='https://static.account.xiaomi.com/html/faq/en_US/faqList.html'>常见问题</a>|</li>
                  <li><a className='a5' href='https://www.mi.com/about/privacy/'>隐私政策</a></li>
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
