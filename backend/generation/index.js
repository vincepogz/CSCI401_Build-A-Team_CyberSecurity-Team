const {REFRESH_RATE, SECONDS} = require('../config')
const Employee = require('../employee/employee')
const Mission = require('../mission/mission')

const refresRate = REFRESH_RATE * SECONDS;

class Generation {
    constructor() {
        this.expiration = this.calculateExpiration();
    }

    calculateExpiration() {
        const expirationPeriod = Math.floor(Math.random() * (refresRate/2));

        const msUntilExpiration = Math.random() < 0.5 ?
            refresRate - expirationPeriod :
            refresRate + expirationPeriod

        return new Date(Date.now() + msUntilExpiration)
    }

    newEmployee(employeeType, empployeeName) {
        if (Date.now() > this.expiration){
            throw new Error('This generation expired on ${this.expiration}');
        }

        return new Employee(employeeType,empployeeName);
    }

    newMission(missionType) {
        if (Date.now() > this.expiration){
            throw new Error('This generation expired on ${this.expiration}');
        }

        return new Mission(missionType);       
    }
};

module.exports = Generation