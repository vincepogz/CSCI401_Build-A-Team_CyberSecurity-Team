import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ActiveEmployeeStatModal from './activeEmployeeStatModal';


function ActiveEmployeeList(props) {
  const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
        <div>
        <Card className='place-items-center m-2' style={{ width: '10rem' }}>
          <Card.Img className="mt-3" variant="top" src="https://cdn-icons-png.flaticon.com/512/912/912316.png" onClick={() => setModalShow(true)} />
          {props.employee.employeeName}
        </Card>
        </div>

        <ActiveEmployeeStatModal 
          show={modalShow}
          employee={props.employee}
          removeEmployee = {props.removeEmployee}
          onHide={() => setModalShow(false)}/>

        </>
    )
}

export default ActiveEmployeeList;