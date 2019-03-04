import api from '@/api/login'
// import axios from 'axios'
const registerCheck = (tel,username, password) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    api.loginCheck('/mi/users/addAction', {tel, username, password}).then(data => {
        dispatch({ type: 'REGISTER_CHECK', data: data.data.data })
        // let timer = setTimeout(() => {

        resolve(data.data.data)
          // clearTimeout(timer)
        // }, 1000)
    })
  })
}


export default { registerCheck }