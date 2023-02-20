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
                {/* 3 */}

                <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                    <div className="row">
                        <div className="col-md-4 center">
                            <div className="alert-success order-box">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                        </div>
                        <div className="col-md-8 center">
                            <h5>
                                <strong>Giao hàng đến</strong>
                            </h5>
                            <p>Địa chỉ: 3/2 Hưng Lợi, Ninh Kiều, Cần Thơ</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row order-products justify-content-between">
                <div className="col-lg-8">
                    {/* <Message variant="alert-info mt-5">Giỏ hàng trống</Message> */}
                    <div className="order-product row">
                        <div className="col-md-3 col-6">
                            <img src="/images/8.png" alt="product" />
                        </div>
                        <div className="col-md-5 col-6 d-flex align-items-center">
                            <Link to={'/'}>
                                <h6>Milktea</h6>
                            </Link>
                        </div>
                        <div className="mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center flex-column">
                            <h4>Số lượng</h4>
                            <h6>4</h6>
                        </div>
                        <div className="mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center flex-column">
                            <h4>Tổng</h4>
                            <h6>$456</h6>
                        </div>
                    </div>
                </div>
                {/* total */}
                <div className="col-lg-3 d-flex align-items-center flex-column mt-5 subtotal-order"></div>
            </div>
        </>
    );
};
