import React from 'react';
import Card from 'react-bootstrap/Card';
import ActiveEmployeeStatModal from './activeEmployeeStatModal';


function ActiveEmployeeList(props) {
  const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
        <div>
        <Card className='px-4 py-1 text-sm text-black-600 font-semibold rounded-full border hover:text-white hover:bg-blue-200 hover:border-transparent' style={{ width: '10rem' }}>
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