import { useEffect, useState } from 'react';
import Employee from './Employee';

function EmployeeList(){
	const [employees, setEmployees] = useState([
		{
			name: "Yazeen Jasim",
			email: "test@email.com",
			phone: "0700000000",
			skills: "React, JS, C++, Java, Python, GCP",
			avatar: "https://i.imgur.com/t9HFQvX.png",
		},
		{
			name: "Geralt of Rivia",
			email: "test@email.com",
			phone: "0700000000",
			skills: "Angular, CSS, HTML, JS",
			avatar: "https://i.imgur.com/Q9qFt3m.png"
		},
		{
			name: "Yennefer of Vengerberg",
			email: "test@email.com",
			phone: "0700000000",
			skills: "Pyromancy, bloodMagic, hotAsHell",
			avatar: "https://i.imgur.com/ebHfuth.png"
		}]);

	function handleAddNewEmp(){
		setEmployees((prevState)=> {
			return [
				...prevState,
				{
				name: "Triss Merigold", 
				email: "test@email.com", 
				phone: "0700000000", 
				skills: "Lunarstorm, ICQ",
				avatar: "https://i.imgur.com/TUhCrsY.png"
				}
			];
		});
	}

	return (
		<div>
			<h3>EmployeeList</h3>
			<button onClick={handleAddNewEmp} className="button">Add Employee</button>
			{employees.map((employee) => (
				<Employee EmployeeData={employee} />
			))}
		</div>
	); 
}

export default EmployeeList;