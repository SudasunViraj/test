import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderDetailsReport = () => {
  const [orderData, setOrderData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Dummy data for testing
  const dummyOrderData = [
    {
      orderId: 'ORD001',
      customerName: 'Kasun Silva',
      numOfItems: 3,
      productId: 'PROD001',
      orderPlacedDate: '2023-10-01',
    },
    {
      orderId: 'ORD002',
      customerName: 'Sithara Gunawardena',
      numOfItems: 2,
      productId: 'PROD002',
      orderPlacedDate: '2023-10-05',
    },
    {
      orderId: 'ORD003',
      customerName: 'Dilani Perera',
      numOfItems: 5,
      productId: 'PROD003',
      orderPlacedDate: '2023-10-10',
    },
    {
      orderId: 'ORD004',
      customerName: 'Anuradha Fernando',
      numOfItems: 1,
      productId: 'PROD004',
      orderPlacedDate: '2023-10-15',
    },
    {
      orderId: 'ORD005',
      customerName: 'Tharindu Rajapaksa',
      numOfItems: 4,
      productId: 'PROD005',
      orderPlacedDate: '2023-10-20',
    },
    {
      orderId: 'ORD006',
      customerName: 'Madusha Jayasuriya',
      numOfItems: 2,
      productId: 'PROD006',
      orderPlacedDate: '2023-10-25',
    },
    {
      orderId: 'ORD007',
      customerName: 'Sanjaya Wijesinghe',
      numOfItems: 3,
      productId: 'PROD007',
      orderPlacedDate: '2023-10-30',
    },
    {
      orderId: 'ORD008',
      customerName: 'Chathura Perera',
      numOfItems: 1,
      productId: 'PROD008',
      orderPlacedDate: '2023-11-01',
    },
  ];

  useEffect(() => {
    // Fetch data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch('http://your-domain.com/path-to/get_orders.php');
        if (response.ok) {
          const fetchedOrderData = await response.json();
          setOrderData(fetchedOrderData);
        } else {
          console.error('Failed to fetch order data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  // Filter order data based on the selected date range
  useEffect(() => {
    const filteredData = dummyOrderData.filter(order => {
      const orderDate = new Date(order.orderPlacedDate);
      const startDateObj = startDate ? new Date(startDate) : null;
      const endDateObj = endDate ? new Date(endDate) : null;

      return (!startDateObj || orderDate >= startDateObj) && (!endDateObj || orderDate <= endDateObj);
    });

    setOrderData(filteredData);
  }, [startDate, endDate]);

  return (
    <div className="p-3 mt-4 mr-4 container" style={{ border: '1px solid #b4b4b4', width: '800px' }}>
      <h2>Order Details Report</h2>
      <div className="mb-3">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label htmlFor="endDate" className="ml-3">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{ width: '15%' }}>Order ID</th>
            <th scope="col" style={{ width: '25%' }}>Customer Name</th>
            <th scope="col" style={{ width: '15%' }}>No. of Items</th>
            <th scope="col" style={{ width: '15%' }}>Product ID</th>
            <th scope="col" style={{ width: '30%' }}>Order Placed Date</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.numOfItems}</td>
              <td>{order.productId}</td>
              <td>{order.orderPlacedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetailsReport;
