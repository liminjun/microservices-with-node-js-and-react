import axios from 'axios';

export default ({ req }) => {
    if (typeof window === 'undefined') {
        // server
        console.log('后端服务请求');
        return axios.create({
            baseURL: 'https://tmnpma-dnrlyt-4000.preview.myide.io/'
        });
    } else {
        // browser
        return axios.create({
            baseURL: '/'
        })
    }
}