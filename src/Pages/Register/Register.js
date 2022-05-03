import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo3.png'
import './Register.css'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Register = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
    });

    const [
        createUserWithEmailAndPassword,
        user,

        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);

    let errorItem;

    if (errors || error || googleError) {
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

    const handleConfirmPasswordChange = event => {
        if (userInfo.password === event.target.value) {
            setUserInfo({ ...userInfo, confirmPassword: event.target.value });
            setErrors({ ...errors, confirmPasswordError: "" })
        }
        else {
            setErrors({ ...errors, confirmPasswordError: 'Passwords did not match' });
            setUserInfo({ ...userInfo, confirmPassword: "" });
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    };
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
        }

    }, [user, googleUser]);



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
                                    <h2>Register</h2>
                                </div>
                                <div className="row">
                                    <form onSubmit={handleSubmit} >
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
                                        <div className="row">
                                            <input onChange={handleConfirmPasswordChange} type="password" name="password" className="form__input" placeholder="Confirm Password" required />
                                        </div>
                                        {
                                            errors?.confirmPasswordError && <p className='text-red-400'>{errors.confirmPasswordError}</p>
                                        }
                                        {errorItem}
                                        <div className="row">
                                            <button className='btn-btn' type='submit'>Register</button>
                                        </div>
                                        <div className='row'>
                                            <button onClick={() => signInWithGoogle()} className='btn-btn'>Register with Google</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="row">
                                    <p>Already have an account? <Link className='text-pink-500' to="/login">PleaseLogin</Link></p>
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