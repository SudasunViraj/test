import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DailyOrdersSummaryReport = () => {
  const [salesData, setSalesData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const dummyData = [
    {
      id: 6,
      orderId: 'ORD789',
      orderDate: '2023-12-10',
      customerName: 'Samantha Perera',
      paymentMethod: 'Credit Card',
      amount: '8500',
    },
    {
      id: 7,
      orderId: 'ORD654',
      orderDate: '2023-12-20',
      customerName: 'Nimal Silva',
      paymentMethod: 'Cash',
      amount: '3200'
    },
    {
      id: 8,
      orderId: 'ORD147',
      orderDate: '2023-11-25',
      customerName: 'Kamal Fernando',
      paymentMethod: 'Online Banking',
      amount: '5500',
    },
    {
      id: 9,
      orderId: 'ORD258',
      orderDate: '2023-10-08',
      customerName: 'Shanthi Rajapakse',
      paymentMethod: 'Credit Card',
      amount: '4500',
    },
    {
      id: 10,
      orderId: 'ORD369',
      orderDate: '2023-09-15',
      customerName: 'Dinesh Weerasinghe',
      paymentMethod: 'Cash',
      amount: '2800',
    },
    {
      id: 11,
      orderId: 'ORD471',
      orderDate: '2023-08-02',
      customerName: 'Anula Bandara',
      paymentMethod: 'Online Banking',
      amount: '7200',
    },
    {
      id: 12,
      orderId: 'ORD582',
      orderDate: '2023-07-18',
      customerName: 'Pradeepa Gunaratne',
      paymentMethod: 'Credit Card',
      amount: '6300',
    },
    {
      id: 13,
      orderId: 'ORD693',
      orderDate: '2023-06-05',
      customerName: 'Rajitha Peris',
      paymentMethod: 'Cash',
      amount: '4000',
    },
    {
      id: 14,
      orderId: 'ORD804',
      orderDate: '2023-05-12',
      customerName: 'Malathi Senanayake',
      paymentMethod: 'Online Banking',
      amount: '9000',
    },
    {
      id: 15,
      orderId: 'ORD915',
      orderDate: '2023-04-27',
      customerName: 'Sunil Kumarasinghe',
      paymentMethod: 'Credit Card',
      amount: '6700',
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://your-domain.com/path-to/get_sales.php`);
        const data = await response.json();
        setSalesData(data);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };

    fetchData();
  }, []); 

  const filteredSalesData = salesData.filter(order => {
    const orderDate = new Date(order.orderDate);
    const startDateObj = startDate ? new Date(startDate) : null;
    const endDateObj = endDate ? new Date(endDate) : null;

    return (!startDateObj || orderDate >= startDateObj) && (!endDateObj || orderDate <= endDateObj);
  });

  const filteredDummyData = dummyData.filter(order => {
    const orderDate = new Date(order.orderDate);
    const startDateObj = startDate ? new Date(startDate) : null;
    const endDateObj = endDate ? new Date(endDate) : null;

    return (!startDateObj || orderDate >= startDateObj) && (!endDateObj || orderDate <= endDateObj);
  });

  const combinedData = [...filteredDummyData, ...filteredSalesData];

  return (
    <div className="p-3 mt-4 mr-4 container" style={{ border: '1px solid #b4b4b4', width: '800px' }}>
      <h2>Sales Summary Report</h2>
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
            <th scope="col" style={{ width: '5%' }}>ID</th>
            <th scope="col" style={{ width: '15%' }}>Order ID</th>
            <th scope="col" style={{ width: '15%' }}>Order Date</th>
            <th scope="col" style={{ width: '20%' }}>Customer Name</th>
            <th scope="col" style={{ width: '15%' }}>Payment Method</th>
            <th scope="col" style={{ width: '15%' }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {combinedData.map((order) => (
            <tr key={order.id}>
              <th scope="row">{order.id}</th>
              <td>{order.orderId}</td>
              <td>{order.orderDate}</td>
              <td>{order.customerName}</td>
              <td>{order.paymentMethod}</td>
              <td>{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyOrdersSummaryReport;
