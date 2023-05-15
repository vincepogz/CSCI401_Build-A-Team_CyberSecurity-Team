import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EmployeeStats from './employeeHireStat';

function ThreeWindowModal(props) {
  const [newHires, setNewHires] = useState(props.newHires)

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <div className='flex flex-wrap place-content-center'>
          {newHires.map((newHire)=> {
            return(
              <EmployeeStats 
                newHire={newHire} 
                onHide={props.onHide}
                addEmployee={props.addEmployee}/>
            )
          })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="bg-sky-500" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ThreeWindowModal;