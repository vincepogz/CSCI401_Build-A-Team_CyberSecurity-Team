import React, { Component } from 'react';

class CompanyDetails extends Component {
    state = {
       company: {name: 'John Jay College', money: '100'} };

       componentDidMount() {
        this.fetchCompany();
       };

       fetchCompany = () => {
        fetch('http://localhost:3000/employee/new')
        .then(response => response.json())
        .then(json => {console.log('json', json)})
        .catch(err => console.error('error', err))
       };
 
    render() {

        const {company} = this.state

        return (
            

            <div>
                <h3>Company Details</h3>
                <h2>Company Name: {company.name}</h2>

            </div>
        )
    }
}

export default CompanyDetails;