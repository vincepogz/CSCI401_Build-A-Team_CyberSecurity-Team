import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function ActiveEmployeeStat(props) {
  const [img] = useState(props.employee.employeeImg)
  const image = process.env.IMG_ENDPOINT + img
  const [employee] = useState(props.employee)

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
          <Card.Body>
          <Button className="bg-red-500" variant="danger" onClick={()=>{props.removeEmployee(employee); props.onHide();}}>FIRE</Button>
          </Card.Body>
        </Card>
        </div>
        </>
    )
};

export default ActiveEmployeeStat;