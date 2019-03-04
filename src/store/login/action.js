import api from '@/api/login'
// import axios from 'axios'
const loginCheck = (tel, password) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        api.loginCheck('/mi/users/search', { tel, password }).then(data => {
            dispatch({ type: 'LOGIN_CHECK', data: data.data.data })
                // let timer = setTimeout(() => {

            resolve(data.data.data)
                // clearTimeout(timer)
                // }, 1000)
        })
    })
}


export default { loginCheck }