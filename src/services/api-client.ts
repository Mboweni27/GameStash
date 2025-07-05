import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'e62feb170e744ef1b46cf5d7af679334'
    }
})