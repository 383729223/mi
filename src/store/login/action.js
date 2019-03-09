import api from '@/api/login'
// import axios from 'axios'
const loginCheck = (tel, password) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        if (tel !== ''){
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
        } else {
            dispatch({ type: 'SAVE_LOGIN', data: {
                loginCode: 0, tel: tel, username: '' } })
            // let timer = setTimeout(() => {
        }
    })
}
const editName = (tel, username ) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        api.loginCheck('/mi/users/updateAction', { tel, username }).then(data => {
            dispatch({ type: 'USERNAME', data:{editCode:data,username,tel}})
        })
            })
}
const editPassword = (tel, password ) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        api.loginCheck('/mi/users/updateActionPassword', { tel, password }).then(data => {
            dispatch({type: 'PASSWORD', data:data})
        })
            })
}
export default { loginCheck, editName, editPassword}