const {REFRESH_RATE, SECONDS} = require('../config')
const Employee = require('../employee/employee')
const Mission = require('../mission/mission')
const LEVEL = require('./randomLevel.json')

const refresRate = REFRESH_RATE * SECONDS;

const getEmployeeGender = function () {
    let genders = ['male', 'female']
    let gender = genders[
        Math.floor(Math.random() * genders.length)
    ]

    return gender
}

const generateRandomLevel = function () {
    const levels = LEVEL[0];
    const level = levels.value[
        Math.floor(Math.random() * levels.value.length)
    ];

    return level
}

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
        const employeeType = generateRandomLevel();
        const employeeGender = getEmployeeGender();

        if (Date.now() > this.expiration){
            throw new Error('This generation expired on ${this.expiration}');
        }

        return new Employee(employeeType,employeeGender);
    }

    newMission() {
        const missionType = generateRandomLevel();
        if (Date.now() > this.expiration){
            throw new Error('This generation expired on ${this.expiration}');
        }

        return new Mission(missionType);       
    }
};

module.exports = Generation