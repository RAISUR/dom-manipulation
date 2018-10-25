 
/* Task 1 */
var heading = document.getElementById('heading');       //Always returns an array;
console.log(heading.innerText);

/* Task 2 using plain JavaScript */
//Task 2a:
var txtBtn = document.getElementById('addText2btn');
txtBtn.addEventListener('click', function(event){
    var task2 = document.getElementById('task2a');
    var p = document.createElement('p');
    p.innerText = "Hello World";
    task2.appendChild(p);
});

//Task 2b:
function changeBGcolor(event){
    var bg = document.getElementsByTagName('body')[0];
    bg.style.backgroundColor = event.target.innerText.toLowerCase();
}

//Task 2c:
function goToGoogle(event){
    window.location.assign("https://www.google.com");
}
/* Task 4 using jQuery */
//Task 4a
$('#addText4').click(function(event){
    var paragraph = $('<p>').text('Hello World');
    $('#task4a').append(paragraph);
});

//Task 4b
function changeBG(event){
    var color = event.target.innerText.toLowerCase();
    $('body').css('background-color', color);
}

//Task 4c
$('#sum').click(function(event){
    var s = Number($("#num1").val()) + Number($("#num2").val());
    $('#result').text(s);
});