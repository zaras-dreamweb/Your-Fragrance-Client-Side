import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo3.png'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import useToken from '../../hooks/useToken';


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
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token] = useToken(user);



    if (token) {
        navigate(from, { replace: true });
    }



    if (error) {
        toast('Please Register First');
    }


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


    const handleSubmit = async event => {
        event.preventDefault();
        const email = userInfo.email;
        const password = userInfo.password;

        await signInWithEmailAndPassword(email, password);
    };

    const handlePasswordReset = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast.success("Email Sent");
        }
    }

    return (
        <div>
            <div>

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
                                        <div className="row">
                                            <button className='btn-btn' type='submit'>Login</button>
                                        </div>
                                        <div className='row'>
                                            <GoogleLogin></GoogleLogin>
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