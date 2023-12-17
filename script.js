let intervalId;
let counterValue = 0;
let isAuto = false;

function updateCounter(){

    document.getElementById("counter").textContent = counterValue;
}

function autoIncrement(){
    intervalId = setInterval(function () {
        counterValue++;
        updateCounter();
    },1000)
}

function toggleCounter(){
    if(isAuto){
        clearInterval(intervalId);
    }else{
        autoIncrement();
    }
    isAuto = !isAuto
}

function incrementCounter(){
    clearInterval(intervalId);
    counterValue++;
    updateCounter();
    isAuto = false
}
function decrementCounter(){
    clearInterval(intervalId);
    counterValue--;
    updateCounter();
    isAuto = false
}