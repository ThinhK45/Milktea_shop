import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createOrder } from '../Redux/Actions/OrderActions.js';
import Header from './../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import Message from './../components/LoadingError/Error.js';
import { ORDER_CREATE_REQUEST } from './../../../.history/frontend/src/Redux/Constants/OrderConstants_20230204151624';
const PlaceOrderScreen = ({ history }) => {
    window.scrollTo(0, 0);

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    // total price
    const addDecimals = (num) => {
        return Math.round((num * 100) / 100).toFixed(0);
    };
    cart.itemsPrice = addDecimals(
        cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );

    cart.shippingPrice = addDecimals(cart.itemsPrice > 0 ? 25000 : 0);

    cart.totalPrice =
        Number(cart.itemsPrice) + Number(cart.shippingPrice).toFixed(0);

    const orderCreate = useSelector((state) => state.orderCreate);
    const { order, success, error } = orderCreate;
    useEffect(() => {
        if (success) {
            history.push(`/order/${order._id}`);
            dispatch({
                type: ORDER_CREATE_REQUEST,
            });
        }
    }, [history, dispatch, success, order]);
    const placeOrderHandler = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Header />
            <div className="row order-detail">
                <div className="col-lg-4 col-sm-12 col-md-4 mb-lg-4 mb-5 mb-sm-0">
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
                            <p>{userInfo.name}</p>
                            <p>{userInfo.email}</p>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className="col-lg-4 col-sm-12 col-md-4 mb-lg-4 mb-5 mb-sm-0">
                    <div className="row">
                        <div className="col-md-4  center">
                            <div className="alert-success order-box">
                                <i className="fas fa-truck-moving"></i>
                            </div>
                        </div>
                        <div className="col-md-8 center">
                            <h5>
                                <strong>Thông tin đơn hàng</strong>
                            </h5>
                            <p>Vận chuyển: {cart.shippingAddress.address}</p>
                            <p>Phương thức thanh toán: {cart.paymentMethod}</p>
                        </div>
                    </div>
                </div>
                {/* 3 */}

                <div className="col-lg-4 col-sm-12 col-md-4 mb-lg-4 mb-5 mb-sm-0">
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
                            <p>Địa chỉ: {cart.shippingAddress.address}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row order-products justify-content-between">
                <div className="col-lg-8">
                    {cart.cartItems.length === 0 ? (
                        <Message variant="alert-info mt-5">
                            Giỏ hàng trống
                        </Message>
                    ) : (
                        <>
                            {cart.cartItems.map((item, index) => (
                                <div className="order-product row" key={index}>
                                    <div className="col-md-3 col-6">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="col-md-5 col-6 d-flex align-items-center">
                                        <Link to={`/products/${item.product}`}>
                                            <h6>{item.name}</h6>
                                        </Link>
                                    </div>
                                    <div className="mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center flex-column">
                                        <h4>Số lượng</h4>
                                        <h6>{item.qty}</h6>
                                    </div>
                                    <div className="mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center flex-column">
                                        <h4>Tổng</h4>
                                        <h6>{item.price} VNĐ</h6>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
                {/* total */}
                <div className="col-lg-3 d-flex align-items-center flex-column mt-5 subtotal-order">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Sản phẩm</strong>
                                </td>
                                <td>{cart.itemsPrice} VNĐ</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Vận chuyển</strong>
                                </td>
                                <td>{cart.shippingPrice} VNĐ</td>
                            </tr>
                            {/* <tr>
                                <td>
                                    <strong>Thuế</strong>
                                </td>
                                <td>$5</td>
                            </tr> */}
                            <tr>
                                <td>
                                    <strong>Tổng</strong>
                                </td>
                                <td>{cart.totalPrice} VNĐ</td>
                            </tr>
                        </tbody>
                    </table>
                    {cart.cartItems.length === 0 ? null : (
                        <button type="submit" onClick={placeOrderHandler}>
                            Đặt hàng
                        </button>
                    )}

                    {/*
                    <div className="my-3 col-12">
                    <Message variant="alert-danger">{error}</Message></div>
                     */}
                </div>
            </div>
        </>
    );
};
export default PlaceOrderScreen;
