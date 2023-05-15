import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function EmployeeStats(props) {

    const employeeDetail = JSON.parse(JSON.stringify(props.newHire))
    const skillDetails = JSON.parse(JSON.stringify(employeeDetail['newHire'].employeeSkills))

    return(
        <>
        <div>
        <Card className='place-items-center ' style={{ width: '14rem' }}>
          <Card.Img className="mt-3" variant="top" src="https://cdn-icons-png.flaticon.com/512/912/912316.png" />
          <Card.Body>
            <Card.Title>{employeeDetail['newHire'].employeeName}</Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
                Salary: ${employeeDetail['newHire'].employeeSalary}
            </ListGroup.Item>
            <ListGroup.Item>{skillDetails[0].skillName}: {skillDetails[0].skillValue} </ListGroup.Item>
            <ListGroup.Item>{skillDetails[1].skillName}: {skillDetails[1].skillValue}</ListGroup.Item>
            <ListGroup.Item>{skillDetails[2].skillName}: {skillDetails[2].skillValue}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
          <Button className="bg-green-500" variant="success" onClick={props.onHide}>Accept</Button>
          </Card.Body>
        </Card>
        </div>
        </>
    )
}

export default EmployeeStats;