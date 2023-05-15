import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import NewEmployeeModal from '../modals/newEmployeeModal';
import ActiveEmployeeModal from '../modals/activeEmployeeModal';

function EmployeeDashboard(props) {
    const [hireEmployees, setHireEmployees] = useState(false);
    const [viewEmployees, setViewEmployees] = useState(false);
    const [employees] = useState(props.employees);
    const [newHires] = useState(props.newHires);

    return(
        <>
        <div>
            <div className="m-2 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48 object-scale-down" src="https://cdn-icons-png.flaticon.com/512/4807/4807598.png" alt="Modern building architecture"/>
                    </div>
                    <div className="p-8">
                        <div className="mb-5 uppercase tracking-wide text-lg text-indigo-500 font-semibold">EMPLOYEE DASHBOARD</div>
                        <div className="flex flex-wrap">
                            <Button className="bg-sky-500 m-2" variant="primary" onClick={() => setHireEmployees(true)}>
                                Hire New Employees
                            </Button>
                            <Button className="bg-sky-500 m-2" variant="primary" onClick={() => setViewEmployees(true)}>
                                View Active Employees
                            </Button>
                        </div>
                        
                        <NewEmployeeModal
                            title="Hire New Employees"
                            newHires = {newHires}
                            show={hireEmployees}
                            addEmployee={props.addEmployee}
                            onHide={() => setHireEmployees(false)}
                        />
                        <ActiveEmployeeModal
                            title="View Active Employees"
                            employees = {employees}
                            removeEmployee = {props.removeEmployee}
                            show={viewEmployees}
                            onHide={() => setViewEmployees(false)}
                        />

                    </div>
                </div>
            </div>

        </div>
        </>
    )

}

export default EmployeeDashboard;