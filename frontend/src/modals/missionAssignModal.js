import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MissionSelectEmployee from './missionSelectEmployees';

function MissionAssignModal(props) {
    const [assignEmployees, setAssignEmployees] = useState([]) //pass In props.newMission.missionAssignedEmployees() to push elements
    const [selectEmployee, setSelectEmployee] = useState([1,2,3])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header closeButton onClick={() => props.clearEmployeeAssignment()}>
            <Modal.Title id="contained-modal-title-vcenter">
                New Mission: {props.newMission.missionDetail.missionType}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body className="flex flex-wrap place-content-center">
            <Row >
                <Col>
                    <MissionSelectEmployee
                    employees = {props.employees}
                    selectEmployee = {selectEmployee}
                    assignMission={props.assignMission}
                    index={0}/>
                </Col>
                <Col>
                    <MissionSelectEmployee 
                    employees = {props.employees}
                    selectEmployee = {selectEmployee}
                    assignMission={props.assignMission}
                    index={1}/>
                </Col>
                <Col>
                    <MissionSelectEmployee 
                    employees = {props.employees}
                    selectEmployee = {selectEmployee}
                    assignMission={props.assignMission}
                    index={2}/>
                </Col>
            </Row>
            </Modal.Body>
            <Modal.Footer>
            <Button className="" variant="success" onClick={() => { props.addMission(props.newMission); props.onHide()}}>Accept</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MissionAssignModal;