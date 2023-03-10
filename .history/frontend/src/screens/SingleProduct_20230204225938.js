import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Rating from './../components/homeComponents/Rating';
import Message from './../components/LoadingError/Error';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../Redux/Actions/ProductActions';
import Loading from './../components/LoadingError/Loading.js';

const SingleProduct = ({ history, match }) => {
    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const productId = match.params.id;
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        dispatch(listProductDetails(productId));
    }, [dispatch, productId]);

    const AddToCartHandle = (e) => {
        e.preventDefault();
        history.push(`/cart/${productId}?qty=${qty}`);
    };
    return (
        <>
            <Header />
            <div className="container single-product">
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                ) : (
                    <>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="single-image">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product-dtl">
                                    <div className="product-info">
                                        <div className="product-name">
                                            {product.name}
                                        </div>
                                    </div>
                                    <p>{product.description}</p>
                                    <div className="product-count col-lg-7">
                                        <div className="flex-box d-flex justify-content-between align-items-center">
                                            <h6>Gi??</h6>
                                            <span>${product.price}</span>
                                        </div>
                                        <div className="flex-box d-flex justify-content-between align-items-center">
                                            <h6>Tr???ng th??i</h6>
                                            {product.countInStock > 0 ? (
                                                <span>C??n h??ng</span>
                                            ) : (
                                                <span>H???t h??ng</span>
                                            )}
                                        </div>
                                        <div className="flex-box d-flex justify-content-between align-items-center">
                                            <h6>????nh gi??</h6>
                                            <Rating
                                                value={product.rating}
                                                text={`${product.numReviews} ????nh gi??`}
                                            />
                                        </div>
                                        {product.countInStock > 0 ? (
                                            <>
                                                <div className="flex-box d-flex justify-content-between align-items-center">
                                                    <h6>S??? l?????ng</h6>
                                                    <select
                                                        value={qty}
                                                        onChange={(e) =>
                                                            setQty(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        {[
                                                            ...Array(
                                                                product.countInStock
                                                            ).keys(),
                                                        ].map((x) => (
                                                            <option
                                                                key={x + 1}
                                                                value={x + 1}
                                                            >
                                                                {x + 1}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <button
                                                    onClick={AddToCartHandle}
                                                    className="round-black-btn"
                                                >
                                                    Th??m v??o gi???
                                                </button>
                                            </>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RATING */}
                        <div className="row my-5">
                            <div className="col-md-6">
                                <h6 className="mb-3">????nh gi??</h6>
                                <Message variant={'alert-info mt-3'}>
                                    Kh??ng c?? ????nh gi??
                                </Message>
                                <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                                    <strong>Admin</strong>
                                    <Rating />
                                    <span>Jan 12 2022</span>
                                    <div className="alert alert-info mt-3">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Omnis repellat, non
                                        alias doloremque ut voluptatum nisi,
                                        mollitia aliquid repellendus, veniam
                                        quibusdam sint amet quisquam cumque esse
                                        quam nihil id! Soluta? l
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h6>????nh gi?? c???a b???n</h6>
                                <div className="my-4"></div>
                                <form>
                                    <div className="my-4">
                                        <strong>X???p h???ng</strong>
                                        <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                                            <option value="">Ch???n...</option>
                                            <option value="1">
                                                1 - R???t t???
                                            </option>
                                            <option value="2">2 - T???</option>
                                            <option value="3">
                                                3 - T???m ???????c
                                            </option>
                                            <option value="4">4 - T???t</option>
                                            <option value="5">
                                                5 - R???t t???t
                                            </option>
                                        </select>
                                    </div>
                                    <div className="my-4">
                                        <strong>B??nh lu???n</strong>
                                        <textarea
                                            row="3"
                                            className="col-12 bg-light p-3 mt-2 border-0 rounded"
                                        ></textarea>
                                    </div>
                                    <div className="my-3">
                                        <button className="col-12 bg-black border-0 p-3 rounded text-white">
                                            ?????ng ??
                                        </button>
                                    </div>
                                </form>
                                <div className="my-3">
                                    <Message variant={'alert-warning'}>
                                        Vui l??ng{' '}
                                        <Link to="/login">
                                            "<strong>????ng nh???p</strong>"
                                        </Link>{' '}
                                        ????? vi???t b??nh lu???n{' '}
                                    </Message>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
export default SingleProduct;
