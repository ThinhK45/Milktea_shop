import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import Pagination from './pagination';
import products from '../../data/Products';

const ShopSection = () => {
    return (
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col-lg-12 col-md-12 article">
                        <div className="shopcontainer row">
                            {products.map((product) => (
                                <div
                                    className="shop col-lg-4 col-md-6 col-sm-6"
                                    key={product._id}
                                >
                                    <div className="border-product">
                                        <Link to={`/product/${product._id}`}>
                                            <div className="shopBack">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                >
                                                    {' '}
                                                </img>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
