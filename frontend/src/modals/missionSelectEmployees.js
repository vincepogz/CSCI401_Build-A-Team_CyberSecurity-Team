import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import MissionListEmployee from './missionListEmployees';
import MissionEmployeeModalStat from './missionEmployeeModalStat';

function MissionSelectEmployee(props) {
    const [index] = useState(props.index)
    const [assignedEmployee] = useState(props.assignedEmployee)
    const [modalShow, setModalShow] = useState(false);
    const image = process.env.IMG_ENDPOINT + "man-shape.png"
    const employeeExist = Number.isFinite(assignedEmployee[index])

    return (
    <div className="justify-content-around">
    
        { employeeExist 
        ? 
        <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>

        </Card.Body>
        </Card>
        : <MissionEmployeeModalStat
            selectedEmployee={assignedEmployee[index]}  />}

        <Button variant="primary" onClick={() => {setModalShow(true)}}>Pick Employee</Button>
        <MissionListEmployee
            employees = {props.employees}
            index = {props.index}
            assignMission={props.assignMission}
            show={modalShow}
            onHide={() => {setModalShow(false)}}/>
    </div>
    );
}

export default MissionSelectEmployee;