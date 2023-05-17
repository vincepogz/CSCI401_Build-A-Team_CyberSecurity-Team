import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MissionSelectedEmployeeStat from "./missionSelectedEmployeeStat";

function MissionSelectedEmployeeModal(props) {
    
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
            <MissionSelectedEmployeeStat 
            selectedEmployee={props.selectedEmployee}
            assignMission={props.assignMission}
            index = {props.index}
            onHide = {props.onHide}
            bothHide = {props.bothHide}
            />

        </Modal.Body>

        </Modal>
        </>

    );
    }

export default MissionSelectedEmployeeModal;