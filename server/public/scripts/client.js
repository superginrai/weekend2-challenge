
console.log('JAVA JIVE');

$(document).ready(onReady);


function onReady() {
    console.log('jQuery is go for launch');
    $('#add').on('click', newAdd);
    $('#sub').on('click', newSub);
    $('#multiply').on('click', newMulti);
    $('#divide').on('click', newDivide);
    $('#reset').on('click', reset);
    $('#newOneLiner').on('click', newOneLiner);
}

function newOneLiner() {
    $.ajax({
        type: 'GET',
        url: '/quote'
    })
        .then(function (response) {
            $('#oneLiner').text('"' + response.quote + '"');
            console.log(response);
        });
}

//takes input "add" numbers from the DOM and sends them to the server to be added.
function newAdd (){
    const newProblem = {
    x : $('#numOne').val(),
    y: $('#numTwo').val(),
    type: "Add"
    };
    console.log('New problem object', newProblem);
    $.ajax({
        method: 'POST',
        url: '/add-numbers',
        data: newProblem
    })
    .then(function(response){
        console.log(response);
        logAllProblems();
    });
}

//takes input "subtract" numbers from the DOM and sends them to the server to be subtracted.
function newSub (){
    const newProblem = {
    x : $('#numOne').val(),
    y: $('#numTwo').val(),
    type: "Subtract"
    };
    console.log('New problem object', newProblem);
    $.ajax({
        method: 'POST',
        url: '/sub-numbers',
        data: newProblem
    })
    .then(function(response){
        console.log(response);
        logAllProblems();
    });
}

//takes input "multi" numbers from the DOM and sends them to the server to be multiplied.
function newMulti (){
    const newProblem = {
    x : $('#numOne').val(),
    y: $('#numTwo').val(),
    type: "Multi"
    };
    console.log('New problem object', newProblem);
    $.ajax({
        method: 'POST',
        url: '/multi-numbers',
        data: newProblem
    })
    .then(function(response){
        console.log(response);
        logAllProblems();
    });
}

//takes input "divide" numbers from the DOM and sends them to the server to be divided.
function newDivide (){
    const newProblem = {
    x : $('#numOne').val(),
    y: $('#numTwo').val(),
    type: "Divide"
    };
    console.log('New problem object', newProblem);
    $.ajax({
        method: 'POST',
        url: '/divide-numbers',
        data: newProblem
    })
    .then(function(response){
        console.log(response);
        logAllProblems();
    });
}

//get the history of all problems from the server and append them to the DOM.
function logAllProblems (){
    $.ajax({
        type: 'GET', 
        url: '/all-problems'
    })
    .then(function(response) {
        $('#allProblems').empty();
        $('#history').empty();
        $('#history').append('Body-Count History:')
        response.forEach(function(element){
        $('#allProblems').append(
            '<li>' + element.x + ' ' + element.type + ' ' + element.y + ' = ' + element.ans + '</li>')
        });
    });
}

function reset (){
        $('#allProblems').empty();
        $('#history').empty();
        $('#numOne').val('');
        $('#numTwo').val('');
}