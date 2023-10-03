import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/Blue Hills Tea.png';

function LandingPage() {
  return (
    <div style={{ backgroundColor: '#F1F8E9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="container mt-3 text-center">
        <img className="image" src={image} alt="Blue Hills Tea" style={{ width: '100px', height: '100px', marginBottom: '40px' }} />
        <h1 style={{ marginBottom: '30px' }}>Welcome to Blue Hills Managers' Portal</h1>

        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card" style={{ backgroundColor: '#8BC34A', marginBottom: '20px' }}>
              <div className="card-body">
                <h5 className="card-title">Manage Employees</h5>
                <p className="card-text">You can manage your employees here.</p>
                <Link to="/employee" className="btn btn-primary">Go to Employee Management</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card" style={{ backgroundColor: '#8BC34A', marginBottom: '20px' }}>
              <div className="card-body">
                <h5 className="card-title">Manage Products</h5>
                <p className="card-text">You can manage your products here.</p>
                <Link to="/products" className="btn btn-primary">Go to Product Management</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card" style={{ backgroundColor: '#8BC34A', marginBottom: '20px' }}>
              <div className="card-body">
                <h5 className="card-title">Manage Suppliers</h5>
                <p className="card-text">You can manage your suppliers here.</p>
                <Link to="/suppliers" className="btn btn-primary">Go to Supplier Management</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card" style={{ backgroundColor: '#8BC34A', marginBottom: '20px' }}>
              <div className="card-body">
                <h5 className="card-title">Manage Sales</h5>
                <p className="card-text">You can manage your sales here.</p>
                <Link to="/sales" className="btn btn-primary">Go to Sales Management</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#795548', padding: '20px', textAlign: 'center', color: 'white', marginTop: 'auto' }}>
        &copy; 2023 Blue Hills Managers' Portal
      </footer>
    </div>
  );
}

export default LandingPage;
