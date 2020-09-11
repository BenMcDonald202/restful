const express = require('express');
const app = express();
const tools = require('./library/toJson')

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    res.send('Developer Candidate Take Home Test');
  });
  
app.get('/reformatted', (req, res) => {
    const json = tools.toJson(req.body.csv);
    const response = tools.toFormatted(json);
    res.send(response);
});

app.listen(port, () => {
    console.log(`Serving running at http://${hostname}:${port}/`);
});

