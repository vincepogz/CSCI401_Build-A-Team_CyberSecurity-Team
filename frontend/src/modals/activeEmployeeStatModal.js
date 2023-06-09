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

        </Modal>
        </>

    );
    }

export default ActiveEmployeeStatModal;