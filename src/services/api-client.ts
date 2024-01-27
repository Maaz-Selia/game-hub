import axios from "axios";

export default axios.create( {
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '535b57d21f044e4593ac91f73df4401d'
    }
})