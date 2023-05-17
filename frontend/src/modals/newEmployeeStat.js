import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function NewEmployeeStat(props) {


    return(
        <>
        <div>
        <Card className='place-items-center ' style={{ width: '14rem' }}>
          <Card.Img className="mt-3" variant="top" src={window.location.origin + '/images/images(2).png'} />
          <Card.Body>
            <Card.Title>{props.newHire.employeeName}</Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
                Salary: ${props.newHire.employeeSalary}
            </ListGroup.Item>
            <ListGroup.Item>{props.newHire.employeeSkills[0].skillName}: {props.newHire.employeeSkills[0].skillValue} </ListGroup.Item>
            <ListGroup.Item>{props.newHire.employeeSkills[1].skillName}: {props.newHire.employeeSkills[1].skillValue}</ListGroup.Item>
            <ListGroup.Item>{props.newHire.employeeSkills[2].skillName}: {props.newHire.employeeSkills[2].skillValue}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
          <Button className="bg-green-500" variant="success" onClick={()=>{props.addEmployee(props.newHire);}}>Accept</Button>
          </Card.Body>
        </Card>
        </div>
        </>
    )
}

export default NewEmployeeStat;