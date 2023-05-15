const express = require('express');
const GenerationEngine = require('./generation/engine');
const cors = require('cors')
const PORT = process.env.PORT || 3000
const FRONTEND_ENDPOINT = process.env.FRONTEND_ENDPOINT
const app = express();
const engine = new GenerationEngine();

engine.start();
app.use(cors({ origin: FRONTEND_ENDPOINT}));
app.get('/employee/new', (req,res) => {
    res.json({employee: engine.generation.newEmployee()});
});

app.get('/mission/new', (req,res) => {
    res.json({employee: engine.generation.newMission()});
});

app.listen(3000, () => console.log(`Listening to port: ${PORT}`));