import React from 'react';

function Company(props) {
    return (
        <>
        <div>
            Company Name: {props.company.name}
            <br/>
            Current Cash: ${props.company.current_cash}
            <br/>
            Operation Cost: ${props.company.current_cost}
        </div>
        </>
    )
}

export default Company;