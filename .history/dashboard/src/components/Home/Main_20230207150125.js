import React from 'react';
import TopTotal from './TopTotal';
import LatestOrder from './LatestOrder';
import SaleStatistics from './SalesStatistics';
import ProductsStatistics from './ProductsStatistics';
import { useSelector } from 'react-redux';

const Main = () => {
    const orderList = useSelector((state) => state.orderList);
    const { loading, error, orders } = orderList;
    const productList = useSelector((state) => state.productList);
    const { products } = productList;
    return (
        <>
            <section className="content-main">
                <div className="content-header">
                    <h2 className="content-title">Bảng điều khiển</h2>
                </div>
                <TopTotal orders={orders} />
                <div className="row">
                    <SaleStatistics />
                    <ProductsStatistics />
                </div>

                <div className="card mb-4 shadow-sm">
                    <LatestOrder />
                </div>
            </section>
        </>
    );
};

export default Main;
