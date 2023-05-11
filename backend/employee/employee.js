const SKILLS = require('./employeeSkills.json')
employeeCount = 1; 

const DEFAULT_PROPERTIES = {
    
    employeeId: 0,
    employeeTasked: false,
    employeeName: 'unnamed',
    employeeType: 'unset',
    employeeSalary: 0,
    employeeSkills: [],
    
}

const getSalaryRange = function (employeeType) {
    if (employeeType == 'high') {
        return [2400,2900]
    } else if (employeeType == 'medium') {
        return [1200,1800]
    } else {
        return [600,900]
    }
}

const getEmployeeSalary = function (employeeType) {
    const salaryRange = getSalaryRange(employeeType);
    const employeeSalary = Math.random() * (salaryRange[1]-salaryRange[0]) | salaryRange[0]

    return employeeSalary
};

const getSkillPoints = function (employeeType) {
    if (employeeType == 'high'){
        return [7,8,9]
    } else if (employeeType == 'medium') {
        return [4,5,6]
    } else {
        return [1,2,3]
    }
}

const getEmployeeSkills = function (employeeType) {
    const employeeSkills = [];
    const skillPoints = getSkillPoints(employeeType);

    while (employeeSkills.length != 3) {

        SKILLS.forEach(SKILLS => {

            const skillValues = SKILLS.values;

            const skillName = skillValues[
                Math.floor(Math.random() * skillValues.length)
            ]

            const skillValue = skillPoints[
                Math.floor(Math.random() * skillPoints.length)
            ]

            employeeSkills.push({skillName, skillValue})

        })
 
    }

    return employeeSkills;
    
};

class Employee {
    constructor(employeeType, employeeName) {
        this.employeeId = employeeCount++ || DEFAULT_PROPERTIES.employeeId;
        this.employeeTasked = DEFAULT_PROPERTIES.employeeTasked;
        this.employeeName = employeeName || DEFAULT_PROPERTIES.employeeName;
        this.employeeType = employeeType || DEFAULT_PROPERTIES.employeeType;
        this.employeeSalary = getEmployeeSalary(employeeType) || DEFAULT_PROPERTIES.employeeSalary;
        this.employeeSkills = getEmployeeSkills(employeeType) || DEFAULT_PROPERTIES.employeeSkills;
    }
}

module.exports = Employee;