import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function MissionEmployeeModalStat(props) {

    const [employee] = useState(props.selectedEmployee)
    const [img] = useState(employee.employeeImg)
    const image = process.env.IMG_ENDPOINT + img

    return(
        <>
        <div>
        <Card className='place-items-center ' style={{ width: '14rem' }}>
          <Card.Img className="mt-3" variant="top" src={image} />
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

        </Card>
        </div>
        </>
    )
};

export default MissionEmployeeModalStat;