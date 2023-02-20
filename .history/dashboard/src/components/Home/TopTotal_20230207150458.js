import React from 'react';

const TopTotal = (props) => {
    const { orders, products } = props;
    let totalSale = 0;
    if (orders) {
        orders.map((order) =>
            order.isPaid === true
                ? (totalSale = totalSale + order.totalPrice)
                : null
        );
    }
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-primary">
                            <i className="text-primary fa-solid fa-sack-dollar"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Tổng doanh thu</h6>
                            <span>{totalSale} VNĐ</span>
                        </div>
                    </article>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-success">
                            <i className="text-success fa-solid fa-bag-shopping"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Tổng đơn hàng</h6>
                            <span>25</span>
                        </div>
                    </article>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card card-body mb-4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-warning">
                            <i className="text-warning fas fa-shopping-basket"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Tổng sản phẩm</h6>
                            <span>12</span>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default TopTotal;
