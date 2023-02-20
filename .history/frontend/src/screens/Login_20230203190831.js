import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';

const Login = () => {
    window.scrollTo(0, 0);

    const [email, setEmail] = useState('');
    return (
        <>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <form className="Login col-md-8 col-lg-4 col-11">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="mb-3">
                        Đăng nhập
                    </button>
                    <p>
                        <Link to={'/register'}>Tạo tài khoản</Link>
                    </p>
                </form>
            </div>
        </>
    );
};
export default Login;
