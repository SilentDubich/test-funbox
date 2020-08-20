import axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://SomeUrl.ru/'
})

export const api = {
    uploadCards() {
        return instance.get('cards').then( response => {
            return response.data
        })
    }
}
