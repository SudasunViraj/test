// SalesReportDetails.js

import React from 'react';

const SalesReportDetails = ({ data }) => {
  return (
    <div>
      <h2>Sales Report Details</h2>
      <ul>
        {data.map((record) => (
          <li key={record.id}>
            <strong>Order ID:</strong> {record.orderId} | 
            <strong> Order Date:</strong> {record.orderDate} | 
            <strong> Customer Name:</strong> {record.customerName} | 
            <strong> Payment Method:</strong> {record.paymentMethod} | 
            <strong> Amount:</strong> {record.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesReportDetails;
