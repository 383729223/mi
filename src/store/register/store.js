const reducer = (state = {
    data: ''
}, action) => {

  const { type, data } = action; // type表示你要做的事行为，data就是传递过来的数据
  switch (type) {
      case 'REGISTER_CHECK': // 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
          return {
              data: data,
          }
      default:
          return state;
  }
}

export default reducer;