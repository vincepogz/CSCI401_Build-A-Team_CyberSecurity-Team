import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MissionSelectedEmployeeModal from './missionSelectedEmployeeModal';

function MissionListEmployee(props) {
    const [selectedEmployee, setSelectedEmployee] = useState();
    const [employees] = useState(props.employees);
    const [modalShow, setModalShow] = React.useState(false);
    const image = process.env.IMG_ENDPOINT

  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          View Available Employees
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
        <div className='flex flex-wrap place-content-center'>
              {employees.map((employee)=> {
                if (employee.employeeTasked != true){

                    return(
                    <div key={employee.employeeId}>
                    <Card className='px-4 py-1 text-sm text-black-600 font-semibold rounded-full border hover:text-white hover:bg-blue-200 hover:border-transparent' style={{ width: '10rem' }}>
                      <Card.Img className="mt-3" variant="top" src={image+employee.employeeImg} onClick={() => {setSelectedEmployee(employee); setModalShow(true)}} />
                      {employee.employeeName}
                    </Card>
                    </div>
                )
                }
                
              })}
        </div>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button className="bg-sky-500" onClick={() => {props.onHide();}}>Close</Button>
      </Modal.Footer>
    </Modal>

    <MissionSelectedEmployeeModal
        selectedEmployee = {selectedEmployee} 
        assignMission={props.assignMission}
        index = {props.index}
        show={modalShow}
        onHide={() => {setModalShow(false)}}
        bothHide={() => {setModalShow(false); props.onHide()}}
        />


    </>

  );
}

export default MissionListEmployee;