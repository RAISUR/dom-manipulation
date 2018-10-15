 
var heading=document.getElementById('heading');
console.log(heading.innerText);
/*heading.innerText="Changed it";*/
/*heading.innerHTML=<h3>"Changed it"</h3>;*/
/* Task 2 using plain JavaScript */
var textBtn=document.getElementById('addText2');
textBtn.addEventListener('click',function(event){
   var task2=document.getElementById('task2a');
   task2.innerText="Hello World";
   var paragraph = document.createElement('p');
   paragraph.innerText="Hello World";
   task2.appendChild('paragraph');
});

function changeBGcolor(event){
    var body=document.getElementsByTagName('body')[0];
    if(event.target.innerText=="Red"){
        body.style.backgroundColor='red';
    }
    if(event.target.innerText=="Green"){
        body.style.backgroundColor='green';
    }
}
//task 2c
function redirecttoGoogle(event){
    window.location.assign("http://www.google.com")
}

/* Task 4 using jQuery */