import axios from 'axios';


export default ({ req }) => {
    if (typeof window === 'undefined') {
        // We are on the server
        console.log('服务端渲染')
        return axios.create({
          baseURL:'http://localhost:3000/auth-api',
          headers: req.headers,
        });
      } else {
        console.log('浏览器端渲染')
        // We must be on the browser
        return axios.create({
          baseURL: 'http://localhost:3000/auth-api',
        });
      }
}