import 'bootstrap/dist/css/bootstrap.css';
import buildClient from "../api/build-client";
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
    return <div>
        <Header currentUser={currentUser}/>
        {/* <h1>Header {currentUser.email}</h1> */}
        <Component { ...pageProps}/>
    </div>
};

AppComponent.getInitialProps = async (appContext) => {
    const client = buildClient(appContext.ctx);
   console.log('运行中')
    const { data } = await client.get('/api/users/currentuser');
    debugger;
    let pageProps = {};
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }
    console.log(pageProps);
    return {
        pageProps,
        ...data
    }
};

export default AppComponent;