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
            clearEmployeeAssignment()
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
        updateMission()
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

    }

    function clearEmployeeAssignment() {
        assignedEmployees.map((employee) =>{
            if(!Number.isInteger(employee)){
                
                if(activeMissions.length == 0){
                    updateEmployeeAssignment(employee)
                }else{

                    activeMissions.map((mission) => {
                        mission.missionAssignedEmployees.map((assignedEmployee) => {
                            if (assignedEmployee == employee){
                                console.log(employee.employeeName, "Can't Clear Employee Assignment, currently in Mission")
                            } else {
                                updateEmployeeAssignment(employee)
                            }
                        })
                    })
                }   
               
            }
            
        })

        while (assignedEmployees.length != 0){
            assignedEmployees.pop()
        }

        assignedEmployees.push(1)
        assignedEmployees.push(2)
        assignedEmployees.push(3)

        console.log(employees)

    }

    async function getNewHires() {

        while (newHires.length != 0) {
            newHires.pop()
        }

        while (newHires.length != 3) {

            try {
                const response = await fetch(process.env.BACKEND_ENDPOINT+'/employee/new');

                if(!response.ok) {
                    throw new Error(`HTTP error ${response.status}`)
                }
                const json = await response.json();

                newHires.push({
                    employeeId: json.employee.employeeId,
                    employeeTasked: json.employee.employeeTasked,
                    employeeName: json.employee.employeeName,
                    employeeImg: json.employee.employeeImg,
                    employeeGender: json.employee.employeeGender,
                    employeeType: json.employee.employeeType,
                    employeeSalary: json.employee.employeeSalary,
                    employeeSkills: json.employee.employeeSkills
                }) 
            } catch (error) {
            console.log('Error: ', error)
            } 
        }
    };

    //=================EMPLOYEE CONFIG END HERE=====================

    //================MISSIONS CONFIG START HERE====================
    const [activeMissions, setActiveMissions] = useState([]);

    const [newMissions, setNewMissions] = useState([]);

    const [assignedEmployees, setAssignEmployees] = useState([1,2,3])

    function addMission(mission) {

        
        assignedEmployees.map((employee) => {
            if(!Number.isFinite(employee)) {
                mission.missionAssignedEmployees.push(employee)

            }
        })
        activeMissions.push(mission)

        const index = newMissions.findIndex(obj => obj.missionId === mission.missionId)
        newMissions.splice(index,1)

        clearEmployeeAssignment()

    };

    function completeMission(mission) {
        const missionReward = company.current_cash + mission.missionReward
        const index = activeMissions.findIndex(obj => obj.missionId === mission.missionId)
        activeMissions.splice(index,1)
        
        setCompany({...company, current_cash: missionReward})

    };

    function updateMission() {

        activeMissions.map((mission) => {

            mission.missionAssignedEmployees.map((employee) => {
                employee.employeeSkills.map((skill) => {
                    if (skill.skillName === mission.missionDetail.missionType){
                        mission.missionCurrentPoints += (skill.skillValue)*1.75
                    }else {
                        mission.missionCurrentPoints += skill.skillValue

                        if(mission.missionCurrentPoints >= mission.missionRequiredPoints){
                            completeMission(mission)
                        }
                    }
                })
            })
        
   
        })
    };

    function assignMission(employee, index) {
        
        if (Number.isFinite(assignedEmployees[index]))  {
            updateEmployeeAssignment(employee)
            assignedEmployees.splice(index, 1, employee)
        }else {
            updateEmployeeAssignment(assignedEmployees[index])
            updateEmployeeAssignment(employee)
            assignedEmployees.splice(index, 1, employee)
        }

        console.log('Assigned Employee',assignedEmployees)

    };

    async function getNewMissions() {

        while (newMissions.length != 0) {
            newMissions.pop()
        }

        const quantity = (Math.random() * (3-2)|2)

        while (newMissions.length != quantity) {

            try {
                const response = await fetch(process.env.BACKEND_ENDPOINT+'/mission/new');

                if(!response.ok) {
                    throw new Error(`HTTP error ${response.status}`)
                }
                const json = await response.json();

                newMissions.push( {
                    missionId: json.mission.missionId,
                    missionLevel: json.mission.missionLevel,
                    missionReward: json.mission.missionReward,
                    missionRequiredPoints: json.mission.missionRequiredPoints,
                    missionCurrentPoints: json.mission.missionCurrentPoints,
                    missionDetail: json.mission.missionDetail,
                    missionExpiration: json.mission.missionExpiration,
                    missionAssignedEmployees: json.mission.missionAssignedEmployees
            }) 
            } catch (error) {
            console.log(error)
            }
            
        }
    };

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
            setTime={()=> setTimeLeft(60)}/>
        
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
                    assignedEmployees = {assignedEmployees}
                    newMissions={newMissions}
                    addMission={addMission}
                    clearEmployeeAssignment = {clearEmployeeAssignment}
                    assignMission={assignMission}/>
            </div>

        </div></>
    );
}

export default App;