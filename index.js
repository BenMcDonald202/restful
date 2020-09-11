const express = require('express');
const app = express();
const tools = require('./library/tools')

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    res.send('Developer Candidate Take Home Test');
  });
  
app.get('/reformatted', (req, res) => {
    res.send(tools.toFormatted(tools.toJson(req.body.csv)));
});

app.listen(port, () => {
    console.log(`Serving running at http://${hostname}:${port}/`);
});

