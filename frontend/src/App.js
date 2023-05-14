import React, {useState} from 'react';
import GameStart from "./modals/gameSystem";
import CompanyDashboard from './components/companyDashboard'
import EmployeeDashboard from './components/employeeDashboard';


function App() {

    const [modalShow, setModalShow] = useState(false);

    const [company, setCompany] = useState(
        {
            name: 'New Company',
            current_cash: 0,
            current_cost: 0,
            img: 'https://www.jjay.cuny.edu/sites/default/files/marketing_development/logos/JJC_Logo.png'
        }
    );

    const [employees, setEmployees] = useState([
        {
            employeeId: 0,
            employeeTasked: false,
            employeeName: 'unnamed',
            employeeGender: 'unset',
            employeeType: 'unset',
            employeeSalary: 0,
            employeeSkills: [],
        }
    ]);

    const [activeMissions, setActiveMissions] = useState([
        {
            missionId: 0,
            missionLevel: 'unset',
            missionReward: 0,
            missionRequiredPoints: 0,
            missionCurrentPoints: 0,
            missionDetail: 'unset',
            missionExpiration: new Date(),
            missionAssignedEmployees: []
        }
    ])

    function editEmployees() {

    };

    function editGame(newName, company) {
        setCompany({
            name: newName,
            current_cash: company.current_cash,
            current_cost: company.current_cost,
            img: company.img
        })
    }

    return (
        <>
        <GameStart
            company={company}
            setGame = {editGame}
            show={modalShow}
            onHide={() => setModalShow(false)}/>
        
        <div className="App">
            <div className='flex-wrap'>
                <CompanyDashboard company={company} />
                <EmployeeDashboard employees={employees} editEmployees={editEmployees} />
            </div>

        </div></>
    );
}

export default App;