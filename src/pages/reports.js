import React from 'react';
import { Link } from 'react-router-dom';

const Report = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          {/* Heading */}
          <h2>Blue Hills Reports</h2>
        </div>

        <div className="col-md-6 mx-auto">
          {/* First Report Card */}
          <div className="card" style={{ backgroundColor: '#8BC34A', marginBottom: '20px' }}>
            <div className="card-body">
              <h5 className="card-title">Sales Report</h5>
              <p className="card-text">View Sales Report Here</p>
              <Link to="/dailysalesreport" className="btn btn-primary">Go to Sales Report</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 mx-auto">
          {/* Second Report Card */}
          <div className="card" style={{ backgroundColor: '#8BC34A', marginBottom: '20px' }}>
            <div className="card-body">
              <h5 className="card-title">Employee Report</h5>
              <p className="card-text">View Employee Report Here</p>
              <Link to="/employeedetailsreport" className="btn btn-primary">Go to Employee Report</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 mx-auto">
          {/* Third Report Card */}
          <div className="card" style={{ backgroundColor: '#8BC34A', marginBottom: '20px' }}>
            <div className="card-body">
              <h5 className="card-title">Order Report</h5>
              <p className="card-text">View Order Report Here</p>
              <Link to="/orderdetailsreport" className="btn btn-primary">Go to Order Report</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
