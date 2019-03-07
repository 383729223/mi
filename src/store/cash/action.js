// import axios from 'axios'
const sumCount = (count) => (dispatch, getState) => {

    dispatch({ type: 'CHANGE_COUNT', count })
}


export default { sumCount }