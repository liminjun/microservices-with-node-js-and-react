import axios from 'axios';

export default ({ req }) => {
    if (typeof window === 'undefined') {
        // server
        console.log('后端服务请求');
        return axios.create({
            baseURL: 'http://localhost:4000/',
            headers: req.headers
        });
    } else {
        // browser
        return axios.create({
            baseURL: 'http://localhost:4000/'
        })
    }
}