import axios from "axios";

const LandingPage = ({ currentUser }) => {
    console.log(currentUser);
    
    return <h1>landing page.</h1>
};

LandingPage.getInitialProps = async () => {
    console.log('I am on the server.');
    const response  = await axios.get('/api/users/currentuser').catch((err) => {
        console.log(err.message);
    });
    return response.data;
};

export default LandingPage;