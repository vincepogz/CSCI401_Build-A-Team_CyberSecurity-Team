import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ThreeWindowModal from '../modals/threeWindowModal';
import ViewActiveEmployees from '../modals/viewActiveEmployees';

function EmployeeDashboard(props) {
    const [hireEmployees, setHireEmployees] = useState(false);
    const [viewEmployees, setViewEmployees] = useState(false);

    return(
        <>
        <div>
            <div className="m-2 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48 object-scale-down" src="https://cdn-icons-png.flaticon.com/512/4807/4807598.png" alt="Modern building architecture"/>
                    </div>
                    <div className="p-8">
                        <div className="mb-5 uppercase tracking-wide text-lg text-indigo-500 font-semibold">Options</div>
                        <div className="flex flex-wrap">
                            <Button className="bg-sky-500 m-2" variant="primary" onClick={() => setHireEmployees(true)}>
                                Hire New Employees
                            </Button>
                            <Button className="bg-sky-500 m-2" variant="primary" onClick={() => setViewEmployees(true)}>
                                View Active Employees
                            </Button>
                        </div>
                        

                        <ThreeWindowModal
                            show={hireEmployees}
                            onHide={() => setHireEmployees(false)}
                        />
                        <ViewActiveEmployees
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