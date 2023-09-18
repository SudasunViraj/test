import React, { useState } from 'react';
import image from '../images/Blue Hills Tea.png';

function Login() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ backgroundColor: '#F1F8E9', flex: '1' }}>
        <div className="container mt-3 text-center">
          <img className="image" src={image} alt="Blue Hills Tea" style={{ marginBottom: '40px' }} />
          <h1 style={{ marginBottom: '60px' }}>Blue Hills Managers' Portal</h1>
          {/* Add the LoginForm component here */}
          <LoginForm />
        </div>
      </div>
      <footer style={{ backgroundColor: '#795548', padding: '20px', textAlign: 'center', color: 'black' }}>
        &copy; 2023 Blue Hills Managers' Portal
      </footer>
    </div>
  );
}

function LoginForm() {
  // State to manage form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  {/* Left-aligned Email Address form label */}
                  <label htmlFor="email" className="form-label left-aligned">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  {/* Center-aligned Password form label */}
                  <label htmlFor="password" className="form-label text-center">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
