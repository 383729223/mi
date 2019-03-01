import api from '@/api/home'

const requestData = (url) => (dispatch, getState) => {
    api.requestData(url).then(data => {
        // console.log(data)
        dispatch({ type: 'CHANGE_LISTS_DATA', data })
    })
}
const requestBannerData = (url) => (dispatch, getState) => {
    api.requestData(url).then(data => {
        // console.log(data)
        dispatch({ type: 'CHANGE_BANNER_DATA', data })
    })
}


export default { requestData, requestBannerData }