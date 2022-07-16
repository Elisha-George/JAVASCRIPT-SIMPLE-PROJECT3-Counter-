// let btnIncrease =document.getElementById("increase");
// let btnDecrease =document.getElementById("decrease");
// let btnReset =document.getElementById("reset");

// let countDisplay=document.getElementById("count");
// let count=0;


// btnIncrease.addEventListener('click', function()
// {

//     count ++;
//     countDisplay.style.color="green";
//     countDisplay.textContent=count;

// })


// btnDecrease.addEventListener('click', function()
// {

//     count --;
//     countDisplay.style.color="red";
//     countDisplay.textContent=count;

// })

// btnReset.addEventListener('click', function()
// { 

//     count=0;
//     countDisplay.style.color="purple";
//     countDisplay.textContent=count;
// })
// ---------------------VERY BASIC CODE------------

let counter=0;
let value=document.getElementById("count");
let btn=document.querySelectorAll(".btns");

btn.forEach(function(btns)
{
    
// it will fetch values in a npde list 

btns.addEventListener('click', function(e)
{
    // e object of event

    const styles=e.currentTarget.classList;
    console.log(styles)
    if(styles.contains("decrease"))
    {
        counter--;
    }
    else if(styles.contains("increase"))
    {
        counter++;
    }
    else
    {
        counter=0;
    }

    if(counter < 0)
    {
        value.style.color='red';
    }
    if(counter > 0)
    {
        value.style.color='green';
    } if(counter == 0)
    {
        value.style.color='purple';
    }
    value.textContent=counter;
    console.log(counter)

})

})
