const Generation = require('./generation/index.js')

const generation = new Generation();

const newEmployee = generation.newEmployee();

console.log('generation', generation);
console.log('Employee: ', newEmployee);

console.log('Hello World')
