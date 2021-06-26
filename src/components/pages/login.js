import React from 'react';
import '../../App.css';
import '../../login_style.css'
// import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
export default function login() {
    return (
        <>

            <div className="login-page">
                <div className="form">

                    <form>
                        <lottie-player src="https://assets4.lottiefiles.com/datafiles/XRVoUu3IX4sGWtiC3MPpFnJvZNq7lVWDCa8LSqgS/profile.json" background="transparent" speed="1" style={{ "justifyContent": "center" }} loop autoplay></lottie-player>
                        <input type="text" placeholder="&#xf007;  username" />
                        <input type="password" id="password" placeholder="&#xf023;  password" />
                        <i className="fas fa-eye" onclick="show()"></i>
                        <br />
                        <br />
                        <button>LOGIN</button>
                        <p className="message"></p>
                    </form>


                    <form className="login-form">

                        <Link
                            to='/'
                            className='nav-links-mobile'

                        >
                            Log in
                          </Link>

                        {/* <button type="button" onclick="/">SIGN UP</button> */}
                    </form>
                </div>
            </div>

        </>

    );
}
