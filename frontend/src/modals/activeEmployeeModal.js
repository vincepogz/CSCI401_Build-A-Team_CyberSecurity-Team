import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ActiveEmployeeList from './activeEmployeeList';

function ActiveEmployeeModal(props) {
  const [employees] = useState(props.employees);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          View Active Employees
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
            <div className='flex flex-wrap place-content-center'>
              {employees.map((employee)=> {
                
                return(
                  <ActiveEmployeeList
                    employee={employee}
                    removeEmployee = {props.removeEmployee}
                    onHide={props.onHide}
                    />
                )
              })}
            </div>

        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button className="bg-sky-500" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ActiveEmployeeModal;