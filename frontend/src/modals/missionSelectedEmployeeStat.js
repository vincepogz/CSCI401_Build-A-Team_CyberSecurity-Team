import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function MissionSelectedEmployeeStat(props) {

    const [employee] = useState(props.selectedEmployee)

    return(
        <>
        <div>
        <Card className='place-items-center ' style={{ width: '14rem' }}>
          <Card.Img className="mt-3" variant="top" src="https://cdn-icons-png.flaticon.com/512/912/912316.png" />
          <Card.Body>
            <Card.Title>{employee.employeeName}</Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
                Salary: ${employee.employeeSalary}
            </ListGroup.Item>
            <ListGroup.Item>{employee.employeeSkills[0].skillName}: {employee.employeeSkills[0].skillValue} </ListGroup.Item>
            <ListGroup.Item>{employee.employeeSkills[1].skillName}: {employee.employeeSkills[1].skillValue}</ListGroup.Item>
            <ListGroup.Item>{employee.employeeSkills[2].skillName}: {employee.employeeSkills[2].skillValue}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
          <Button className="bg-red-500" variant="success" onClick={()=>{props.assignMission(employee,props.index); props.bothHide();}}>Accept</Button>
          </Card.Body>
        </Card>
        </div>
        </>
    )
};

export default MissionSelectedEmployeeStat;