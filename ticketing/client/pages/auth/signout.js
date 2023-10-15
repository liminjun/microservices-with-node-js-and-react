import { useEffect } from "react";
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default () => {
    const { doRequest, errors } = useRequest({
        url: 'http://localhost:3000/auth-api/api/users/signout',
        method: 'post',
        body: {},
        onSuccess: () => {
            Router.push('/');
        }
    })

    useEffect(() => {
        doRequest();
    }, [])

    return <div>Signing you out...</div>
}