import React, {useState} from 'react';
import './App.css';
import GameStart from "./components/gameSystem";
import CompanyDashboard from './components/companyDashboard'


function App() {

    const [modalShow, setModalShow] = useState(true);

    const [company, setCompany] = useState(
        {
            name: 'New Company',
            current_cash: 0,
            current_cost: 0,
            img: 'https://this-person-does-not-exist.com/img/avatar-gen11a58ae9880bf7fadad7bab1c65efddd.jpg'
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

    function setGame(newName, company) {
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
            setGame = {setGame}
            show={modalShow}
            onHide={() => setModalShow(false)}/>
        
        <div className="App">
            <header className='App-header'>
                <CompanyDashboard company={company} />
            </header>

        </div></>
    );
}

export default App;