import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

import React, { useEffect } from 'react';
import useToken from '../../hooks/useToken';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);


    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    useEffect(() => {
        if (error) {
            toast(error?.message)
        }
    }, [error]);

    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='btn-btn'>Login with Google</button>

            <ToastContainer></ToastContainer>
        </div>
    );
};


export default GoogleLogin;