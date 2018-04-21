const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

const addNumbers = require('./modules/add-numbers')
const history = require('./modules/history')

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));//need to post!

//push received numbers for adding to module
app.post('/add-numbers', (req, res) => {
    console.log(req.body);//needs body parser
    addNumbers.push(req.body);
    console.log(addNumbers);
    addNumbers.forEach(function (problem) {
      let addedNum = (parseInt(problem.x) + parseInt(problem.y));
      console.log(addedNum);
    const newHistory = {
         x : problem.x,
        type : "+",
        y:  problem.y,
        ans : addedNum
        };
    history.push(newHistory);
    console.log(history);
    });
    res.sendStatus(200);
});


//function returnAdd (){
 //   (addNumbers[0].x + addNumbers[0].y) = addedNums;
//console.log(addedNums);
//};

app.listen(PORT, () => {
    console.log(`up and running on port ${PORT}`);
});