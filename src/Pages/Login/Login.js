import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo3.png'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',

    });

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',

    });

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let errorItem;

    if (errors || error) {
        errorItem = <p className='text-red-500'>{error?.message}</p>
    };


    const handleEmailChange = event => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        const validEmail = emailRegex.test(event.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, emailError: "" })
        } else {
            setErrors({ ...errors, emailError: "Invalid Email" })
            setUserInfo({ ...userInfo, email: "" });
        }
    };
    const handlePasswordChange = event => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(event.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setErrors({ ...errors, passwordError: '' });
        }
        else {
            setErrors({ ...errors, passwordError: 'Minimum 6 characters' });
            setUserInfo({ ...userInfo, password: '' })
        }
    };

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
        }

    }, [user, googleUser]);

    const handleSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    };

    const handlePasswordReset = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast.success("Email Sent")
        }
        else {
            toast.danger("Please enter email")
        }
    }

    return (
        <div>
            <div>
                <div className='bg-gradient-to-r from-pink-500 to-black pb-10 mt-2'></div>

                <div className="container-fluid mt-20">
                    <div className="row main-content bg-success text-center mx-auto">
                        <div className="col-md-4 text-center company__info">
                            <h4 className="company_title">
                                <img style={{ height: '200px' }} src={logo} alt="" />
                            </h4>
                        </div>
                        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                            <div className="container-fluid">
                                <div className="row">
                                    <h2>Login</h2>
                                </div>
                                <div className="row">
                                    <form onSubmit={handleSubmit} action="/form" >
                                        <div className="row">
                                            <input onChange={handleEmailChange} type="text" className="form__input" placeholder="Email" required />
                                        </div>
                                        {
                                            errors?.emailError && <p className='text-red-400'>{errors.emailError}</p>
                                        }
                                        <div className="row">
                                            <input onChange={handlePasswordChange} type="password" name="password" className="form__input" placeholder="Password" required />
                                        </div>
                                        {
                                            errors?.passwordError && <p className='text-red-400'>{errors.passwordError}</p>
                                        }
                                        <div className='row'>
                                            <p>Forget Password?<button onClick={handlePasswordReset} className='btn btn-link text-decoration-none text-pink-600'>Password Reset</button></p>
                                        </div>

                                        {errorItem}
                                        <div className="row">
                                            <button className='btn-btn' type='submit'>Login</button>
                                        </div>
                                        <div className='row'>
                                            <button onClick={() => signInWithGoogle()} className='btn-btn'>Login with Google</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="row">
                                    <p>Already have an account? <Link className='text-pink-500' to="/register">PleaseRegister</Link></p>
                                    <ToastContainer></ToastContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;