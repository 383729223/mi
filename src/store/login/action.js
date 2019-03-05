import api from '@/api/login'
// import axios from 'axios'
const loginCheck = (tel, password) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        api.loginCheck('/mi/users/search', { tel, password }).then(data => {
            let loginCode = data.data.data
            if(loginCode === 1){
                api.userDetail('/mi/users/searchuser?tel=' +tel).then(data => {
                    console.log()
                    dispatch({ type: 'SAVE_LOGIN', data: {
                        loginCode: loginCode, tel: tel, username: data.data.data[0].username } })
                    // let timer = setTimeout(() => {
                })
                resolve(data.data.data)
            } else {
                dispatch({ type: 'LOGIN_CHECK', data: loginCode })
                resolve(data.data.data)
            }
                // clearTimeout(timer)
                // }, 1000)
        })
    })
}


export default { loginCheck }