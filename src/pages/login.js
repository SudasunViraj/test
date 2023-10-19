import React, { useState } from 'react';
import image from '../images/Blue Hills Tea.png';
import { useNavigate } from 'react-router-dom';
import loginpagebackground from '../images/loginpagebackground.jpeg'
import employeebackground from '../images/employeebackground.jpeg';



function Login() {

  const backgroundImageStyle = {
    backgroundImage: `url(${loginpagebackground})`, // Set the background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundImageStyle}>

      <div style={{ backgroundColor: 'rgba(241, 248, 233, 0.8)', flex: '1' }}>
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const history = useNavigate();


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate user credentials
    if (email === 'gayathriii99@gmail.com' && password === '12345') {
      navigate('/home');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }


  const formStyle = {
    backgroundColor: 'rgb(139, 195, 74)',
    padding: '30px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={formStyle}>
            <div className="card-header">
              <h3>Admin Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label" >Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label" style={{ textAlign: 'left' }}>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={buttonStyle}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
