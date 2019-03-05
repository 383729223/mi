import api from '@/api/kind'
// import axios from 'axios'
const requestData = (tel, password) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        api.requestData('/mi/product/distinct', { tel, password }).then(data => {
            dispatch({ type: 'KIND_DATA', data: data.data.data})
            resolve(data.data.data)
        })
    })
}
const requestDatas = () => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        api.requestDatas('/mi/product?pageNumber=200').then(data => {
            dispatch({ type: 'KIND_LIST', data: data.data.data})
            resolve(data.data.data)
        })
    })
}

export default { requestData, requestDatas }