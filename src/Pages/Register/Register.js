import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo3.png'

const Register = () => {
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
                                    <h2>Register</h2>
                                </div>
                                <div className="row">
                                    <form className="form-group">
                                        <div className="row">
                                            <input type="text" name="name" className="form__input" placeholder="Name" required />
                                        </div>
                                        <div className="row">
                                            <input type="text" name="email" className="form__input" placeholder="Email" required />
                                        </div>
                                        <div className="row">
                                            <span className="fa fa-lock"></span>
                                            <input type="password" name="password" className="form__input" placeholder="Password" required />
                                        </div>
                                        <div className="row">
                                            <button className='btn-btn' type='submit'>Register</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="row">
                                    <p>Already have an account? <Link className='text-pink-500' to="/register">PleaseLogin</Link></p>
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