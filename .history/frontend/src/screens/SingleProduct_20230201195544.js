import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Rating from './../components/homeComponents/Rating';
import Message from './../components/LoadingError/Error';
import products from '../data/Products';

const SingleProduct = React({ match }) => {
    const product = products.find((p) => p._id === match.params.id);
    return (
        <>
            <Header />
            <div className="container single-product">
                <div className="row">
                    <div className="col-md-6">
                        <div className="single-image">
                            <img src={product.image}  alt={product.name}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}