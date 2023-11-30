import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManagerDetailsReport = () => {
  const [managerData, setManagerData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Sample data
  const dummyManagerData = [
    {
      id: 1,
      username: 'manager1',
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1980-05-15',
      joinedDate: '2022-01-01',
      status: 'Active',
      userGroups: 'Managers'
    },
    {
      id: 2,
      username: 'manager2',
      firstName: 'Jane',
      lastName: 'Smith',
      dateOfBirth: '1975-08-22',
      joinedDate: '2022-02-15',
      status: 'Inactive',
      userGroups: 'Managers'
    },
    // Add more manager data as needed
    {
      id: 3,
      username: 'manager3',
      firstName: 'Rajitha',
      lastName: 'Fernando',
      dateOfBirth: '1982-11-10',
      joinedDate: '2022-03-05',
      status: 'Active',
      userGroups: 'Managers'
    },
    {
      id: 4,
      username: 'manager4',
      firstName: 'Kamal',
      lastName: 'Perera',
      dateOfBirth: '1978-07-18',
      joinedDate: '2022-04-20',
      status: 'Active',
      userGroups: 'Managers'
    },
    {
      id: 5,
      username: 'manager5',
      firstName: 'Dilhani',
      lastName: 'Silva',
      dateOfBirth: '1985-02-25',
      joinedDate: '2022-05-15',
      status: 'Inactive',
      userGroups: 'Managers'
    },
    {
      id: 6,
      username: 'manager6',
      firstName: 'Sanjeewa',
      lastName: 'Jayasinghe',
      dateOfBirth: '1976-09-08',
      joinedDate: '2022-06-10',
      status: 'Active',
      userGroups: 'Managers'
    },
    {
      id: 7,
      username: 'manager7',
      firstName: 'Nishanthi',
      lastName: 'Gunaratne',
      dateOfBirth: '1984-04-12',
      joinedDate: '2022-07-05',
      status: 'Inactive',
      userGroups: 'Managers'
    },
    {
      id: 8,
      username: 'manager8',
      firstName: 'Chaminda',
      lastName: 'Peris',
      dateOfBirth: '1979-12-01',
      joinedDate: '2022-08-20',
      status: 'Active',
      userGroups: 'Managers'
    },
    {
      id: 9,
      username: 'manager9',
      firstName: 'Shanthi',
      lastName: 'Kumarasinghe',
      dateOfBirth: '1983-06-28',
      joinedDate: '2022-09-15',
      status: 'Inactive',
      userGroups: 'Managers'
    },
    {
      id: 10,
      username: 'manager10',
      firstName: 'Anuradha',
      lastName: 'Rajapakse',
      dateOfBirth: '1981-03-17',
      joinedDate: '2022-10-10',
      status: 'Active',
      userGroups: 'Managers'
    },
    // Add more manager data as needed
  ];

  useEffect(() => {
    // Filter manager data based on the selected date range
    const filteredData = dummyManagerData.filter(manager => {
      const joinedDate = new Date(manager.joinedDate);
      const startDateObj = startDate ? new Date(startDate) : null;
      const endDateObj = endDate ? new Date(endDate) : null;

      return (!startDateObj || joinedDate >= startDateObj) && (!endDateObj || joinedDate <= endDateObj);
    });

    setManagerData(filteredData);
  }, [startDate, endDate]);

  return (
    <div className="p-3 mt-4 mr-4 container" style={{ border: '1px solid #b4b4b4', width: '800px' }}>
      <h2>Manager Details Report</h2>
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
            <th scope="col" style={{ width: '15%' }}>Username</th>
            <th scope="col" style={{ width: '15%' }}>First Name</th>
            <th scope="col" style={{ width: '15%' }}>Last Name</th>
            <th scope="col" style={{ width: '15%' }}>Date of Birth</th>
            <th scope="col" style={{ width: '15%' }}>Joined Date</th>
            <th scope="col" style={{ width: '10%' }}>Status</th>
            <th scope="col" style={{ width: '10%' }}>User Groups</th>
          </tr>
        </thead>
        <tbody>
          {managerData.map((manager) => (
            <tr key={manager.id}>
              <th scope="row">{manager.id}</th>
              <td>{manager.username}</td>
              <td>{manager.firstName}</td>
              <td>{manager.lastName}</td>
              <td>{manager.dateOfBirth}</td>
              <td>{manager.joinedDate}</td>
              <td>{manager.status}</td>
              <td>{manager.userGroups}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerDetailsReport;
