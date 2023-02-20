import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';

const PlaceOrderScreen = () => {
    window.scrollTo(0, 0);

    const placeOrderHandler = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Header />
            <div className="row order-detail">
                <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                    <div className="row">
                        <div className="col-md-4 center">
                            <div className="alert-success order-box">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <div className="col-md-8 center">
                            <h5>
                                <strong>Khách hàng</strong>
                            </h5>
                            <p>Admin</p>
                            <p>admin@example.com</p>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                    <div className="row">
                        <div className="col-md-4 center">
                            <div className="alert-success order-box">
                                <i className="fas fa-truck-moving"></i>
                            </div>
                        </div>
                        <div className="col-md-8 center">
                            <h5>
                                <strong>Thông tin đơn hàng</strong>
                            </h5>
                            <p>Vận chuyển: Ninh Kiều</p>
                            <p>Phương thức thanh toán: Paypal</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
