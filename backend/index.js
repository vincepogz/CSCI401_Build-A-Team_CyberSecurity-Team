const express = require('express');
const GenerationEngine = require('./generation/engine');

const app = express();
const engine = new GenerationEngine();

engine.start();

app.get('/employee/new', (req,res) => {
    res.json({employee: engine.generation.newEmployee()});
});

app.listen(3000, () => console.log('Listening on port 3000'));