// SalesReport.js
import React from 'react';

const SalesReport = ({ salesReport }) => {
  return (
    <div>
      <h1>Sales Report</h1>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Order Date</th>
            <th>Customer Name</th>
            <th>Order ID</th>
            <th>Payment Method</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {salesReport.map((item, index) => (
            <tr key={item.id}>
              <td>{item.orderDate}</td>
              <td>{item.customerName}</td>
              <td>{item.orderId}</td>
              <td>{item.paymentMethod}</td>
              <td>${item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <strong>Total Sales: ${calculateTotalSales(salesReport)}</strong>
      </div>
    </div>
  );
};

function calculateTotalSales(salesReport) {
  return salesReport.reduce((total, item) => total + parseFloat(item.amount), 0).toFixed(2);
}

export default SalesReport;
