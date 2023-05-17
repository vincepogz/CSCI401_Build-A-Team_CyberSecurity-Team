import React, {useEffect, useState} from 'react';
import GameStart from "./modals/gameSystem";
import CompanyDashboard from './components/companyDashboard'
import EmployeeDashboard from './components/employeeDashboard';
import GameRoundDashboard from './components/gameRoundDashboard';
import MissionDashboard from './components/missionDashboard';
import MissionBoard from './components/missionBoard';


function App() {

    //=================SYSTEM CONFIG START HERE=====================
    const [modalShow, setModalShow] = useState(true);

    const [company, setCompany] = useState(
        {
            name: 'New Company',
            current_cash: 25000,
            current_cost: 0,
            img: 'https://www.jjay.cuny.edu/sites/default/files/marketing_development/logos/JJC_Logo.png'
        }
    );

    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        if(timeLeft===0){
            updateGame()
            getNewHires()
            getNewMissions()
            if (company.current_cash <= 0){
                setTimeLeft(null)
            }else{
                setTimeLeft(60)
            }
        }
    
        if (!timeLeft) return;
    
        const intervalId = setInterval(() => {
    
        setTimeLeft(timeLeft - 1);
        }, 1000);
    
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    function setGame(newName, company) {
        setCompany({...company, name: newName})
    };

    function updateGame() {

        const new_cash = company.current_cash - company.current_cost
        setCompany({...company, current_cash: new_cash})
        
    }

    //==================SYSTEM CONFIG END HERE======================

    //================EMPLOYEE CONFIG START HERE====================

    const [employees, setEmployees] = useState([]);

    const [newHires, setNewHires] = useState([]);

    function addEmployee(employee) {
        const new_cost = company.current_cost + employee.employeeSalary
        employees.push(employee)

        const index = newHires.findIndex(obj => obj.employeeId === employee.employeeId)
        newHires.splice(index,1)

        setCompany({...company, current_cost: new_cost})
    };

    function removeEmployee(employee) {
        const new_cost = company.current_cost - employee.employeeSalary;

        const index = employees.findIndex(obj => obj.employeeId === employee.employeeId)
        employees.splice(index,1)

        setCompany({...company, current_cost: new_cost})
    };

    function updateEmployeeAssignment(employee) {
        const newAssignment = !employee.employeeTasked
        const index = employees.findIndex(obj => obj.employeeId === employee.employeeId)

        employees[index].employeeTasked = newAssignment

        console.log("Updating Employee Tasked", employees[index])
    }

    async function getNewHires() {

        while (newHires.length != 0) {
            newHires.pop()
        }

        while (newHires.length != 3) {
            const response = await fetch(process.env.BACKEND_ENDPOINT+'/employee/new');
            const json = await response.json();


            newHires.push({
                employeeId: json.employee.employeeId,
                employeeTasked: json.employee.employeeTasked,
                employeeName: json.employee.employeeName,
                employeeGender: json.employee.employeeGender,
                employeeType: json.employee.employeeType,
                employeeSalary: json.employee.employeeSalary,
                employeeSkills: json.employee.employeeSkills    
            }) 
        
        }
    };

    //=================EMPLOYEE CONFIG END HERE=====================

    //================MISSIONS CONFIG START HERE====================
    const [activeMissions, setActiveMissions] = useState([]);

    const [newMissions, setNewMissions] = useState([]);

    const [assignedEmployees, setAssignEmployees] = useState([,,])

    function addMission(mission) {

    };

    function removeMission(mission) {

    };

    function updateMission(mission) {

    };

    function assignMission(employee, index) {
        if (assignedEmployees[index] == null)  {
            console.log("empty, adding")
            updateEmployeeAssignment(employee)
            assignedEmployees.splice(index, 0, employee)
        }else {
            updateEmployeeAssignment(assignedEmployees[index])
            console.log("Unassigned: ", assignedEmployees[index])
            updateEmployeeAssignment(employee)
            assignedEmployees.splice(index, 1, employee)
        }


        console.log("Assigned: ", assignedEmployees)
    };

    async function getNewMissions() {
        while (newMissions.length != 0) {
            newMissions.pop()
        }

        const quantity = (Math.floor(Math.random() * 3))

        while (newMissions.length != 3) {
            const response = await fetch(process.env.BACKEND_ENDPOINT+'/mission/new');
            const json = await response.json();

            const mission = {
                missionId: json.mission.missionId,
                missionLevel: json.mission.missionLevel,
                missionReward: json.mission.missionReward,
                missionRequiredPoints: json.mission.missionRequiredPoints,
                missionCurrentPoints: json.mission.missionCurrentPoints,
                missionDetail: json.mission.missionDetail,
                missionExpiration: json.mission.missionExpiration,
                missionAssignedEmployees: json.mission.missionAssignedEmployees
            }

            newMissions.push(mission) 
            
        }
    };

    useEffect(() => {
        getNewMissions();
      }, []);

    //=================MISSIONS CONFIG END HERE=====================

    return (
        <>
        <GameStart
            company={company}
            setGame = {setGame}
            newHires = {newHires}
            getNewHires = {getNewHires}
            getNewMissions = {getNewMissions}
            show={modalShow}
            onHide={() => setModalShow(false)}
            setTime={()=> setTimeLeft(900)}/>
        
        <div className="App">
            <div className='flex'>
                <CompanyDashboard company={company} />
                <EmployeeDashboard 
                    employees={employees} 
                    newHires={newHires} 
                    addEmployee={addEmployee}
                    removeEmployee={removeEmployee} />
                <GameRoundDashboard timeLeft={timeLeft}/>
            </div>
            <div className='flex flex-wrap'>
                <MissionDashboard />
                <MissionBoard 
                    employees = {employees}
                    activeMissions={activeMissions}
                    newMissions={newMissions}
                    assignMission={assignMission}/>
            </div>

        </div></>
    );
}

export default App;