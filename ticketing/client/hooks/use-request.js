import axios from 'axios';
import { useState } from 'react';


export default ({ url, method, body, onSuccess}) => {
    const [errors, setErros] = useState(null);

    const doRequest = async () => {
        try {
            setErros(null);
            const response = await axios[method](url, body);
            if (onSuccess) {
                onSuccess(response.data);
            }
            return response.data;
        } catch (err) {
            setErros(
                <div className="alert alert-danger">
                    <h4>Ops...</h4>
                    <ul className="my-0">
                    {err.response.data.errors.map(err => <li key={err.message}>{err.message}</li>)}
                    </ul>
                    
                </div>
            )
        }
    };
    return { doRequest, errors };
}