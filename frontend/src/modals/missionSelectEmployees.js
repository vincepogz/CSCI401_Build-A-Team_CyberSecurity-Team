import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import MissionListEmployee from './missionListEmployees';

function MissionSelectEmployee(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
    <div className="d-flex justify-content-around">

        <Card style={{ width: '14rem' }}>


        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>


            <Button variant="primary" onClick={() => {setModalShow(true)}}>Pick Employee {props.index}</Button>
        </Card.Body>
        </Card>

        <MissionListEmployee
            employees = {props.employees}
            selectEmployee = {props.selectEmployee}
            index = {props.index}
            assignMission={props.assignMission}
            show={modalShow}
            onHide={() => {setModalShow(false)}}/>
    </div>
    );
}

export default MissionSelectEmployee;