import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        api_key: 'b232f857e97fe7091f7a0762edb5971f', 
        language:"pt-br",
        page:1
    }
})

export default api