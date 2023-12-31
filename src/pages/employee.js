import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faLock, faKey } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import { log } from 'react-modal/lib/helpers/ariaAppHider';
import employeebackground from '../images/employeebackground.png';

// function employees(){

// }

const pageStyle = {
  backgroundColor: 'yellow',
  display: 'flex',
  flexDirection: 'column',
}

const Employee = () => {


  const backgroundStyle = {
    backgroundImage: `url(${employeebackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    paddingTop: '25px',
    backgroundColor: 'antiquewhite',
    height: '100vh',
    paddingLeft: '300px',
    paddingRight: '300px',
  };

  const [employees, setEmployees] = useState([
    {
      username: 'user1',
      firstname: 'John',
      lastname: 'Doe',
      status: 'Active',
      usergroups: 'Group A',
    },
    {
      username: 'user2',
      firstname: 'Jane',
      lastname: 'Smith',
      status: 'Inactive',
      usergroups: 'Group B',
    },
    // Add more employee data as needed
  ]);

  const [showModal, setShowModal] = useState(false);

  const [showReport, setShowReport] = useState(false);
  const [reportData, setReportData] = useState([]);
   
  const handleGenerateReport = () => {
    
    const reportData = employees.map(employee => ({
      username: employee.username,
      firstname: employee.firstname,
      lastname: employee.lastname,
      status: employee.status,
      usergroups: employee.usergroups,
    }));

    setReportData(reportData);
    setShowReport(true);
  };

  const [newEmployee, setNewEmployee] = useState({
    username: '',
    firstname: '',
    lastname: '',
    status: 'Active',
    usergroups: 'Group A',
  });

  const [showReportModal, setShowReportModal] = useState(false);
  const handleCloseReportModal = () => {
    setShowReportModal(false);
  };


  const openEditModal = (username) => {
    const employeeToEdit = employees.find((employee) => employee.username === username);
      setShowModal(true);
  };

  // Function to handle the form submission for editing an employee
  const handleEditEmployee = () => {
    // Perform the edit operation (e.g., send a PUT request to update the employee on the server)
    // After successful update, update the local state if needed
    // Close the modal
    // Clear the editEmployee state
    // ...
    // Example:
    // fetch(`update_employee.php?username=${editEmployee.username}`, {
    //   method: 'PUT',
    //   body: JSON.stringify(editEmployee),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     // Update local state and close the modal
    //     // ...
    //     // Clear the editEmployee state
    //     setEditEmployee(null);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };


  const handleDelete = (username) => {
    // Filter out the employee to be deleted from the local state
    const updatedEmployees = employees.filter(
      (employee) => employee.username !== username
    );

    // Send a DELETE request to the PHP script to delete the employee from the database
    fetch(`delete_employee.php?username=${username}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response from the server
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    setEmployees(updatedEmployees); // Update the local state
  };

  const handleEdit = (username) => {

    console.log(`Editing employee with username: ${username}`);
  };

  const handleLock = (username) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.username === username) {
        const updatedEmployee = { ...employee, locked: !employee.locked };
        fetch(`update_employee.php?username=${username}&locked=${updatedEmployee.locked ? 1 : 0}`, {
          method: 'PUT',
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        return updatedEmployee;
      }
      return employee;
    });



    setEmployees(updatedEmployees);

    console.log(`Locking employee with username: ${username}`);
  };

  const handleKey = (username) => {

    console.log(`Suspend employee with username: ${username}`);
  };
  const handleAddEmployee = () => {

    console.log("Hi this is method")

    const employeeData = {
      username: newEmployee.username,
      firstname: newEmployee.firstname,
      lastname: newEmployee.lastname,
      status: newEmployee.status,
      usergroups: newEmployee.usergroups,
    };

    console.log("cdata",employeeData)

    fetch('http://localhost/project/add_employee.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    })
      .then((response) => response)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setEmployees([...employees, newEmployee]);
    setShowModal(false);
    setNewEmployee({
      username: '',
      firstname: '',
      lastname: '',
      status: 'Active',
      usergroups: 'Group A',
    });
  };
  useEffect(() => {
    fetch('http://localhost/project/get_employees.php')
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    document.body.classList.add('page-background');

    return () => {
      document.body.classList.remove('page-background');
    };
  }, []);

  return (
    <div style={{ paddingTop: '25px', backgroundColor: 'antiquewhite', height: '100vh', paddingLeft: '300px', paddingRight: '300px', ...backgroundStyle }}>

      <h1>Manage Employee</h1>


      {/* {/ Add Employee Button /} */}
      <div className="text-end mb-3">
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Add Employee
        </button>
        <button className="btn btn-secondary ms-2" onClick={handleGenerateReport}>
          Generate Employee Report
        </button>
      </div>



 
{/* Employee Table */}
<table className="table table-bordered">
  <thead>
    <tr>
      <th className="border">Username</th>
      <th className="border">Firstname</th>
      <th className="border">Lastname</th>
      <th className="border">Status</th>
      <th className="border">Usergroups</th>
      <th className="border">Actions</th> {/* Add Actions column header */}
    </tr>
  </thead>
  <tbody>
    {employees.map((employee) => (
      <tr key={employee.username}>
        <td className="border">{employee.username}</td>
        <td className="border">{employee.firstname}</td>
        <td className="border">{employee.lastname}</td>
        <td className="border">
          <button className="btn btn-success">{employee.status}</button>
        </td>
        <td className="border">
          <button className="btn btn-info">{employee.usergroups}</button>
        </td>
        <td className="border">
          <button
            className="btn btn-primary"
            onClick={() => openEditModal(employee.username)}
          >
            <FontAwesomeIcon icon={faEdit} /> {/* Edit icon */}
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>


      {/* {/ Edit Employee Modal /} */}
      <div
        className={`modal fade ${showModal ? 'show' : ''}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {'Add Employee'}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  setShowModal(false);
                }}
              ></button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                {/* {/ ... form fields and inputs (similar to Add Employee) ... /} */}
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={ handleAddEmployee}
              >
                 Add Employee
              </button>
            </div>
          </div>
        </div>
      </div>
      

      {/* {/ Add Employee Modal /} */}
      <div
        className={`modal fade ${showModal ? 'show' : ''}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Employee</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
              
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="username" className="form-label" style={{ textAlign: 'left' }}>
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={newEmployee.username}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, username: e.target.value })
                  }
                  style={{ textAlign: 'left' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label" style={{ textAlign: 'left' }}>
                  Firstname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  value={newEmployee.firstname}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, firstname: e.target.value })
                  }
                  style={{ textAlign: 'left' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label" style={{ textAlign: 'left' }}>
                  Lastname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  value={newEmployee.lastname}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, lastname: e.target.value })
                  }
                  style={{ textAlign: 'left' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label" style={{ textAlign: 'left' }}>
                  Status
                </label>
                <select
                  className="form-select"
                  id="status"
                  value={newEmployee.status}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, status: e.target.value })
                  }
                  style={{ textAlign: 'left' }}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="usergroups" className="form-label" style={{ textAlign: 'left' }}>
                  Usergroups
                </label>
                <select
                  className="form-select"
                  id="usergroups"
                  value={newEmployee.usergroups}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, usergroups: e.target.value })
                  }
                  style={{ textAlign: 'left' }}
                >
                  <option value="Manager">Manager</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Operator">Operator</option>

                </select>
              </div>
            </div>

            

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddEmployee}
              >
                Add Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Employee;
