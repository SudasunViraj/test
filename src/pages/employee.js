import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faLock, faKey } from '@fortawesome/free-solid-svg-icons';


// function employees(){

// }

const pageStyle = {
  backgroundColor: 'yellow',
   // Ensure the page covers the entire viewport height
  display: 'flex',
  flexDirection: 'column',
}

const Employee = () => {
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
  const [newEmployee, setNewEmployee] = useState({
    username: '',
    firstname: '',
    status: 'Active',
    usergroups: 'Group A',
  });

  const handleDelete = (username) => {
    
  };

  const handleEdit = (username) => {
    
    console.log(`Editing employee with username: ${username}`);
  };

  const handleLock = (username) => {
    
    console.log(`Locking employee with username: ${username}`);
  };

  const handleKey = (username) => {
    
    console.log(`Suspend employee with username: ${username}`);
  };
  const handleAddEmployee = () => {
    setEmployees([...employees, newEmployee]);
    setShowModal(false);
    setNewEmployee({
      username: '',
      firstname: '',
      status: 'Active',
      usergroups: 'Group A',
    });
  };

  useEffect(() => {
    document.body.classList.add('page-background');
    
    return () => {
      document.body.classList.remove('page-background');
    };
  }, []);

  return (
    <div style={{ paddingTop: '25px', backgroundColor: 'antiquewhite', height: '100vh' ,paddingLeft:'300px',paddingRight:'300px'}}>

      <h1>Manage Employee</h1>

      {/* Add Employee Button */}
      <div className="text-end mb-3">
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Add Employee
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
            <th className="border">Actions</th>
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
                  className="btn btn-danger mx-2"
                  onClick={() => handleDelete(employee.username)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => handleEdit(employee.username)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  className="btn btn-warning mx-2"
                  onClick={() => handleLock(employee.username)}
                >
                  <FontAwesomeIcon icon={faLock} />
                </button>
                <button
                  className="btn btn-warning mx-2"
                  onClick={() => handleKey(employee.username)}
                >
                  <FontAwesomeIcon icon={faKey} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Employee Modal */}
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
                <label htmlFor="username" className="form-label">
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
                />
              </div>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
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
                />
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <select
                  className="form-select"
                  id="status"
                  value={newEmployee.status}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, status: e.target.value })
                  }
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="usergroups" className="form-label">
                  Usergroups
                </label>
                <select
                  className="form-select"
                  id="usergroups"
                  value={newEmployee.usergroups}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, usergroups: e.target.value })
                  }
                >
                  <option value="Group A">Group A</option>
                  <option value="Group B">Group B</option>
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
