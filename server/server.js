const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

const one_liners = require('./modules/one-liners')
const history = require('./modules/history')

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));//need to post!

app.get('/all-problems', (req, res) => {
    res.send(history);
});

app.get('/quote', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 16);
    res.send(one_liners[randomNumber]);
});

//push received numbers for adding to module
app.post('/add-numbers', (req, res) => {
    console.log(req.body);//needs body parser
   // addNumbers.push(req.body);
  //  console.log(addNumbers);
   // addNumbers.forEach(function (problem) {
      let addedNum = (parseInt((req.body).x) + parseInt((req.body).y));
      console.log(addedNum);
    const newHistory = {
         x : (req.body).x,
        type : "+",
        y:  (req.body).y,
        ans : addedNum
        };
    history.push(newHistory);
    console.log(history);
    res.sendStatus(200);
});

//subtracts received numbers and pushes them to the history array.
app.post('/sub-numbers', (req, res) => {
    console.log(req.body);
      let subbedNum = (parseInt((req.body).x) - parseInt((req.body).y));
      console.log(subbedNum);
    const newHistory = {
         x : (req.body).x,
        type : "-",
        y:  (req.body).y,
        ans : subbedNum
        };
    history.push(newHistory);
    console.log(history);
    res.sendStatus(200);
});

//multipies received numbers and pushes them to the history array.
app.post('/multi-numbers', (req, res) => {
    console.log(req.body);
      let multiNum = (parseInt((req.body).x) * parseInt((req.body).y));
      console.log(multiNum);
    const newHistory = {
         x : (req.body).x,
        type : "*",
        y:  (req.body).y,
        ans : multiNum
        };
    history.push(newHistory);
    console.log(history);
    res.sendStatus(200);
});

//divdes received numbers and pushes them to the history array.
app.post('/divide-numbers', (req, res) => {
    console.log(req.body);
      let divideNum = (parseInt((req.body).x) / parseInt((req.body).y));
      console.log(divideNum);
    const newHistory = {
         x : (req.body).x,
        type : "/",
        y:  (req.body).y,
        ans : divideNum
        };
    history.push(newHistory);
    console.log(history);
    res.sendStatus(200);
});

//app.get('/reset', (req, res) => {
  //  history.clear();
   // res.send(history);
//});

app.listen(PORT, () => {
    console.log(`up and running on port ${PORT}`);
});