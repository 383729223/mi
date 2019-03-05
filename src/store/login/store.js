const reducer = (state = {
    data: '',
    tel: '',
    password: '',
    username: ''
}, action) => {
  const { type, data } = action; // type表示你要做的事行为，data就是传递过来的数据
  switch (type) {
      case 'SAVE_LOGIN': // 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
          return {
              tel: data.tel,
              data: data.loginCode,
              username: data.username
          }
        case 'LOGIN_CHECK':
        return{
            data: data,
        }
      default:
          return state;
  }
}

export default reducer;