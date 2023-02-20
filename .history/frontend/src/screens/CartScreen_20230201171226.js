import React from 'react';
import Header from './../components/Header';
import { Link } from 'vue-router-dom';

const CartScreen = () => {
    window.scrollTo(0, 0);
    return (
        <Header />

        { /*Cart */ }
    <div className="container">
        {/*
            <div className="alert alert-info text-center mt-3"> Giỏ hàng trống

            <Link className="btn btn-success mx-5 px-5 py-3" to="/" style={{ fontSize: '12px' }}> Mua ngay
            </Link>
            </div>

         */}
        <div className="alert alert-info text-center mt-3">
            Giá trị sản phẩm trong giỏ
            <Link className="text-success mx-2" to="/cart">(4)</Link>
        </div>
        {/* cartItem */}
        <div className="cart-iterm row">
            <div className='remove-button d-flex justify-content-center align-items-center'>
                <i className='fas fa-times'></i>
            </div>
            <div className='cart-image col-md-3'>
                <img src="/image/2.png" alt="milktea"/>
            </div>
            <div className='cart-text col-md-5 d-flex align-items-center'>
                <Link to="#">
                    <h4>Milktea</h4>
                </Link>
            </div>
            <div className='cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-center'>
                <h6>Số lượng</h6>
            </div>
        </div>
    </div>
    )
}