const {REFRESH_RATE, SECONDS} = require('../config')
const Employee = require('../employee/employee')

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

    newEmployee() {
        if (Date.now() > this.expiration){
            throw new Error('This generation expired on ${this.expiration}');
        }

        return new Employee;
    }
};

module.exports = Generation