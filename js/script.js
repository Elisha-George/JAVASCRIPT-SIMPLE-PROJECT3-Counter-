let btnIncrease =document.getElementById("increase");
let btnDecrease =document.getElementById("decrease");
let btnReset =document.getElementById("reset");

let countDisplay=document.getElementById("count");
let count=0;


btnIncrease.addEventListener('click', function()
{

    count ++;
    countDisplay.style.color="green";
    countDisplay.textContent=count;

})


btnDecrease.addEventListener('click', function()
{

    count --;
    countDisplay.style.color="red";
    countDisplay.textContent=count;

})

btnReset.addEventListener('click', function()
{ 

    count=0;
    countDisplay.style.color="purple";
    countDisplay.textContent=count;
    

})