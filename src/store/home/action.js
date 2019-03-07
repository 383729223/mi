import api from '@/api/home'

const requestData = (url) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        api.requestData(url).then(data => {
            // console.log(data)
            dispatch({ type: 'CHANGE_LISTS_DATA', data })
            resolve(data)
        })
    })
}
const requestTypeData = (url) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        api.requestData(url).then(data => {
            // console.log(data)
            // dispatch({ type: 'CHANGE_PRODUCTTYPES_DATA', data })
            resolve(data)
        })
    })
}

const requestSearchData = (url) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        api.requestData(url).then(data => {
            // console.log(data)
            dispatch({ type: 'CHANGE_SEARCHLISTS_DATA', data })
            resolve(data)
        })

    })
}
const requestBannerData = (url) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        api.requestData(url).then(data => {
            // console.log(data)
            dispatch({ type: 'CHANGE_BANNER_DATA', data })
            resolve(data)
        })
    })
}


export default { requestData, requestSearchData, requestBannerData, requestTypeData }