import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';

const PaymentScreen = () => {
    window.scrollTo(0, 0);

    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Header />
            <div className="container d-flex justify-content-center align-items-center login-center">
                <form
                    className="Login2 col-md-8 col-lg-4 col-11"
                    onSubmit={submitHandler}
                >
                    <h6>Chọn phương thức thanh toán</h6>
                    <div className="payment-container">
                        <div className="radio-container">
                            <input
                                className="form-check-input"
                                type="radio"
                                value="PayPal"
                            />
                            <label className="form-check-label">
                                PayPal hoặc thẻ tín dụng{' '}
                            </label>
                        </div>
                    </div>
                    <button type="submit">
                        <Link to="/placeorder" className="text-white">
                            Tiếp tục
                        </Link>
                    </button>
                </form>
            </div>
        </>
    );
};
export default PaymentScreen;
