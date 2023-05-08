const DEFAULT_PROPERTIES = {
    employeeId: undefined,
    employeeName: 'unnamed',

    get employeeType() {

        const employeeTypeValues = ['low','medium','high'];

        const employeeType = employeeTypeValues[
            Math.floor(Math.random() * employeeTypeValues.length)
        ];


        return employeeType;

    },

    employeeSalary: 0,
    employeeSkills: [],
}

class employee {
    constructor({employeeName, employeeType, employeeSalary, employeeSkills}={}) {
        this.employeeName = employeeName || DEFAULT_PROPERTIES.employeeName;
        this.employeeType = employeeType || DEFAULT_PROPERTIES.employeeType;
        this.employeeSalary = employeeSalary || DEFAULT_PROPERTIES.employeeSalary;
        this.employeeSkills = employeeSkills || DEFAULT_PROPERTIES.employeeSkills;
    }
}

module.exports = employee