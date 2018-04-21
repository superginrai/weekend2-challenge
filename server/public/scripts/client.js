
console.log('JAVA JIVE');

$(document).ready(onReady);



function onReady() {
    console.log('jQuery is go for launch');
    $('#add').on('click', newAdd);
  //  $('#sub').on('click', newSub);
    //$('#multiply').on('click', newMulti);
   // $('#divide').on('click', newDivide);
}

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

function logAllProblems (){
    $.ajax({
        type: 'GET', 
        url: '/all-problems'
    })
    .then(function(response) {
        $('#allProblems').empty();
        response.forEach(function(element){
        $('#allProblems').append(
            '<li>' + element.x + element.type + element.y + element.ans+ '<li>')
        });
    });
}