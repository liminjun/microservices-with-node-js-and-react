import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
    console.log(currentUser);

    return currentUser? '已登录': '未登录'
};

LandingPage.getInitialProps = async context => {

    console.log('I am on the server.');
    
    // if (typeof window === 'undefined') {
    //     // server 
    //     const response  = await axios.get('http://ingress-nginx.ingress-nginx.svc.cluster.local/api/users/currentuser').catch((err) => {
    //         console.log(err.message);
    //     });
    //     return response.data;
    // } else {
    //     // browser
    //     const { data } = await axios.get('/api/users/currentuser', {
    //         headers: req.headers
    //     }).catch((err) => {
    //         console.log(err.message);
    //     });
    //     return data;
    // }
    const { data } = await buildClient(context).get('/api/users/currentuser');
    return data;
};

export default LandingPage;