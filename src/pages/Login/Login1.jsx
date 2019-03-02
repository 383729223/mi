import React, { Component } from 'react'
// import { List, InputItem, Toast } from 'antd-mobile';
import { WingBlank, InputItem, Toast, Button } from 'antd-mobile';
// import action from '@/store/login/action'
// import store from '@/store/login/store'
import './Login'
class Com extends Component {
  state = {
    hasError: false,
    value: '',
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  goLogin () {
    this.props.history.push('/registerapp/login')
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }
  componentDidMount () {

  }
  render () {
    return (
      <div className = "content">
        <div className='loginBox'>
          <WingBlank>
            <div className='top'>
              <div className='logo'>
                <img src="./logo.png" alt="a"/>
                <span>小米账号登录</span>
              </div>
            </div>
            <div className='mid_t'>
              <InputItem
              type="phone"
              placeholder="手机号码"
              error={this.state.hasError}
              onErrorClick={this.onErrorClick}
              onChange={this.onChange}
              value={this.state.value}
            >+86&nbsp;&nbsp;></InputItem>
            <div className='mscode'>
              <InputItem
                className='yanzhengma'
                type="phone"
                placeholder="短信验证码"
                error={this.state.hasError}
                onErrorClick={this.onErrorClick}
                onChange={this.onChange}
                value={this.state.value}
              ></InputItem>
              <span className='sendcode'>获取验证码</span>
            </div>
            <div className='btn'>
              <Button type="">立即登录/注册</Button>
            </div>
            <div className='btn1'>
              <Button type="" onClick={this.goLogin.bind(this)}>用户名密码登录</Button>
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
