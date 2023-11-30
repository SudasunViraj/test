// EmployeeReport.jsx

import React from 'react';

const EmployeeReport = ({ reportData, onCloseReport }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Employee Details Report</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Status</th>
            <th>Usergroups</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((employee) => (
            <tr key={employee.username}>
              <td>{employee.username}</td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.status}</td>
              <td>{employee.usergroups}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-secondary" onClick={() => onCloseReport()}>
        Close Report
      </button>
    </div>
  );
};

export default EmployeeReport;
