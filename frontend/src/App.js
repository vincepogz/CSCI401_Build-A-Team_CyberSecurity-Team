import React, {useState} from 'react';
import GameStart from "./modals/gameSystem";
import CompanyDashboard from './components/companyDashboard'
import EmployeeDashboard from './components/employeeDashboard';


function App() {

    const [modalShow, setModalShow] = useState(true);

    const [company, setCompany] = useState(
        {
            name: 'New Company',
            current_cash: 0,
            current_cost: 0,
            img: 'https://www.jjay.cuny.edu/sites/default/files/marketing_development/logos/JJC_Logo.png'
        }
    );

    const [employees, setEmployees] = useState([]);

    const [newHires, setNewHires] = useState([]);

    const [activeMissions, setActiveMissions] = useState([]);

    function addEmployee(employee) {
        employees.push(employee)
        newHires.pop(employee)
    };

    function setGame(newName, company) {
        setCompany({...company, name: newName})
    };

    async function getNewHires(newHires) {

        while (newHires.length != 3) {
            const response = await fetch(process.env.BACKEND_ENDPOINT+'/employee/new');
            const json = await response.json();

            const newHire = {
                employeeId: json.employee.employeeId,
                employeeTasked: json.employee.employeeTasked,
                employeeName: json.employee.employeeName,
                employeeGender: json.employee.employeeGender,
                employeeType: json.employee.employeeType,
                employeeSalary: json.employee.employeeSalary,
                employeeSkills: json.employee.employeeSkills        
            }

            newHires.push({newHire}) 
        }
    };



    return (
        <>
        <GameStart
            company={company}
            setGame = {setGame}
            newHires = {newHires}
            getNewHires = {getNewHires}
            show={modalShow}
            onHide={() => setModalShow(false)}/>
        
        <div className="App">
            <div className='flex-wrap'>
                <CompanyDashboard company={company} />
                <EmployeeDashboard 
                    employees={employees} 
                    newHires={newHires} 
                    addEmployee={addEmployee} />
            </div>

        </div></>
    );
}

export default App;