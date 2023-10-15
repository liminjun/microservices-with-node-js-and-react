import { useState } from "react";
import axios from "axios";
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default () => {
    const [email, setEmail] = useState('');
    const [password,setPassword]  = useState('');

    const { doRequest, errors } = useRequest({
        url: 'http://localhost:3000/auth-api/api/users/signin',
        method: 'post',
        body: {
            email, password
        },
        onSuccess: (response) => {
            console.log(response);
            Router.push('/');
        }
    })

    const onSubmit = async (event) => {
        event.preventDefault();
        await doRequest();
        

        console.log(email, password);
        // try {
        //     const response = await axios.post('http://localhost:4000/api/users/signup', {
        //     email, password
        // });
        // console.log(response.data)
        // } catch (err) {
        //     // console.log(err.response.data)
        //     setErros(err.response.data.errors);
        // }
        
    } 

    return (
        <form onSubmit={onSubmit}>
            <h1>登录</h1>
            <div className="form-group">
                <label>邮箱:</label>
                <input value={email} onChange={e=>setEmail(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>密码:</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
            </div>
            { errors }
            <button type="submit" className="btn btn-primary">登录</button>
        </form>
    )
};