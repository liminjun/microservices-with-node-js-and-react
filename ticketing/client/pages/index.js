import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
    console.log(currentUser);

    return currentUser? '已登录': '未登录'
};

LandingPage.getInitialProps = async context => {

    console.log('I am on the server.');
    const client = buildClient(context);
    const { data } = await client.get('/api/users/currentuser');
    return data;
};

export default LandingPage;