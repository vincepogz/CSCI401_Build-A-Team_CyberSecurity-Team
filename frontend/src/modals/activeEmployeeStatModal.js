import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ActiveEmployeeStat from "./activeEmployeeStat";

function ActiveEmployeeStatModal(props) {
    
    return (
        <>     
        
        <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        {...props}
        >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
            Employee Information
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ActiveEmployeeStat 
            employee={props.employee}
            removeEmployee = {props.removeEmployee}
            onHide = {props.onHide}
            />

        </Modal.Body>
        <Modal.Footer>
        <Button className="bg-sky-500" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
        </>

    );
    }

export default ActiveEmployeeStatModal;