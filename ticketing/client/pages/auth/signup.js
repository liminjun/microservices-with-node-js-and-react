import { useState } from "react";
import axios from "axios";
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default () => {
    const [email, setEmail] = useState('');
    const [password,setPassword]  = useState('');

    const { doRequest, errors } = useRequest({
        url: 'https://tmnpma-dnrlyt-4000.preview.myide.io/api/users/signup',
        method: 'post',
        body: {
            email, password
        },
        onSuccess: () => {
            Router.push('/');
        }
    })

    const onSubmit = async (event) => {
        event.preventDefault();
        await doRequest();
        

        console.log(email, password);
        // try {
        //     const response = await axios.post('https://tmnpma-dnrlyt-4000.preview.myide.io/api/users/signup', {
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
            <h1>注册</h1>
            <div className="form-group">
                <label>邮箱:</label>
                <input value={email} onChange={e=>setEmail(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>密码:</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
            </div>
            { errors }
            <button type="submit" className="btn btn-primary">注册</button>
        </form>
    )
};