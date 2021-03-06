import axios from 'axios'
import baseUrl from '@/api'

const api = {
    requestData(url) {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + url)
                .then((data) => {
                    resolve(data)
                })
                .catch((error) => {
                    reject(error)
                });
        })
    },
    requestDatas(url) {
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