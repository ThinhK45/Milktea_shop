import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Tên</th>
                    <th scope="col">Email</th>
                    <th scope="col">Tổng</th>
                    <th scope="col">Thanh toán</th>
                    <th scope="col">Ngày</th>
                    <th>Trạng thái</th>
                    <th scope="col" className="text-end">
                        Hành động
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <b>Trà sữa mật ong</b>
                    </td>
                    <td>admin@gmail.com</td>
                    <td>456 VNĐ</td>
                    <td>
                        <span className="badge rounded-pill alert-success">
                            Thanh toán vào 23:20 AM
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
