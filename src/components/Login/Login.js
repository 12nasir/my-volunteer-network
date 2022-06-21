import React from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {googleSignIn} = useAuth() || {};
    const location = useLocation();
    let navigate = useNavigate();
    console.log('came from',location.state?.navigate. form)


    const handleGoogleSing = () =>{
        googleSignIn()
        .then(result =>{
            navigate(result.user)
        })
    } 
    return (
        <div>
            <h4>Please Login</h4>
            <button onClick={handleGoogleSing} className="btn btn-warning">Google Log in</button>
        </div>
    );
};

export default Login;