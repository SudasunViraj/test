
import React from 'react';

const Sales = () => {
    const data = [
        {
            id: 1,
            orderId: 'ORD123',
            orderDate: '2023-10-01',
            channel: 'Online',
            orderType: 'Standard',
            paymentMethod: 'Credit Card',
            amount: '5000',
        },
        {
            id: 2,
            orderId: 'ORD124',
            orderDate: '2023-10-02',
            channel: 'In-Store',
            orderType: 'Express',
            paymentMethod: 'Cash',
            amount: '3500',
        },
        {
            id: 3,
            orderId: 'ORD125',
            orderDate: '2023-10-03',
            channel: 'Phone',
            orderType: 'Standard',
            paymentMethod: 'PayPal',
            amount: '6000',
        },
    ];


    return (
        <div style={{ paddingTop: '25px', backgroundColor: 'antiquewhite', height: '100vh', paddingLeft: '300px', paddingRight: '300px' }}>
            <h1>Sales Table</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ORDER ID</th>
                        <th scope="col">ORDER DATE</th>
                        <th scope="col">CHANNEL</th>
                        <th scope="col">ORDER TYPE</th>
                        <th scope="col">PAYMENT METHOD</th>
                        <th scope="col">AMOUNT(LKR)</th>
                        <th scope="col">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.orderId}</td>
                            <td>{item.orderDate}</td>
                            <td>{item.channel}</td>
                            <td>{item.orderType}</td>
                            <td>{item.paymentMethod}</td>
                            <td>{item.amount}</td>
                            <td>
                                {/* Add actions buttons or components here */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Sales;
