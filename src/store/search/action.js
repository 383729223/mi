import api from '@/api/home'
// import axios from 'axios'

const requestSearchData = (url) => (dispatch, getState) => {
    api.requestData(url).then(data => {
        // console.log(data)
        dispatch({ type: 'CHANGE_SEARCHLISTS_DATA', data })
    })

}

export default { requestSearchData }