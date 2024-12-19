
const inputbox = document.getElementById("inputbox");
const tocelsius = document.getElementById("tocelsius");
const toferhenhite = document.getElementById("toferhenhite");
const result = document.getElementById("result");
let temp;

function convert(){

    if(tocelsius.checked){
        temp = (inputbox.value)
        temp = (temp - 32) * 5 / 9;
        result.textContent = `${temp.toFixed(1)} C`;

    }
    else if(toferhenhite.checked){
        temp = (inputbox.value)
        temp = (temp * 9) / 5 + 32
        result.textContent = `${temp.toFixed(1)} F`;

    }
    else{
        result.textContent = "Enter a unit"
    }
           
}

