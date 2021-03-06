import axios from 'axios'
import baseUrl from '@/api'

const api = {
    loginCheck(url, params) {
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + url, params)
                .then((data) => {
                    resolve(data)
                })
                .catch((error) => {
                    reject(error)
                });
        })
    },
    userDetail(url) {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + url)
                .then((data) => {
                    resolve(data)
                })
                .catch((error) => {
                    reject(error)
                });
        })
    }
    

}

export default api